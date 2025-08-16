---
outline: deep
---

# 🔑 签名算法说明

MiaoSpeed 的部分 API 请求需要进行签名验证。  
以下为 **签名算法参考实现**，由社区提供（来源：<https://www.msl.la/archives/564/>）。  

---

## 📌 核心算法

MiaoSpeed 的签名算法基于 **SHA-512 哈希** 与 **Base64 URL-Safe 编码**，实现方式类似 AWS V4 签名。

- **输入**：
  - `request`：请求字符串（⚠️ 必须与 Go 的 `encoding/json` 序列化结果完全一致）
  - `token`：主 Token
  - `BUILDTOKEN`：扩展 Token（由服务端配置，多个以 `|` 分隔）

- **流程**：
  1. 初始化 `hasher = sha512.New()`
  2. 写入 `request`
  3. 遍历 `token + BUILDTOKEN` 中的每个段 `t`
     - 若 `t` 为空，替换为 `"SOME_TOKEN"`
     - 更新哈希：`hasher.Write(hasher.Sum([]byte(t)))`
  4. 结果：`sig = base64.URLEncoding.EncodeToString(hasher.Sum(nil))`

---

## ✅ Go 参考实现（[miaospeed/utils/challenge.go](https://github.com/MiaoMagic/miaospeed/blob/df6202409e87c5d944ab756608fd31d35390b5c0/utils/challenge.go#L15)）

```go
// aws-v4-signature-like signing method
func hashMiaoSpeed(token, request string) string {
	buildTokens := append([]string{token}, strings.Split(strings.TrimSpace(BUILDTOKEN), "|")...)

	hasher := sha512.New()
	hasher.Write([]byte(request))

	for _, t := range buildTokens {
		if t == "" {
			// unsafe, please make sure not to let token segment be empty
			t = "SOME_TOKEN"
		}
		hasher.Write(hasher.Sum([]byte(t)))
	}

	return base64.URLEncoding.EncodeToString(hasher.Sum(nil))
}
```

---

## ⚠️ 注意事项

1. `request` **必须严格遵守 Go `encoding/json` 序列化规范**（见下一节）。  
2. `BUILDTOKEN` 中若存在空段，会被替换为 `"SOME_TOKEN"`。  
3. 建议在签名前 **打印原始 `request`**，与服务端输出逐字节比对，排查问题。

---

## ⚠️ 与 Go 的 JSON 序列化保持一致

MiaoSpeed 后端使用 **Go 的 `encoding/json`**。跨语言实现时必须保持一致，否则会导致签名校验失败：

- **UTF-8 编码**
- **紧凑 JSON**：无缩进、无多余空格（如 `{"a":1,"b":2}`）
- **不转义中文**（不要写成 `\u4e2d\u6587`）
- **不要额外转义 `/`**（Go 默认也不转义）
- **键顺序**：  
  - 结构体字段：按定义顺序  
  - Map：建议字典序排序，确保稳定输出
- **换行统一为 `\n`**
- 强烈建议：签名前后都打印 `request` 原文，逐字节对比

---

## 🌐 各语言生成 Go 风格 JSON 示例

> 目标：与 Go `encoding/json` 的紧凑 JSON 保持一致。

### Go
```go
b, _ := json.Marshal(obj) // 紧凑、UTF-8、不转义中文
s := string(b)
```

### Python
```python
import json
def to_go_json(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':'), sort_keys=True)
```

### JavaScript
```js
function toGoJSON(obj) {
  const sortObject = (o) =>
    Object.fromEntries(Object.keys(o).sort().map(k => [k, o[k]]));
  return JSON.stringify(sortObject(obj));
}
```

### PHP
```php
function to_go_json($arr) {
  if (is_array($arr)) ksort($arr); // map 类数组先按键排序
  return json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}
```

### Java (Jackson)
```java
ObjectMapper M = new ObjectMapper()
  .configure(SerializationFeature.ORDER_MAP_ENTRIES_BY_KEYS, true)
  .configure(JsonGenerator.Feature.ESCAPE_NON_ASCII, false);
String json = M.writeValueAsString(obj); // 默认紧凑输出
```

---

## 💻 签名算法参考实现

### PHP
```php
function hashMiaoSpeed($token, $request) {
  $buildTokens = array_merge([$token], explode("|", trim(BUILDTOKEN)));

  $hasher = hash_init("sha512");
  hash_update($hasher, $request);

  foreach ($buildTokens as $t) {
    if ($t == "") $t = "SOME_TOKEN";
    $copy = hash_copy($hasher);
    hash_update($copy, $t);
    hash_update($copy, hash_final($hasher, true));
    $hasher = $copy;
  }

  $hash = hash_final($hasher, true);
  return strtr(base64_encode($hash), '+/', '-_'); // URL-safe
}
```

### Python
```python
import hashlib, base64

def hash_miao_speed(token, request):
    build_tokens = [token] + BUILDTOKEN.strip().split("|")
    hasher = hashlib.sha512()
    hasher.update(request.encode("utf-8"))
    for t in build_tokens:
        if t == "":
            t = "SOME_TOKEN"
        copy = hasher.copy()
        copy.update(t.encode("utf-8"))
        copy.update(hasher.digest())
        hasher = copy
    return base64.urlsafe_b64encode(hasher.digest()).decode()
```

### Rust
```rust
use sha2::{Digest, Sha512};
use base64::URL_SAFE;

fn hash_miao_speed(token: &str, request: &str) -> String {
    let mut build_tokens = vec![token.to_owned()];
    build_tokens.extend(BUILDTOKEN.split("|").map(|s| s.to_owned()));

    let mut hasher = Sha512::new();
    hasher.update(request);

    for t in build_tokens {
        let mut copy = hasher.clone();
        copy.update(t.as_bytes());
        copy.update(hasher.finalize().as_slice());
        hasher = copy;
    }

    base64::encode_config(hasher.finalize(), URL_SAFE)
}
```

### Java (JDK 11+)
```java
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Base64;
import java.util.List;

public class Main {
  public static String hashMiaoSpeed(String token, String request) {
    List<String> buildTokens = List.of(token, "aa", "bb", "cc", "dd", "ee");
    MessageDigest hasher;
    try { hasher = MessageDigest.getInstance("SHA-512"); }
    catch (Exception e) { throw new RuntimeException(e); }

    hasher.update(request.getBytes(StandardCharsets.UTF_8));
    for (String t : buildTokens) {
      String seg = (t.isEmpty() ? "SOME_TOKEN" : t);
      try {
        MessageDigest copy = (MessageDigest) hasher.clone();
        copy.update(seg.getBytes(StandardCharsets.UTF_8));
        copy.update(hasher.digest());
        hasher = copy;
      } catch (CloneNotSupportedException e) {
        throw new RuntimeException(e);
      }
    }
    return Base64.getUrlEncoder().withoutPadding().encodeToString(hasher.digest());
  }
}
```

---

✍️ 作者：社区贡献者 
📌 来源：<https://www.msl.la/archives/564/>

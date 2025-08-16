---
outline: deep
---

# 🐳 Docker 部署 MiaoSpeed

## 📦 Docker 镜像

MiaoSpeed 提供两个版本镜像：

- `latest` → 稳定版  
- `beta` → 最新测试版（推荐）

### 拉取镜像

```bash
docker pull moshaoli688/miaospeed:latest
docker pull moshaoli688/miaospeed:beta
```

### 预构建镜像（推荐国内用户）

我们已提供预构建好的离线镜像，可通过 `curl` 下载后导入：

```bash
curl -L https://down.miaospeed.com/containers/miaospeed_amd64_latest.tar -o /tmp/miaospeed.tar.gz && \
docker load -i /tmp/miaospeed.tar.gz && rm -f /tmp/miaospeed.tar.gz
```

> 📌 其他架构：
> - [miaospeed_arm64_latest.tar](https://down.miaospeed.com/containers/miaospeed_arm64_latest.tar)  
> - [miaospeed_arm_latest.tar](https://down.miaospeed.com/containers/miaospeed_arm_latest.tar)  

---

## ⚙️ 环境变量

可用的环境变量如下：

| 变量 | 说明 |
|------|------|
| `MIAOSPEED_META` | 启用 META，默认不设置即可 |
| `MIAOSPEED_MTLS` | 启用 mTLS，值为 `1` |
| `MIAOSPEED_TOKEN` | 验证 Token |
| `MIAOSPEED_PATH` | 设置 WebSocket 路径（仅限 beta 版） |
| `MIAOSPEED_WHITELIST` | 白名单，格式：`1111,2222,3333` |
| `MIAOSPEED_NOSPEED` | 禁止测速，值为 `1` |
| `MIAOSPEED_CONNTHREAD` | 线程池大小，默认 64；低内存建议 ≤32 |
| `MIAOSPEED_MMDB` | 启用 MMDB |

---

## 🚀 一键部署

我们提供了 **一键部署脚本**，会自动拉取镜像并运行：

```bash
curl -fsSL https://sh.msl.la/docker/install-lite.sh -o install.sh && \
bash install.sh --net=host --port=20221 --token=你的token
```

参数说明：

- `--net=host|bridge` → 网络模式（默认 host）  
- `--port=20221` → 容器对外暴露端口  
- `--token=xxx` → 指定 Token（不填自动生成）  
- `--path=/usr/local/bin/miaospeed` → 自定义路径（可选）  

---

## 🖐 手工部署

### Docker Run

默认端口：`9966`

```bash
docker run -d -p 9966:9966 \
  --name=miaospeed \
  --restart=always \
  -e MIAOSPEED_MTLS=1 \
  -e MIAOSPEED_TOKEN=<你的token> \
  moshaoli688/miaospeed:beta
```

### Docker Compose

默认端口：`9966`

```yaml
services:
  miaospeed:
    image: moshaoli688/miaospeed:beta
    restart: always
    ports:
      - '9966:9966'
    environment:
      - TZ=Asia/Shanghai
      - MIAOSPEED_META=1
      - MIAOSPEED_MTLS=1
      - MIAOSPEED_WHITELIST=1111,2222,3333
    mem_limit: 2048m
    logging:
      driver: json-file
      options:
        max-size: '200m'
        max-file: '3'
```

启动：

```bash
docker compose up -d
```

---

## 🛠 更新 MMDB

```bash
docker exec -it miaospeed ./miaospeed misc -maxmind-update-license 你的key
docker restart miaospeed
```

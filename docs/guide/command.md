---
outline: deep
---

# MiaoSpeed 命令行参数说明
## MiaoSpeed v4
### 全局命令

#### `./miaospeed`
```
  -version
        显示当前版本并退出程序
```

* * *

### 服务模式

#### `./miaospeed server`

启动服务模式，支持以下参数：

```
  -connthread uint
        处理连接任务时的并发线程数 (默认 64)
  -key string
        设置自定义证书密钥路径，例如: path/to/cert.key
  -mmdb string
        将所有 GeoIP 查询重定向到本地 MMDB 文件，例如: test.mmdb,testcity.mmdb
  -mtls
        启用 MiaoKo 签名的 TLS 证书验证
  -nospeed
        禁用所有测速请求
  -pausesecond uint
        每次测速任务后的暂停时间（秒）
  -speedlimit uint
        速度限制（以字节每秒为单位），0 表示无限制
  -token string
        指定用于签署请求的令牌
  -verbose
        是否输出系统日志
  -whitelist string
        机器人 ID 白名单，格式如 1111,2222,3333
```

* * *

### 脚本模式

#### `./miaospeed script`

运行脚本模式，支持以下参数：

```
  -file string
        指定要执行的脚本文件路径
  -verbose
        是否输出系统日志
```

* * *

### 辅助工具模式

#### `./miaospeed misc`

辅助工具模式，支持以下参数：

```
  -maxmind-update-license string
        指定用于更新 MaxMind 数据库的许可证密钥
  -verbose
        是否输出系统日志
```

## MiaoSpeed Pro 命令行参数说明

### 全局命令

#### `./miaospeed.pro`
显示全局帮助信息。

```
  -version
        显示当前版本并退出程序
```

* * *

### 服务模式

#### `./miaospeed.pro server`

启动服务模式，支持以下参数：

```
  -allowip string
        允许的 IP 范围，格式如 192.168.1.0/24,10.12.13.2 (默认 "0.0.0.0/0,::/0")
  -bind string
        绑定的地址，可以是 0.0.0.0:8080 或 /tmp/unix_socket (默认 "0.0.0.0:8080")
  -blockip string
        阻止的 IP 范围，格式如 192.168.1.0/24,10.12.13.2
  -cert string
        设置自定义证书路径，例如: path/to/cert.pem
  -connthread uint
        处理连接任务时的并发线程数 (默认 64)
  -key string
        设置自定义证书密钥路径，例如: path/to/cert.key
  -mmdb string
        将所有 GeoIP 查询重定向到本地 MMDB 文件，例如: test.mmdb,testcity.mmdb
  -mtls
        启用 MiaoKo 签名的 TLS 证书验证
  -nospeed
        禁用所有测速请求
  -path string
        自定义 WebSocket 路径，默认路径: /connect (默认 "/connect")
  -pausesecond uint
        每次测速任务后的暂停时间（秒）
  -speedlimit uint
        速度限制（以字节每秒为单位），0 表示无限制
  -token string
        指定用于签署请求的令牌
  -tw
        启用任务权重机制
  -verbose
        是否输出系统日志
  -whitelist string
        机器人 ID 白名单，格式如 1111,2222,3333
```

* * *

### 脚本模式

#### `./miaospeed.pro script`

运行脚本模式，支持以下参数：

```
  -file string
        指定要执行的脚本文件路径
  -verbose
        是否输出系统日志
```

* * *

### 辅助工具模式

#### `./miaospeed.pro misc`

辅助工具模式，支持以下参数：

```
  -maxmind-update-license string
        指定用于更新 MaxMind 数据库的许可证密钥
  -verbose
        是否输出系统日志
```
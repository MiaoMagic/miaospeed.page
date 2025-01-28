---
outline: deep
---
# ENV配置说明
 **注意:该方式仅支持miaospeed v5版本**
```dotenv
# MiaoSpeed Pro 服务端配置的 .env 文件

# 服务器绑定地址（支持 TCP 地址如 0.0.0.0:8080 或 Unix 套接字如 /tmp/unix_socket）
BIND=0.0.0.0:8080

# 用于签署请求的 Token（必填，用于身份验证）
TOKEN=

# 自定义 WebSocket 路径（例如 /connect 或 /ws）（可选，默认值：/connect）
URL_PATH=/connect

# 允许的 IP 范围，格式如 192.168.1.0/24,10.12.13.2（可选）
# （留空表示允许所有 IP [0.0.0.0/0 ::/0]）
ALLOW_IPS=

# 阻止的 IP 范围，格式如 192.168.1.0/24,10.12.13.2（可选）
# （留空表示禁用 IP 黑名单功能）
BLOCK_IPS=

# 并发线程数，用于连接任务（默认值：64）（可选）
# 对于低性能机器，建议线程数不要超过 16。
CONNTHREAD=64

# 速度限制（以字节每秒为单位，0 表示无限制）（可选）
SPEEDLIMIT=0

# 每次测速任务后的暂停时间（以秒为单位，默认值：0）（可选）
PAUSESECOND=0

# 启用 MiaoKo 签名的 TLS 证书进行验证（可选）
# 注意：启用 MTLS（双向 TLS）后，将禁用自定义 CERT 和 KEY 配置，因为二者互斥。
MTLS=false

# 禁止所有测速请求（设置为 true 可禁用测速功能）（可选）
NOSPEED=false

# 启用任务权重机制（设置为 true 为测速任务应用权重）（可选）
TASKWEIGHT=false

# MaxMind 数据库路径（多个数据库用逗号分隔）（可选）
# 示例：MMDB=test.mmdb,testcity.mmdb
# 此设置将所有 GeoIP 查询重新路由到本地 MMDB 文件。
MMDB=path/to/your.mmdb

# 自定义 TLS 证书和密钥文件路径（如果使用 MTLS，请留空）（可选）
# 注意：设置 CERT 和 KEY 将禁用 MTLS（双向 TLS），因为二者互斥。
# CERT=path/to/cert.pem
# KEY=path/to/cert.key

# 允许的机器人 ID 白名单，多个 ID 用逗号分隔（例如 1111,2222,3333）（可选）
WHITELIST=
```
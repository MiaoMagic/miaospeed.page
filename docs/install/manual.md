---
outline: deep
---

# 手工部署 MiaoSpeed

> Docker 部署请移步 👉 [Docker 文档](https://www.miaospeed.com/install/docker.html)  
> 完整 **环境变量** 说明 👉 https://www.miaospeed.com/install/envConf.html  
> 完整 **命令行参数** 说明 👉 https://www.miaospeed.com/install/command.html#miaospeed-pro-%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E

---

## 0）准备

- 建议使用 root（或给命令前加 `sudo`）
- 放置目录：`/opt/miaospeed`（可自定义）
- 二进制文件名以下文统一使用：`miaospeed.pro`

```bash
mkdir -p /opt/miaospeed && cd /opt/miaospeed
# 将二进制放到此目录并赋权：
# mv <你的二进制> /opt/miaospeed/miaospeed.pro
chmod +x /opt/miaospeed/miaospeed.pro
```

---

## 1）使用 `.env`（推荐）

程序**原生支持**从环境中读取配置，建议集中写到 `/opt/miaospeed/.env`：

```bash
cat > /opt/miaospeed/.env <<'EOF'
# 基础必填
BIND=0.0.0.0:9966
TOKEN=your-token

# 常用可选
URL_PATH=/connect
CONNTHREAD=64
ALLOWIP=0.0.0.0/0,::/0
# BLOCKIP=10.0.0.0/8

# 开关类（存在即启用；不需要就删除或注释）
MTLS=1
# NOSPEED=1
# VERBOSE=1
# TW=1

# 资源限制/行为（可选）
# PAUSESECOND=1
# SPEEDLIMIT=1048576

# 证书（如启用自定义证书）
# CERT=/path/cert.pem
# KEY=/path/key.pem

# GeoIP
# MMDB=/opt/miaospeed/GeoLite2-City.mmdb

# 更多变量请看文档：
# https://www.miaospeed.com/install/envConf.html
EOF
```

> **快速试跑**（一次性验证）：  
> 程序会读取环境变量，无需把 `.env` 展开成命令行：
> ```bash
> cd /opt/miaospeed
> # 临时导入 env 后前台运行（Ctrl+C 退出）
> set -a; . ./.env; set +a; ./miaospeed.pro server
> ```

> **命令行方式（不推荐长期运维）**：  
> 仅供参考测试，**已注释**示例见下各小节，保持与 `.env` 一致的参数。

---

## 2）Linux（systemd）

创建服务文件：`/etc/systemd/system/miaospeed.service`

```ini
[Unit]
Description=MiaoSpeed Server
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/miaospeed
EnvironmentFile=/opt/miaospeed/.env
# 推荐：程序读取环境变量，直接 server
ExecStart=/opt/miaospeed/miaospeed.pro server

# 可选：命令行参数（示例，长期不推荐；如需请取消注释并删除 EnvironmentFile）
# ExecStart=/opt/miaospeed/miaospeed.pro server \
#   -bind 0.0.0.0:9966 \
#   -token your-token \
#   -path /connect \
#   -connthread 64 \
#   -mtls \
#   -allowip 0.0.0.0/0,::/0
#   # -nospeed -verbose -tw -pausesecond 1 -speedlimit 1048576 -mmdb /path.mmdb -cert /x.pem -key /y.key -blockip 10.0.0.0/8

Restart=always
RestartSec=3
User=root

[Install]
WantedBy=multi-user.target
```

启用与查看：
```bash
systemctl daemon-reload
systemctl enable --now miaospeed
systemctl status miaospeed
journalctl -u miaospeed -f
```

---

## 3）OpenWrt（/etc/init.d）

在 OpenWrt 上使用 `procd`，**推荐从 `.env` 注入环境变量**：

```bash
cat > /etc/init.d/miaospeed <<'EOF'
#!/bin/sh /etc/rc.common

START=99
USE_PROCD=1
WORKDIR="/opt/miaospeed"
ENVFILE="$WORKDIR/.env"
BIN="$WORKDIR/miaospeed.pro"

start_service() {
  [ -x "$BIN" ] || exit 1

  # 推荐：导入 .env 到环境，然后直接 server
  if [ -f "$ENVFILE" ]; then
    set -a; . "$ENVFILE"; set +a
  fi

  procd_open_instance
  procd_set_param command "$BIN" server

  # 可选：若更偏好命令行参数，可用下面两行替换（取消注释）：
  # ARGS="-bind 0.0.0.0:9966 -token your-token -path /connect -connthread 64 -mtls"
  # procd_set_param command "$BIN" server $ARGS

  procd_set_param respawn 3600 5 0
  procd_close_instance
}
EOF

chmod +x /etc/init.d/miaospeed
/etc/init.d/miaospeed enable
/etc/init.d/miaospeed start
```

---

## 4）SysVinit（老旧 Linux）

```bash
cat > /etc/init.d/miaospeed <<'EOF'
#!/bin/sh
### BEGIN INIT INFO
# Provides:          miaospeed
# Required-Start:    $network
# Required-Stop:     $network
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: MiaoSpeed Service
### END INIT INFO

WORKDIR="/opt/miaospeed"
BIN="$WORKDIR/miaospeed.pro"
ENVFILE="$WORKDIR/.env"

start() {
  [ -x "$BIN" ] || exit 1
  [ -f "$ENVFILE" ] && { set -a; . "$ENVFILE"; set +a; }
  nohup "$BIN" server >/var/log/miaospeed.log 2>&1 &
  echo "started"
}

stop() {
  pkill -f "$BIN" || true
  echo "stopped"
}

case "$1" in
  start) start ;;
  stop) stop ;;
  restart) stop; start ;;
  *) echo "Usage: /etc/init.d/miaospeed {start|stop|restart}"; exit 1 ;;
esac
EOF

chmod +x /etc/init.d/miaospeed
update-rc.d miaospeed defaults
service miaospeed start
```

> **命令行方式（参考）**：  
> 把 `start()` 里的两行替换为：
> ```bash
> nohup "$BIN" server -bind 0.0.0.0:9966 -token your-token -path /connect -connthread 64 -mtls >/var/log/miaospeed.log 2>&1 &
> ```

---

## 5）OpenRC（Alpine / Gentoo）

```bash
cat > /etc/init.d/miaospeed <<'EOF'
#!/sbin/openrc-run

name="MiaoSpeed"
description="MiaoSpeed Server"
command="/opt/miaospeed/miaospeed.pro"
pidfile="/var/run/miaospeed.pid"
command_background="yes"

depend() { need net; }

start_pre() {
  # 推荐：导入 .env 后再交给程序自己读取
  [ -f /opt/miaospeed/.env ] && { set -a; . /opt/miaospeed/.env; set +a; }
}

start() {
  ebegin "Starting MiaoSpeed"
  start-stop-daemon --start --background --make-pidfile --pidfile "$pidfile" --exec "$command" -- server
  eend $?
}
EOF

chmod +x /etc/init.d/miaospeed
rc-update add miaospeed default
rc-service miaospeed start
```

> **命令行方式（参考）**：  
> 将 `-- server` 改为例如：  
> `-- server -bind 0.0.0.0:9966 -token your-token -path /connect -connthread 64 -mtls`

---

## 6）Upstart（Ubuntu 14.04 / 旧 Debian）

```bash
cat > /etc/init/miaospeed.conf <<'EOF'
description "MiaoSpeed"

start on runlevel [2345]
stop on runlevel [016]
respawn

env WORKDIR=/opt/miaospeed
pre-start script
  test -x $WORKDIR/miaospeed.pro || { stop; exit 1; }
  test -f $WORKDIR/.env && . $WORKDIR/.env
end script

script
  # 推荐：程序读取环境变量，直接 server
  exec $WORKDIR/miaospeed.pro server

  # 命令行方式（参考）：
  # exec $WORKDIR/miaospeed.pro server -bind 0.0.0.0:9966 -token your-token -path /connect -connthread 64 -mtls
end script
EOF

initctl reload-configuration
start miaospeed
```

---

## 7）macOS（launchd）

**推荐：用包装脚本读取 `.env`**，再由 launchd 拉起。

```bash
# /opt/miaospeed/run.sh
cat > /opt/miaospeed/run.sh <<'EOF'
#!/bin/sh
cd /opt/miaospeed
[ -f ./.env ] && { set -a; . ./.env; set +a; }
exec /opt/miaospeed/miaospeed.pro server
# 命令行方式（参考）：
# exec /opt/miaospeed/miaospeed.pro server -bind 0.0.0.0:9966 -token your-token -path /connect -connthread 64 -mtls
EOF
chmod +x /opt/miaospeed/run.sh
```

```xml
<!-- /Library/LaunchDaemons/com.miaospeed.plist -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN"
 "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.miaospeed</string>
  <key>ProgramArguments</key>
  <array>
    <string>/opt/miaospeed/run.sh</string>
  </array>
  <key>WorkingDirectory</key><string>/opt/miaospeed</string>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
</dict>
</plist>
```

加载与启动：
```bash
launchctl load /Library/LaunchDaemons/com.miaospeed.plist
launchctl start com.miaospeed
```

---

## 8）升级与排错

- 升级：覆盖二进制后重启服务（以 systemd 为例）  
  ```bash
  systemctl stop miaospeed
  cp <new-binary> /opt/miaospeed/miaospeed.pro && chmod +x /opt/miaospeed/miaospeed.pro
  systemctl start miaospeed
  ```
- 查看日志（systemd）：`journalctl -u miaospeed -f`  
- 端口占用：`ss -ltnp | grep :9966`  
- 参数不生效：检查 `.env` 路径/变量名/拼写；必要时用命令行方式临时验证  
- 参考文档：  
  - 环境变量 👉 https://www.miaospeed.com/install/envConf.html  
  - 命令行参数 👉 https://www.miaospeed.com/install/command.html#miaospeed-pro-%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E


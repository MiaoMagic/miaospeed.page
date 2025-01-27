---
outline: deep
---

# Docker部署

## Docker 镜像
Docker版本分为稳定版和beta版本，beta版本为最新版
### 镜像分别为：
```shell
docker pull oshaoli688/miaospeed:latest
docker pull oshaoli688/miaospeed:beta
```
### Curl下载镜像：
```shell
curl -L http://download.static-resources.work/containers/ms_beta.tar.gz -o /tmp/miaospeed.tar.gz && \
curl -L http://download.static-resources.work/containers/frpc_latest.tar.gz -o /tmp/frpc_latest.tar.gz && \
docker load -i /tmp/miaospeed.tar.gz && rm -f /tmp/miaospeed.tar.gz && \
docker load -i /tmp/frpc_latest.tar.gz  && rm -f /tmp/frpc_latest.tar.gz 
```

## Docker部署

默认端口：9966

### 全局变量
```
MIAOSPEED_META              #启用META，默认不设置即可
MIAOSPEED_MTLS              #启用mtls,不启用不填写,启用:MIAOSPEED_MTLS=1
MIAOSPEED_TOKEN             #验证Token,例如：MIAOSPEED_TOKEN=xxxxx
MIAOSPEED_PATH              #设置miaospeed的websocket路径（仅限beta版本）
MIAOSPEED_WHITELIST         #白名单，格式:MIAOSPEED_WHITELIST=1111,2222,3333
MIAOSPEED_NOSPEED           #禁止测速,不启用不填写.启用:MIAOSPEED_NOSPEED=1
MIAOSPEED_CONNTHREAD        #线程池设定，默认为64线程，如内存低于4G建议设置32或以下，例如：MIAOSPEED_CONNTHREAD=32
MIAOSPEED_MMDB              #是否启用MMDB
```
### 启动命令
```shell
docker run -d -p 9966:9966 --name=miaospeed --restart=always  -e MIAOSPEED_MTLS=1 -e MIAOSPEED_TOKEN=<token>  moshaoli688/miaospeed:beta
```
### Docker Compose部署
默认端口：9966
```yaml
services:
  miaospeed:
    image: moshaoli688/miaospeed:beta
    restart: "always"
    ports:
      - "9966:9966"
    environment:
      - TZ=Asia/Shanghai
      - MIAOSPEED_META=1
      - MIAOSPEED_MTLS=1
      - MIAOSPEED_WHITELIST=xxx,xxx,xxx
    mem_limit: 2048m
    logging:
      driver: "json-file"
      options:
        max-size: "200m"
        max-file: "3"
```
### 启动命令
```shell
docker compose up -d
```

## 更新MMDB
```shell
docker exec -it 容器名字 ./miaospeed misc -maxmind-update-license 你的key
docker restart 容器名字
```
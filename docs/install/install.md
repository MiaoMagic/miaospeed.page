---
outline: deep
---

# 一键安装脚本

## Systemd 部署

> 适用于需要通过 **systemd 服务守护** 的方式运行。  
> 
> 参数说明：  
> - `--port=` （必填，对外服务端口）  
> - `--token=`（可选，默认自动生成 UUID）  
> - `--path=` （可选，MIAOSPEED 路径，不传会自动检测）

### 一键安装

```bash
curl -fsSL https://raw.githubusercontent.com/moshaoli688/miaospeed_install/refs/heads/master/install.sh -o miaospeed_install.sh \
&& sh miaospeed_install.sh --port=你的端口 --token=token --path=path
```

---

## Docker 部署

> 参数说明：  
> - `--net=host|bridge`（默认 host）  
> - `--port=` （bridge 模式必填）  
> - `--token=`（可选，默认自动生成 UUID）  
> - `--path=`（可选，不传会自动检测）

### Host 模式（默认，服务监听 0.0.0.0:9966）

```bash
curl -fsSL https://sh.msl.la/docker/install-lite.sh -o install.sh \
&& sh install.sh --net=host --token=token --path=path
```

### Bridge 模式（宿主端口映射 → 容器 9966）

```bash
curl -fsSL https://sh.msl.la/docker/install-lite.sh -o install.sh \
&& sh install.sh --net=bridge --port=你的端口 --token=token --path=path
```

---

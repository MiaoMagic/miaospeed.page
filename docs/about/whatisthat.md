---
outline: deep
---

# 🚀 什么是 MiaoSpeed？

**MiaoSpeed** 是一款专为 **测试代理节点** 而设计的 **后端测速服务**。  
它支持 **Socks5 / HTTP / Shadowsocks / VMess / VLESS / Trojan / Hysteria / Hysteria2 等主流协议**，  
能够进行 **延迟测试、带宽速度测试、流媒体解锁检测**，帮助快速筛选最优节点，为用户提供更稳定流畅的体验。

MiaoSpeed 本身是一个 **后端程序**，需要配合前端面板或客户端调用使用。  

### 🔗 已支持的前端

- 🐱 **MiaoKo** —— 原生支持（MiaoSpeed 的官方后端）  
- 🌀 **Fulltclash** —— 兼容支持  
- 🔑 **Kopiy** —— 兼容支持  

---

## 🔑 核心能力

- **协议全面**：支持主流代理协议（socks5/http/ss/vmess/vless/trojan/hy/hy2）  
- **测速维度**：延迟 / 速度 / 流媒体解锁  
- **高性能设计**：内置线程池，支持大规模节点并发测速  
- **灵活部署**：支持 Linux、OpenWrt、Docker、Systemd、手工部署等  
- **安全认证**：Token 验证 / mTLS 支持，防止未授权调用  
- **多种配置方式**：命令行参数 / 环境变量 / `.env` 文件  

---

## 🛠️ 适用场景

- **机场节点测试**：批量节点测速，实时选优线路  
- **前端系统对接**：作为后端测速引擎，为前端提供 API  
- **个人用户**：可通过 **MiaoKo / Fulltclash / Kopiy 等前端**调用进行节点测试  

---

## 📦 部署与使用

- [Docker 一键部署](https://www.miaospeed.com/install/docker.html)  
- [Systemd / OpenWrt 手工部署](https://www.miaospeed.com/install/manual.html)  
- [环境变量配置](https://www.miaospeed.com/install/envConf.html)  
- [命令行参数](https://www.miaospeed.com/install/command.html)  

---

## 🔮 未来规划

- **API 扩展**：持续优化与扩展，支持更多前端系统调用  
- **签名机制优化**：增强安全性与调用验证，确保测速请求可信可靠
  
---

✨ **一句话总结**：  
MiaoSpeed = 面向代理节点的 **全协议后端测速引擎**，测试更快、更准、更全面。  

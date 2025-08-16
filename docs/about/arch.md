---
outline: deep
---

# 架构支持与版本

MiaoSpeed 提供跨平台构建，支持主流的操作系统与 CPU 架构。  
推荐使用 **Beta 测试版**（持续更新），稳定版已停止维护。

---

## 🖥️ 支持的操作系统

- **Linux**
  - Ubuntu / Debian / CentOS / Alpine 等主流发行版
- **Windows**
  - Windows 10/11 及 Windows Server（64 位）
- **macOS**
  - Intel（amd64）与 Apple Silicon（arm64）

---

## ⚙️ 支持的架构

- `linux/amd64`
- `linux/arm64`
- `linux/arm/v7`
- `linux/386`
- `darwin/amd64`
- `darwin/arm64`
- `windows/amd64`
- `windows/386`
- `windows/arm64`

---

## 📦 发布版本

MiaoSpeed 每次发布都会提供预构建二进制压缩包：

- **Linux**  
  - `miaospeed_<version>_linux_amd64.tar.gz`  
  - `miaospeed_<version>_linux_arm64.tar.gz`  
  - `miaospeed_<version>_linux_armv7.tar.gz`  
  - `miaospeed_<version>_linux_386.tar.gz`

- **Windows**  
  - `miaospeed_<version>_windows_amd64.tar.gz`  
  - `miaospeed_<version>_windows_arm64.tar.gz`  
  - `miaospeed_<version>_windows_386.tar.gz`

- **macOS**  
  - `miaospeed_<version>_darwin_amd64.tar.gz`  
  - `miaospeed_<version>_darwin_arm64.tar.gz`

- **校验文件**  
  - `miaospeed_<version>_checksums.txt`

---

## 🚀 版本选择

- **Beta 测试版**  
  - 持续更新，包含最新功能与修复  
  - 推荐所有用户使用  
  - 下载地址：[Releases (Beta)](https://github.com/MiaoMagic/miaospeed/releases)

- **稳定版**  
  - 已停止更新  
  - 不推荐新部署使用

---

## 🔗 相关文档

- [一键安装脚本](/install/install.html)  
- [使用 Docker 部署](/install/docker.html)  
- [Systemd/手工部署](/install/manual.html)

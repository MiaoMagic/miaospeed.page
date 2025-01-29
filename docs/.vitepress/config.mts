import { defineConfig } from 'vitepress'

export default defineConfig({
  lastUpdated: true,
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '193x193', href: '/logo.png' }],
  ],
  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      title: 'MiaoSpeed',
      description: '一个支持测试代理节点的后端工具',
      link: '/',
      themeConfig: {
        nav: [
          {
            text: '使用指南',
            link: '/',
            activeMatch: '^/$|^/install/'
          }
        ],
        sidebar: {
          '/': getGuideSidebarZhCN(),
          '/install/': getGuideSidebarZhCN(),
        }
      }
    }
  },
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24, alt: 'MiaoSpeedLogo'},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MiaoMagic/miaospeed' },
    ],

    footer: {
      message: 'This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License</a>',
      copyright: 'Copyright © 2022-present MiaoMagic'
    }
  }
})

function getGuideSidebarZhCN() {
  return [
    {
      text: '什么是 MiaoSpeed',
      items: [
        { text: '项目介绍', link: '/about/whatisthat.html' },
      ]
    },
    {
      text: '安装或者部署 MiaoSpeed',
      items: [
        { text: '安装需求', link: '/install/ENV.html' },
        { text: '一键安装脚本', link: '/install/install.html' },
        { text: '手工本地部署', link: '/install/manual.html' },
        { text: '使用Docker部署', link: '/install/docker.html' },
        { text: '可用命令行参数', link: '/install/command.html' },
        { text: 'ENV配置说明', link: '/install/envConf.html' },
      ],
    }
  ]
}

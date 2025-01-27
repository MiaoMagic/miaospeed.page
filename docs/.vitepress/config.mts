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
      title: 'Miaospeed',
      description: '一个支持测试代理节点的后端工具',
      link: '/',
      themeConfig: {
        lastUpdatedText: '上次更新',
        editLink: {
          pattern: 'https://github.com/MiaoMagic/miaospeed.github.io/edit/main/docs/:path',
          text: '在GitHub中编辑',
        },
        nav: [
          {
            text: '使用指南',
            link: '/',
            activeMatch: '^/$|^/guide/'
          }
        ],
        sidebar: {
          '/': getGuideSidebarZhCN(),
          '/guide/': getGuideSidebarZhCN(),
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
      message: 'This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License',
      copyright: 'Copyright © 2022-present MiaoMagic'
    }
  }
})

function getGuideSidebarZhCN() {
  return [
    {
      items: [
        { text: '安装需求', link: '/ENV.html' },
      ]
    },
    {
      text: '安装 MiaoSpeed',
      items: [
        { text: '一键安装', link: '/guide/install.html' },
        { text: '手工部署', link: '/guide/manual.html' },
        { text: '命令行参数', link: '/guide/command.html' },
        { text: 'ENV配置说明', link: '/guide/envConf.html' },
      ],
    }
  ]
}

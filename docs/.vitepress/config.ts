import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // lang: "en-US",
  title: "Fancy",
  description: "Fancy 开发文档",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3c8772" }],
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "AZBRSFGG",
        "data-spa": "auto",
        defer: "",
      },
    ],
  ],
  themeConfig: {
    outline: {label: "大纲", level: [2, 3]},
    logo: "/images/logo.png",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      { text: "开发指南", link: "/开发指南/关于我们", activeMatch: "^/$|^/开发指南/" },
      { text: "前端框架", link: "/前端框架/开始上手", activeMatch: "^/前端框架/" },
      { text: "后端框架", link: "/后端框架/开始上手", activeMatch: "^/后端框架/" },
      // { text: "小程序", link: "/小程序/开始上手", activeMatch: "^/小程序/" },
      { text: "相关链接",
        items: [
          {
            text: "前端源码",
            link: "https://github.com/fengyp8963/fancy-vue-admin.git",
          },
          {
            text: "后端源码",
            link: "https://github.com/fengyp8963/fancy.git",
          },
          /*{
            text: "配置源码",
            link: "https://github.com/fengyp8963/fancy-config.git",
          },
          {
            text: "小程序源码",
            link: "https://github.com/fengyp8963/fancy-uni-app.git",
          },
          {
            text: "文档源码",
            link: "https://github.com/fengyp8963/fancy-doc.git",
          },*/
        ],
      },
    ],

    sidebar: [
      {
        text: "开发指南",
        collapsed: true,
        items:  [
          { text: "关于我们", link: "/开发指南/关于我们" },
        ]
      },
      {
        text: "前端框架",
        collapsed: true,
        items:  [
          { text: "开始上手", link: "/前端框架/开始上手" },
          { text: "线上部署", link: "/前端框架/线上部署" },
          { text: "常见问题", link: "/前端框架/常见问题" },
          { text: "更新日志", link: "/前端框架/更新日志" },
        ]
      },
      {
        text: "后端框架",
        collapsed: true,
        items:  [
          { text: "开始上手", link: "/后端框架/开始上手" },
          { text: "核心配置", link: "/后端框架/核心配置" },
          { text: "线上部署", link: "/后端框架/线上部署" },
          { text: "项目规范", link: "/后端框架/项目规范" },
          { text: "名词参考", link: "/后端框架/名词参考" },
          { text: "常见问题", link: "/后端框架/常见问题" },
          { text: "更新日志", link: "/后端框架/更新日志" },
        ]
      },
      // {
      //   text: "小程序",
      //   collapsed: true,
      //   items:   [
      //     { text: "开始上手", link: "/小程序/开始上手" },
      //     { text: "线上部署", link: "/小程序/线上部署" },
      //     { text: "常见问题", link: "/小程序/常见问题" },
      //     { text: "更新日志", link: "/小程序/更新日志" },
      //   ]
      // },
    ],

    editLink: {
      pattern: "https://github.com/fengyp8963",
      text: "帮我纠错，点击编辑。",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/fengyp8963" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present fengyp"
    },

    // 灰广告
    // carbonAds: {
    //   code: "CEBDT27Y",
    //   placement: "vuejsorg",
    // },
  },
});
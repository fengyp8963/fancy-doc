import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // lang: "en-US",
  title: "Fancy",
  description: "Fancy 开发文档",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/public/favicon.ico" }],
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
      { text: "前端", link: "/front/about", activeMatch: "^/$|^/front/" },
      {
        text: "后端",
        link: "/back/about",
        activeMatch: "^/back/",
      },
      {
        text: "小程序",
        link: "/app/about",
        activeMatch: "^/app/",
      },
      {
        text: "相关链接",
        items: [
          {
            text: "前端源码",
            link: "https://github.com/fengyp8963/fancy-vue-admin.git",
          },
          {
            text: "后端源码",
            link: "https://github.com/fengyp8963/fancy.git",
          },
          // {
          //   text: "配置源码",
          //   link: "https://github.com/fengyp8963/fancy-config.git",
          // },
          {
            text: "小程序源码",
            link: "https://github.com/fengyp8963/fancy-uni-app.git",
          },
          // {
          //   text: "文档源码",
          //   link: "https://github.com/fengyp8963/fancy-doc.git",
          // },
        ],
      },
    ],

    sidebar: [
      {
        text: "前端",
        collapsed: true,
        items:  [
          { text: "关于我们", link: "/front/about" },
          { text: "开始上手", link: "/front/started" },
          { text: "线上部署", link: "/front/deploy" },
          { text: "常见问题", link: "/front/issue" },
          { text: "更新日志", link: "/front/version" },
        ]
      },
      {
        text: "后端",
        collapsed: true,
        items:  [
          { text: "关于我们", link: "/back/about" },
          { text: "开始上手", link: "/back/started" },
          { text: "核心配置", link: "/back/config" },
          { text: "线上部署", link: "/back/deploy" },
          { text: "项目规范", link: "/back/spec" },
          { text: "名词参考", link: "/back/reference" },
          { text: "常见问题", link: "/back/issue" },
          { text: "更新日志", link: "/back/version" },
        ]
      },
      {
        text: "小程序",
        collapsed: true,
        items:   [
          { text: "关于我们", link: "/app/about" },
          { text: "开始上手", link: "/app/started" },
          { text: "线上部署", link: "/app/deploy" },
          { text: "常见问题", link: "/app/issue" },
          { text: "更新日志", link: "/app/version" },
        ]
      },
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
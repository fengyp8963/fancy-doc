import { defineConfig } from 'vitepress'

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
    logo: "/images/logo.png",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      { text: "前端", link: "/front/basics", activeMatch: "^/$|^/front/" },
      {
        text: "后端",
        link: "/back/basics",
        activeMatch: "^/back/",
      },
      {
        text: "小程序",
        link: "/app/basics",
        activeMatch: "^/app/",
      },
      {
        text: "数据大屏",
        link: "/datav/basics",
        activeMatch: "^/datav/",
      },
      {
        text: "相关链接",
        items: [
          {
            text: "前端源码",
            link: "https://gitlab.junyue.com/fancy/fancy-vue-admin.git",
          },
          {
            text: "后端源码",
            link: "https://gitlab.junyue.com/fancy/fancy.git",
          },
          {
            text: "配置源码",
            link: "https://gitlab.junyue.com/fancy/fancy-config.git",
          },
          {
            text: "大屏源码",
            link: "https://gitlab.junyue.com/fancy/fancy-datav-vue.git",
          },
          {
            text: "文档源码",
            link: "https://gitlab.junyue.com/fancy/fancy-doc.git",
          },
          {
            text: "小程序源码",
            link: "https://gitlab.junyue.com/fancy/fancy-uni-app.git",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "前端",
        collapsed: true,
        items: getFrontSidebar(),
      },
      {
        text: "后端",
        collapsed: true,
        items: getBackSidebar(),
      },
      {
        text: "小程序",
        collapsed: true,
        items: getAppSidebar(),
      },
      {
        text: "数据大屏",
        collapsed: true,
        items: getDatavSidebar(),
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

function getFrontSidebar() {
  return [
    {
      text: "介绍",
      items: [
        { text: "简介", link: "/front/basics" },
        { text: "入门", link: "/front/started" },
        { text: "配置", link: "/front/configuration" },
        { text: "部署", link: "/front/deploy" },
      ],
    },
    {
      text: "深入",
      items: [
        { text: "进阶", link: "/front/advanced" },
        { text: "规范", link: "/front/specification" },
        { text: "API 参考", link: "/front/api-reference" },
      ],
    },
    {
      text: "其它",
      items: [
        { text: "名词参考", link: "/front/noun-reference" },
        { text: "常见问题", link: "/front/common-problem" },
        { text: "常见疑点", link: "/front/common-doubts" },
      ],
    },
    {
      text: "版本",
      items: [{ text: "更新日志", link: "/back/version" }],
    },
  ];
}

function getBackSidebar() {
  return [
    {
      text: "介绍",
      items: [
        { text: "简介", link: "/back/basics" },
        { text: "入门", link: "/back/started" },
        { text: "配置", link: "/back/configuration" },
        { text: "部署", link: "/back/deploy" },
      ],
    },
    {
      text: "深入",
      items: [
        { text: "进阶", link: "/back/advanced" },
        { text: "规范", link: "/back/specification" },
        { text: "API 参考", link: "/back/api-reference" },
      ],
    },
    {
      text: "其它",
      items: [
        { text: "名词参考", link: "/back/noun-reference" },
        { text: "常见问题", link: "/back/common-problem" },
        { text: "常见疑点", link: "/back/common-doubts" },
      ],
    },
    {
      text: "版本",
      items: [{ text: "更新日志", link: "/back/version" }],
    },
  ];
}

function getAppSidebar() {
  return [
    {
      text: "介绍",
      items: [
        { text: "简介", link: "/app/basics" },
        { text: "入门", link: "/app/started" },
        { text: "配置", link: "/app/configuration" },
        { text: "部署", link: "/app/deploy" },
      ],
    },
    {
      text: "深入",
      items: [
        { text: "进阶", link: "/app/advanced" },
        { text: "规范", link: "/app/specification" },
        { text: "API 参考", link: "/app/api-reference" },
      ],
    },
    {
      text: "其它",
      items: [
        { text: "名词参考", link: "/app/noun-reference" },
        { text: "常见问题", link: "/app/common-problem" },
        { text: "常见疑点", link: "/app/common-doubts" },
      ],
    },
    {
      text: "版本",
      items: [{ text: "更新日志", link: "/back/version" }],
    },
  ];
}

function getDatavSidebar() {
  return [
    {
      text: "介绍",
      items: [
        { text: "简介", link: "/datav/basics" },
        { text: "入门", link: "/datav/started" },
        { text: "配置", link: "/datav/configuration" },
        { text: "部署", link: "/datav/deploy" },
      ],
    },
    {
      text: "深入",
      items: [
        { text: "进阶", link: "/datav/advanced" },
        { text: "规范", link: "/datav/specification" },
        { text: "API 参考", link: "/datav/api-reference" },
      ],
    },
    {
      text: "其它",
      items: [
        { text: "名词参考", link: "/datav/noun-reference" },
        { text: "常见问题", link: "/datav/common-problem" },
        { text: "常见疑点", link: "/datav/common-doubts" },
      ],
    },
    {
      text: "版本",
      items: [{ text: "更新日志", link: "/back/version" }],
    },
  ];
}

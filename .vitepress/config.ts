export default {
  lang: "zh-CN",
  title: "serein cloud",
  description: "spring cloud 开发文档",
  themeConfig: {
    repo: "https://gitlab.vipklm.com/serein/",
    docsDir: "docs",

    editLinks: false,
    editLinkText: "为此页提供修改建议",
    lastUpdated: "Last Updated",

    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: "前端", link: "/", activeMatch: "^/$|^/front/" },
      {
        text: "后端",
        link: "/back/basics",
        activeMatch: "^/back/",
      },
      {
        text: "相关链接",
        link: "https://gitlab.vipklm.com/serein/",
        items: [
          {
            text: "前端源码",
            link: "https://gitlab.vipklm.com/serein/vue-serein-admin.git",
          },
          {
            text: "后端源码",
            link: "https://gitlab.vipklm.com/serein/serein-cloud.git",
          },
          {
            text: "配置源码",
            link: "https://gitlab.vipklm.com/serein/serein-cloud-config.git",
          },
          {
            text: "文档源码",
            link: "https://gitlab.vipklm.com/serein/serein-cloud-doc.git",
          },
        ],
      },
    ],

    sidebar: {
      "/front/": getFrontSidebar(),
      "/back/": getBackSidebar(),
      "/": getFrontSidebar(),
    },
  },
};

function getFrontSidebar() {
  return [
    {
      text: "介绍",
      children: [
        { text: "什么是 VitePress？", link: "/" },
        { text: "入门", link: "/front/getting-started" },
        { text: "配置", link: "/front/backuration" },
        { text: "资产处理", link: "/front/assets" },
        { text: "降价扩展", link: "/front/markdown" },
        { text: "在 Markdown 中使用 Vue", link: "/front/using-vue" },
        { text: "部署", link: "/front/deploy" },
      ],
    },
    {
      text: "先进的",
      children: [
        { text: "前垫", link: "/front/frontmatter" },
        { text: "主题化", link: "/front/theming" },
        { text: "API 参考", link: "/front/api" },
        {
          text: "与 Vuepress 的区别",
          link: "/front/differences-from-vuepress",
        },
      ],
    },
  ];
}

function getBackSidebar() {
  return [
    {
      text: "介绍",
      children: [
        { text: "什么是serein cloud？", link: "/back/basics" },
        { text: "快速上手", link: "/back/started" },
        { text: "配置", link: "/back/setting" },
        { text: "部署", link: "/back/deploy" },
      ],
    },
    {
      text: "先进的",
      children: [
        { text: "前垫", link: "/back/homepage" },
        { text: "API 参考 ", link: "/back/algolia-search" },
        // { text: 'Carbon Ads', link: '/back/carbon-ads' }
      ],
    },
  ];
}

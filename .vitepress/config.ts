export default {
  lang: "zh-CN",
  // 网站标题
  title: "Serein Cloud",
  // 网站描述
  description: "Serein Cloud 开发文档",
  // 打包目录
  dest: "./dist",
  // 添加图标
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    repo: "https://gitlab.vipklm.com/serein/",
    docsDir: "docs",
    editLinks: false,
    editLinkText: "为此页提供修改建议",
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: "Last Updated",
    // 启动页面丝滑滚动
    smoothScroll: true,
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
    // 导航栏配置
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
      text: "深入",
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
        { text: "简介", link: "/back/basics" },
        { text: "快速上手", link: "/back/started" },
        { text: "配置", link: "/back/setting" },
        { text: "部署", link: "/back/deploy" },
      ],
    },
    {
      text: "深入",
      children: [
        { text: "进阶", link: "/back/advanced" },
        { text: "规范", link: "/back/specification" },
        { text: "API 参考 ", link: "/back/api-reference" },
      ],
    },
    {
      text: "其它",
      children: [
        { text: "名词参考", link: "/back/noun-reference" },
        { text: "常见问题", link: "/back/common-problem" },
        { text: "常见疑点", link: "/back/common-doubts" },
      ],
    },
    {
      text: "版本",
      children: [{ text: "更新日志", link: "/back/update-logs" }],
    },
  ];
}

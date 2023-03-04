export default {
    lang: "zh-CN",
    // 网站标题
    title: "Fancy",
    // 网站描述
    description: "Fancy 开发文档",
    // 打包目录
    dest: "./dist",
    // 添加图标
    head: [["link", {rel: "icon", href: "/favicon.ico"}]],
    themeConfig: {
        logo: "/images/logo.png",
        repo: "https://gitlab.junyue.com/fancy/",
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
            link: "https://gitlab.junyue.com/fancy/",
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

    sidebar: {
      "/front/": getFrontSidebar(),
      "/back/": getBackSidebar(),
      "/app/": getAppSidebar(),
      "/datav/": getDatavSidebar(),
    },
  },
};

function getFrontSidebar() {
  return [
    {
      text: "介绍",
      children: [
        { text: "简介", link: "/front/basics" },
        { text: "入门", link: "/front/started" },
        { text: "配置", link: "/front/configuration" },
        { text: "部署", link: "/front/deploy" },
      ],
    },
    {
      text: "深入",
      children: [
        { text: "进阶", link: "/front/advanced" },
        { text: "规范", link: "/front/specification" },
        { text: "API 参考", link: "/front/api-reference" },
      ],
    },
    {
      text: "其它",
      children: [
        { text: "名词参考", link: "/front/noun-reference" },
        { text: "常见问题", link: "/front/common-problem" },
        { text: "常见疑点", link: "/front/common-doubts" },
      ],
    },
    {
      text: "版本",
      children: [{ text: "更新日志", link: "/back/version" }],
    },
  ];
}

function getBackSidebar() {
  return [
    {
      text: "介绍",
      children: [
        { text: "简介", link: "/back/basics" },
        { text: "入门", link: "/back/started" },
        { text: "配置", link: "/back/configuration" },
        { text: "部署", link: "/back/deploy" },
      ],
    },
    {
      text: "深入",
      children: [
        { text: "进阶", link: "/back/advanced" },
        { text: "规范", link: "/back/specification" },
        { text: "API 参考", link: "/back/api-reference" },
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
      children: [{ text: "更新日志", link: "/back/version" }],
    },
  ];
}

function getAppSidebar() {
  return [
    {
      text: "介绍",
      children: [
        { text: "简介", link: "/app/basics" },
        { text: "入门", link: "/app/started" },
        { text: "配置", link: "/app/configuration" },
        { text: "部署", link: "/app/deploy" },
      ],
    },
    {
      text: "深入",
      children: [
        { text: "进阶", link: "/app/advanced" },
        { text: "规范", link: "/app/specification" },
        { text: "API 参考", link: "/app/api-reference" },
      ],
    },
    {
      text: "其它",
      children: [
        {text: "名词参考", link: "/app/noun-reference"},
        {text: "常见问题", link: "/app/common-problem"},
        {text: "常见疑点", link: "/app/common-doubts"},
      ],
    },
    {
      text: "版本",
      children: [{text: "更新日志", link: "/back/version"}],
    },
  ];
}

function getDatavSidebar() {
  return [
    {
      text: "介绍",
      children: [
        {text: "简介", link: "/datav/basics"},
        {text: "入门", link: "/datav/started"},
        {text: "配置", link: "/datav/configuration"},
        {text: "部署", link: "/datav/deploy"},
      ],
    },
    {
      text: "深入",
      children: [
        {text: "进阶", link: "/datav/advanced"},
        {text: "规范", link: "/datav/specification"},
        {text: "API 参考", link: "/datav/api-reference"},
      ],
    },
    {
      text: "其它",
      children: [
        {text: "名词参考", link: "/datav/noun-reference"},
        {text: "常见问题", link: "/datav/common-problem"},
        {text: "常见疑点", link: "/datav/common-doubts"},
      ],
    },
    {
      text: "版本",
      children: [{text: "更新日志", link: "/back/version"}],
    },
  ];
}

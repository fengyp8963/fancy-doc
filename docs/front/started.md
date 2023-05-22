---
sidebarDepth: 4
---

# 开始上手

Fancy Admin是一个基于 [Vben](https://doc.vvbin.cn/) 前端框架二次开发，其中蕴含 [Vue3.0](https://github.com/vuejs/vue-next)、[Vite](https://github.com/vitejs/vite)、 [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)、[TypeScript](https://www.typescriptlang.org/)等技术
的后台解决方案，该项目会持续跟进最新技术，并将其应用在项目中。

## 需要掌握的基础知识

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。
建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [Vue3 文档](https://v3.vuejs.org/)
- [Vue-RFCS](https://github.com/vuejs/rfcs)
- [Vue2 迁移到 3](https://v3.vuejs.org/guide/migration/introduction.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-router](https://next.router.vuejs.org/)
- [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Es6](https://es6.ruanyifeng.com/)
- [Vitejs](https://vitejs.dev/)
- [WindiCss](https://windicss.netlify.app/)

## vite 插件推荐

- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - 用于本地及开发环境数据 `mock`
- [vite-plugin-html](https://github.com/anncwb/vite-plugin-html) - 用于 `html` 模版转换，可以在`html`文件内进行书写模版语法
- [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-imagemin](https://github.com/anncwb/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/anncwb/vite-plugin-theme) - 用于在线切换主题色/黑暗主题适配等主题相关配置
- [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression) - 用于打包输出`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons) - 快速生成 `svg sprite`

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

| [<img src="/front/images/about-ie.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="/front/images/about-edge.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="/front/images/about-firefox.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="/front/images/about-chrome.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="/front/images/about-safari.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 环境准备

本地环境需要安装 [Yarn1.x](https://yarnpkg.com/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

::: warning 注意

- 必须使用[Yarn1.x](https://yarnpkg.com/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`12.x`以上，且不能为`13.x`版本，这里推荐 `14.x` 及以上。

:::

## 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备 （也可以选择 Volar,如果使用的是新的语法糖语法，则要禁用Vetur,启用Volar才能识别）
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v
```

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。


## 包管理工具

依赖包管理工具，也可安装到现有项目中。这两种情况下，你都可以用：

::: code-group

```sh [pnpm]
# 全局安装yarn
npm i -g pnpm
# 验证
pnpm -v # 出现对应版本号即代表安装成功
```

```sh [yarn]
# 全局安装yarn
npm i -g yarn
# 验证
yarn -v # 出现对应版本号即代表安装成功
```

:::

## 启动项目

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
pnpm i
# 运行项目
pnpm serve
```

打开链接 `http://localhost:5173`

如果您看到以下页面，那么您就成功了。

![img.png](/front/images/started-fancy-vue-admin.png)

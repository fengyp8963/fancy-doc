---
sidebarDepth: 4
---
# Lint

## 介绍

::: tip 使用 lint 的好处

具备基本工程素养的同学都会注重编码规范，而代码风格检查（Code Linting，简称 Lint）是保障代码规范一致性的重要手段。

遵循相应的代码规范有以下好处

- 较少 bug 错误率
- 高效的开发效率
- 更高的可读性

:::

项目内集成了以下几种代码校验方式

1. eslint 用于校验代码格式规范
2. commitlint 用于校验 git 提交信息规范
3. stylelint 用于校验 css/less 规范
4. prettier 代码格式化

::: warning

lint 不是必须的，但是很有必要，一个项目做大了以后或者参与人员过多后，就会出现各种风格迥异的代码，对后续的维护造成了一定的麻烦

:::

## ESLint

ESLint 是一个代码规范和错误检查工具
### 手动校验代码

```bash
# 执行下面代码.能修复的会自动修复，不能修复的需要手动修改
yarn run lint:eslint
```

## CommitLint

commitlint 用于校验 git 提交信息规范

### Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `mod` 不确定分类的修改
  - `wip` 开发中
  - `types` 类型修改

## Stylelint

stylelint 用于校验项目内部 css 的风格,加上编辑器的自动修复，可以很好的统一项目内部 css 风格

## Prettier

prettier 可以用于统一项目代码风格，统一的缩进，单双引号，尾逗号等等风格

## Git Hook

git hook 一般结合各种 lint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则不会进行提交。需要开发者自行修改后再次进行提交

## 项目路径规范

项目全路径（包含所有父级路径）不能出现中文、日文、韩文。否则将会出现路径访问 404 导致以下问题

```ts
[vite] Failed to resolve module import "ant-design-vue/dist/antd.css-vben-adminode_modulesant-design-vuedistantd.css". (imported by /@/setup/ant-design-vue/index.ts)
```

## 文件命名规范

 - 文件名以**全小写,多个词用中划线(-)连接**的格式命名
 - 一个模块对应一个文件目录,一个模块下可以有多个菜单; 一个菜单对应一个文件目录,目录中含有文件如图(**注：统一文件命名**):

 ![img.png](/app/images/specification-001.png)

更多项目规范可查看友情链接 https://vvbin.cn/doc-next/dep/lint.html

## 格式化日期规范

单独把 moment 放到 dateUtil 内

在 `src/utils/dateUtil` 内，使用的是 moment，其次在页面中对时间的操作也是使用 dateUtil，而不是直接 `import moment from 'moment'`。

这样做主要是方便后续切换到 `dayjs`，因为 api 一样，所以在后续切换中，只需更改 dateUtil 内的 import 即可，而不用全部更改。
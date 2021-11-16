---
sidebarDepth: 3
---

# 更新日志

::: info 说明
系统版本更新的日志内容
:::

## 2021.12.01

### 升级说明

- 包管理器由`yarn`改为 `pnpm`
- 删除`node_modules`和`yarn.lock`，全局安装`pnpm`
- 执行`pnpm install`

### ✨ Features

- **其它**
  - `.env`文件中的`VITE_PROXY`配置支持单引号
  - 移除 build 过程中的警告

### 🐛 Bug Fixes

- **BasicTable**
  - 修复可编辑单元格某些情况下无法提交的问题
  - 修复`inset`属性不起作用的问题
  - 修复`useTable`与`BasicTable`实例的`reload`方法`await`表现不一致的问题
  - 修复`clickToRowSelect`会无视行选择框 disabled 状态的问题
  - 修复`BasicTable`在某些情况下，分页会被重置的问题
  - 修改 `deleteTableDataRecord` 方法
- **BasicModal**
  - 修复点击遮罩、按下`Esc`键都不能关闭`Modal`的问题
  - 修复点击关闭按钮、最大化按钮旁边的空白区域也会导致`Modal`关闭的问题
- **BasicTree** 修复节点插槽不起作用的问题
- **CodeEditor** 修复可能会造成的`Build`失败的问题
- **BasicForm** 修复自定义 FormItem 组件的内容宽度可能超出范围的问题
- **ApiTreeSelect** 修复`params`变化未能触发重新请求 api 数据的问题
- **其它**
  - 修复多标签在某些情况下关闭页签不会跳转路由的问题
  - 修复部分组件可能会造成热更新异常的问题
  - 修复直接`import`部分`antdv`子组件时会在 build 过程中报错的问题，如：TabPane、RadioGroup

## 2021.11.01

### ✨ Features

- **BasicForm** 表单组件新增`Divider`，用于较长表单的区域分割
- **BasicTable**
  - 单元格编辑新增提交回调，将根据回调函数返回的结果来决定是否将数据提交到表格
  - 行编辑添加校验方法，允许只校验而不提交值，以便异步保存数据成功后才提交倒表格
  - 修复`rowClassName`属性无法和`striped`同时使用的问题
- 新增组件 **MarkdownViewer** 用于显示 Markdown 格式的富文本

### 🐛 Bug Fixes

- **CodeEditor** 修复 JSON 编辑器在格式化无效 JSON 文本时会抛出异常的问题
- **Tinymce** 修复 inline 模式在一些场景下会出现异常的问题
- **BasicTable**
  - 修复可编辑单元格的内容为空时，不会显示编辑图标的问题
  - 修复表尾合计行与表格主体部分的列有时候未能对齐的问题
- **MarkDown** 修复初始 value 属性的值不起作用的问题
- **BasicUpload** 修复`accept`属性不支持`MIME`及点开头的后缀名的问题
- **ApiSelect** 修复`value`属性的类型定义问题
- **其它**
  - 修复部分封装组件在使用插槽时报错的问题
  - 修复`useECharts`的`theme`参数不起作用的问题
  - 修复`Token`失效时，按 F5 刷新页面可能会出现页面加载异常的问题
  - 修复`useRedo`的不当调用可能会导致重定向`path`异常的问题
  - 修复`vite`自定义模式名称不支持下划线的问题

## 2021.10.01

- 升级 vue 3.2,如果运行失败，删除 node_modules 后重装即可

### ✨ Features

- **BasicTree** 添加搜索功能相关属性和方法
- **BasicForm** 新增`alwaysShowLines`用于设置折叠时保留显示的行数

### 🐛 Bug Fixes

- **Cropper** 修复未能及时销毁的问题
- **BasicTable**
  - 修复`CellFormat`无法使用`Map`类型数据的问题
  - 修复可编辑单元格未能正确显示`0`值的问题
  - 修复 selection-change 事件在取消勾选时未能正确触发的问题
  - 修复浅色主题下的全屏状态背景颜色不正确的问题
  - 修复`getSelectRows`不支持远程数据跨页选择时获取完整数据的问题
  - 修复在`editComponentProps`中为编辑组件提供的`size`属性无效的问题
- **Qrcode** 修复二维码组件在创建时未能及时绘制的问题
- **BasicModal** 修复`helpMessage`属性不起作用的问题
- **BasicButton** 修复按钮样式表现与 antd 官方不一致的问题
- **其它** 修复`useRedo`(重新加载当前路由)会丢失路由`params`数据的问题

### 🎫 Chores

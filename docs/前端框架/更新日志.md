---
outline: deep
---

# 更新日志

::: info 说明
系统版本更新的日志内容
:::

## 2022.10.01

### 升级说明

- 包管理器由`yarn`改为 `pnpm`
- 删除`node_modules`和`yarn.lock`，全局安装`pnpm`
- 执行`pnpm install`

### ✨ Features

- **BasicTree** 添加搜索功能相关属性和方法
- **BasicForm** 新增`alwaysShowLines`用于设置折叠时保留显示的行数

### 🐛 Bug Fixes

- **Cropper** 修复未能及时销毁的问题
- **BasicTable**
    - 修复`CellFormat`无法使用`Map`类型数据的问题
- **Qrcode** 修复二维码组件在创建时未能及时绘制的问题
- **BasicModal** 修复`helpMessage`属性不起作用的问题
- **BasicButton** 修复按钮样式表现与 antd 官方不一致的问题
- **其它** 修复`useRedo`(重新加载当前路由)会丢失路由`params`数据的问题

[//]: # (### 🎫 Chores)

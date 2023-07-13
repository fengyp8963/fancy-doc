---
sidebarDepth: 3
---

# 更新日志

::: info 说明
系统版本更新的日志内容
:::

## 2022.10.01

### 升级说明

- fancy版本由`2022.06.01-SNAPSHOT`改为 `2023.06.01-SNAPSHOT`

### ✨ Features

- **Feign** 新增`feign`接口调用缓存注解
- **BasicForm** 新增`alwaysShowLines`用于设置折叠时保留显示的行数

### 🐛 Bug Fixes

- **Token** 修复未能及时销毁的问题
- **BasicTable**
    - 修复`CellFormat`无法使用`Map`类型数据的问题
- **Qrcode** 修复二维码创建时未能及时绘制的问题
- **BasicModal** 修复`helpMessage`属性不起作用的问题
- **其它** 修复`useRedo`(重新加载当前路由)会丢失路由`params`数据的问题

[//]: # (### 🎫 Chores)

---
sidebarDepth: 3
---

# 规范

::: info 介绍
项目遵从规范，约定。
:::

## 开发工具强制统一

- 前端: VS Code
- 后端: IntelliJ IDEA
- 数据库设计: CHINER
- 数据库客户端: DataGrip

## IDEA 推荐安装插件

- Lombok：自动生成get set等方法
- Maven Helper： maven 依赖排查
- Free Mybatis plugin: mybatis xml 快速切换
- RestfulTool： 接口查找
- Alibaba Java Coding Guidelines ： 阿里代码编码指南
- Git commit Template： git 提交消息模板
- GitToolBox： Git工具

## VS Code 推荐安装插件

- Iconify IntelliSense- Iconify 图标插件
- windicss IntelliSense- windicss 提示插件
- I18n-ally- i18n 插件
- Vetur- vue 开发必备 （也可以选择 Volar）
- ESLint- 脚本代码检查
- Prettier- 代码格式化
- Stylelint- css 格式化
- DotENV- .env 文件 高亮

## 项目约定（规范命名）

- 源码、jdk、mysql、redis、rabbitmq、seata等存放路径禁止包含中文、空格、特殊字符等。

## 数据库设计 (参考sys_user表)

- 使用CHINER来设计表结构
- 必须显式指定主键, 勿用复合主键. 主键的命名统一为: id
- 任何表至少包含3个字段： bigint id、 varchar createdBy、varchar lastModifiedBy、datetime createdDate、datetime
  lastModifiedDate (可以自行修改 EntityType)
- 关于状态字段根据业务含义命名为: enabled
- 如（隐藏、显示），（是、否），（可用、不可用）、(启用、禁用) 等字段用 enabled
- 界面上要显示成树形结构的表, 至少需要3个字段: id、parent_id、sort
- 表中有以下含义的字段, 尽可能的采用同样的命名规则:
- 名称: name (树型结构用: label)
- 编码: code
- 描述: description
- 最后修改数据的用户ID: lastModifiedBy
- 最后修改数据的时间: lastModifiedDate
- 是否内置数据: readonly_
- 不得使用外键与级联，一切外键概念必须在应用层解决
- 不用存储过程
- 数据库名、表名、字段名统一使用小写 + _
- varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长 度大于此值，定义字段类型为 text，独立出来-
  一张表，用主键来对应，避免影响其它字段索 引效率。
- 表名命名规则: “b_业务名称_表的作用” 、 “c_业务名称_表的作用” . b_ 表示业务表, c_表示核心表(权限系统的一整套)
- 表、字段 必须加注释
- 表名注释支持换行，第一行会被视为表名。 表的介绍请换行填写。
- 字段的第一行视为字段简介，详细介绍和枚举类型请换行
- 所有字段尽量根据业务设置合理的缺省值，尽量避免表中出现 NULL值
- 当字段为外键时，字段名为： 关联表_id， 注释需要在字段注释基础上，换行加上#关联表表名来说明关联的哪张表。（注意英文#号）
- 当字段为枚举时，需按照下面当格式添加注释：

```lua
注释模板1： 注释内容 #枚举类名{枚举值英文名:"枚举值英文注释";  ...}
注释模板2： 注释内容 #枚举类名{枚举值英文名:val,"枚举值英文注释";  ...}
注释模板3： 注释内容 #枚举类名{枚举值英文名:val,"枚举值英文注释",val2;  ...}
注释模板4： 注释内容 #{枚举值英文名:"枚举值英文注释";  ...}
其中枚举类名可以没有，如果没有，则生成的枚举值名为：表对应的实体名 + 当前字段对应的属性名(首字母大写) + Enum 
枚举值例子：
    文件类型 #FileType{PAN:云盘数据;API:接口数据}
    数据类型 #DataType{DIR:1,目录;IMAGE:2,图片;VIDEO:3,视频;AUDIO:4,音频;DOC:5,文档;OTHER:6,其他}
    数据类型 #{DIR:目录;IMAGE:图片;VIDEO:视频;AUDIO:音频;DOC:文档;OTHER:其他}
```

### 六、Git 提交规范

- 每次提交尽量按功能点或bug提交代码，哪怕是只修改了一行代码，一个字母，尽量不要一次性提交过多的功能和bug等；
- 及时拉取、及时提交、及时推送、及时合并；
- 提交代码前,记得勾选IDEA提交框中的Reformat code、Rearrage code、Optimize imports选项；
- 提交代码时按照以下模版进行注释；

```lua
feat 增加新功能
fix 修复问题/BUG
style 代码风格相关无影响运行结果的
perf 优化/性能提升
refactor 重构
revert 撤销修改
test 测试相关
docs 文档/注释
chore 依赖更新/脚手架配置修改等
workflow 工作流改进
ci 持续集成
mod 不确定分类的修改
wip 开发中
types 类型修改
```
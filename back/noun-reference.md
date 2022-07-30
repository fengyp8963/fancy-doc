# 名词参考

::: info 介绍
系统版本，专有名词，错误编码。
:::

## 附1：版本历史

| 版本号 | 更新日期 | 备注 |
| ------------- |:-------------| :------------- |
| 2022.06.01-SNAPSHOT   | 2021.10.31   | 项目初始化。    |

## 附2：专有名词

- POJO（Plain Ordinary Java Object）: 在本手册中，POJO专指只有setter / getter / toString的简单类，包括DO/DTO/BO/VO等。
- GAV（GroupId、ArtifactId、Version）: Maven坐标，是用来唯一标识jar包。
- OOP（Object Oriented Programming）: 本手册泛指类、对象的编程处理方式。
- ORM（Object Relation Mapping）: 对象关系映射，对象领域模型与底层数据之间的转换，本文泛指jpa, mybatis等框架。
- NPE（java.lang.NullPointerException）: 空指针异常。
- SOA（Service-Oriented Architecture）: 面向服务架构，它可以根据需求通过网络对松散耦合的粗粒度应用组件进行分布式部署、组合和使用，有利于提升组件可重用性，可维护性。
- 一方库: 本工程内部子项目模块依赖的库（jar包）。
- 二方库: 公司内部发布到中央仓库，可供公司内部其它应用依赖的库（jar包）。
- 三方库: 公司之外的开源库（jar包）。
- IDE（Integrated Development Environment）: 用于提供程序开发环境的应用程序，一般包括代码编辑器、编译器、调试器和图形用户界面等工具，本《手册》泛指IntelliJ IDEA和eclipse。

## 附3：错误编码

| 错误编码 | 中文描述 | 说明 |
| ------------- |:-------------| :------------- |
| 00000         | 一切 ok       | 正确执行后的返回  |
| A0001         | 用户端错误     | 一级宏观错误码    |
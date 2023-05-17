---
sidebarDepth: 3
---
# 快速上手

::: info 前言
本文主要以图文的形式讲解项目所需环境在windows/mac下的安装，主要包括IDEA、Docker安装。
:::

## 依赖环境

::: tip 提示
项目java环境基于JDK11或以上，插件Lombok；以下以Mac系统举例：
:::

### Mac下Java的安装与配置
- 从官网下载需要的JDK版本：[下载](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
![img.png](/back/images/basics-003.png)

- 执行：`java -version`，看看是否安装成功
![img.png](/back/images/basics-004.png)

### Mac下Maven的安装与配置
- 从官网下载需要的Maven版本：[下载](http://maven.apache.org/download.cgi)
![img.png](/back/images/basics-005.png)
- 解压配置环境变量
```shell
export M2_HOME=/Users/apache-maven-3.6.3
export PATH=$PATH:$M2_HOME/bin
```
- 执行：`mvn -v`，看看是否安装成功
![img.png](/back/images/basics-006.png)


## 本地运行
### IDEA

- 关于IDEA的安装与使用请参考：https://github.com/judasn/IntelliJ-IDEA-Tutorial
- 搜索插件仓库，安装相关插件：`Translation` `GitToolBox` `Maven Helper`

创建项目fancy目录；创建pom.xml文件，文件内容如下

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.junyue.fancy</groupId>
    <artifactId>fancy</artifactId>
    <version>2022.06.01-SNAPSHOT</version>
    <name>fancy</name>
    <packaging>pom</packaging>
    <description>fancy</description>

    <properties>
        <java.version>17</java.version>
        <maven.compiler.source>${java.version}</maven.compiler.source>
        <maven.compiler.target>${java.version}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    </properties>

    <modules>
        <module>fancy</module>
    </modules>

    <licenses>
        <license>
            <name>The Apache Software License, Version 2.0</name>
            <url>https://www.apache.org/licenses/LICENSE-2.0.txt</url>
        </license>
    </licenses>

    <developers>
        <developer>
            <name>fengyp</name>
            <email>fengyp8963@hotmail.com</email>
            <organizationUrl>https://gitlab.junyue.com/</organizationUrl>
            <url>https://gitlab.junyue.com/</url>
        </developer>
    </developers>

    <properties>
        <java.version>17</java.version>
    </properties>

</project>
```

项目Gitlab地址路径

```shell
git clone https://gitlab.junyue.com/fancy/fancy.git
git clone https://gitlab.junyue.com/fancy/fancy-config.git
git clone https://gitlab.junyue.com/fancy/fancy-vue-admin.git
```

- 将项目下载到本地，然后直接打开：
![img.png](/back/images/basics-007.png)
- 启动服务如下：
  ![img.png](/back/images/basics-008.png)
- 先启服务
    - `FancyCloudConfigApplication` 配置中心服务
    - `FancyCloudEurekaApplication` 注册中心服务
- 必须服务
    - `FancyCloudAuthorizationApplication` 验证服务
    - `FancyCloudComponentApplication` 组件服务
    - `FancyCloudGatewayApplication` 网关服务
    - `FancyCloudMemberApplication` 会员服务
    - `FancyCloudSystemApplication` 系统服务
    - `FancyCloudTenantApplication` 租户服务
- 其它服务按需要启动
- 所有服务如下：

```txt
FancyCloudAdminApplication 监控服务
FancyCloudFlinkApplication 数据分析服务
FancyCloudDatavApplication 数据大屏门户服务
FancyCloudFlywayApplication 数据库版本服务
FancyCloudFormApplication 表单设计服务
FancyCloudGeneratorApplication 代码生成服务
FancyCloudOnlineApplication 在线服务
FancyCloudPayApplication 支付服务
FancyCloudPortalApplication 门户服务
FancyCloudProcessApplication  流程服务
FancyCloudSearchApplication  搜索服务
FancyCloudWebsocketApplication Websocket服务
FancyCloudWeixinApplication 微信服务
FancyCloudXxlJobApplication 定时任务服务
FancyCloudXxlJobExecutorApplication 定时任务客户端服务
··· 业务服务
```

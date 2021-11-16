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

创建项目serein目录；创建pom.xml文件，文件内容如下

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.serein.cloud</groupId>
    <artifactId>serein</artifactId>
    <version>2021.11.01-SNAPSHOT</version>
    <name>serein</name>
    <packaging>pom</packaging>
    <description>serein-cloud</description>

    <properties>
        <java.version>11</java.version>
        <maven.compiler.source>${java.version}</maven.compiler.source>
        <maven.compiler.target>${java.version}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    </properties>

    <modules>
        <module>serein-cloud</module>
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
            <email>fengyp@163.com</email>
            <organizationUrl>https://github.com/fengyp</organizationUrl>
            <url>https://blog.fengyp.com/</url>
        </developer>
    </developers>

</project>
```

项目Gitlab地址路径

```shell
git clone https://gitlab.vipklm.com/serein/serein-cloud.git
git clone https://gitlab.vipklm.com/serein/serein-cloud-config.git
git clone https://gitlab.vipklm.com/serein/vue-serein-admin.git
```

- 将项目下载到本地，然后直接打开：
![img.png](/back/images/basics-007.png)
- 启动服务如下：
![img.png](/back/images/basics-008.png)
- 必须服务先启动
  - `SereinCloudConfigApplication` 配置中心服务
  - `SereinCloudEurekaApplication` 注册中心服务
- 核心服务再启动
  - `SereinCloudGatewayApplication` 网关服务
  - `SereinCloudAuthorizationApplication` 验证服务
  - `SereinCloudSystemApplication` 系统服务
- 其它服务按需要启动
- 所有服务如下：

```txt
SereinCloudAdminApplication 监控服务
SereinCloudAuthorizationApplication 验证服务
SereinCloudBusinessApplication 业务服务
SereinCloudComponentApplication 组件服务
SereinCloudConfigApplication 配置中心服务
SereinCloudEurekaApplication 注册中心服务
SereinCloudGatewayApplication 网关服务
SereinCloudGeneratorApplication 代码生成服务
SereinCloudPayApplication 支付服务
SereinCloudSearchApplication 搜索服务
SereinCloudSystemApplication 系统服务
SereinCloudTransactionApplication 分布式事物服务
SereinCloudWebsocketApplication websocket服务
SereinCloudWeixinApplication 微信服务
SereinCloudXxlJobApplication 定时任务服务
SereinCloudXxlJobExecutorApplication定时任务客户端服务
```

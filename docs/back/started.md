---
sidebarDepth: 4
---

# 后端框架

简介Fancy`是一套基于微服务后台管理系统，使用现阶段主流技术实现；涵盖了Spring Cloud 2021.0.2、Spring Boot 2.6.4、Spring
JPA 2.6.4、Elasticsearch
7.9.0、RocketMQ 4.7.1、Redis 5.0.5、MySQL 8.0.22 等技术，采用Docker容器化部署，同时提供了基于Vue3.0的管理后台方便快速搭建系统，集成了注册中心、配置中心、监控中心、服务网关等系统功能；
后台管理系统包含部门管理、用户管理、角色管理、菜单管理、岗位管理、字典管理、权限管理、系统设置等模块。

## 业务架构

![业务架构图](/back/images/started-000.png)

## 技术架构

![技术架构图](/back/images/started-001.png)

## 部署架构

![系统架构图](/back/images/started-002.png)

## 功能特点

- 主体框架：采用最新的Spring Cloud 2021.0.2, Spring Boot 2.6.4, Spring Cloud Alibaba 2021.1版本进行系统设计；
- 统一注册：支持eureka作为注册中心，实现多配置、分群组、分命名空间、多业务模块的注册和发现功能；
- 统一认证：统一Oauth2认证协议，采用jwt的方式，实现统一认证，并支持自定义grant_type实现手机号码登录，第三方登录集成JustAuth实现微信、支付宝等多种登录模式；
- 业务监控：利用Spring Boot Admin来监控各个独立Service的运行状态。
- 内部调用：集成了Feign模式支持内部调用，并且可以实现无缝切换，适合新老程序员，快速熟悉项目；
- 身份注入：通过注解的方式，实现用户登录信息的快速注入；
- 在线文档：通过接入springdoc，实现在线API文档的查看与调试;
- 代码生成：基于jpa-generator自动生成代码，提升开发效率，生成模式不断优化中，暂不支持前端代码生成；
- 消息中心：集成消息中间件RocketMQ和RabbitMQ，对业务进行异步处理;
- 业务分离：采用前后端分离的框架设计，前端采用vue3、antd
- 链路追踪：自定义traceId的方式，实现简单的链路追踪功能
- 多租户功能：集成spring data jpa，实现SAAS多租户功能

#

## 模块说明

``` text
.Fancy
├── fancy-base -- 平台服务
│   ├── fancy-admin -- 监控服务
│   ├── fancy-authorization -- 验证服务
│   ├── fancy-config -- 配置服务
│   ├── fancy-eureka -- 注册服务
│   ├── fancy-gateway -- 网关服务
├── fancy-custom -- 自定义服务
│   ├── fancy-demo -- 示例服务
│   ├── fancy-poratl -- 门户服务
├── fancy-platform -- 平台服务
│   ├── fancy-flink -- 数据分析服务
│   ├── fancy-component -- 组件服务
│   ├── fancy-datav -- 数据大屏服务
│   ├── fancy-user -- 用户服务
│   ├── fancy-online -- 在线表单
│   ├── fancy-page -- 页面服务
│   ├── fancy-pay -- 支付服务
│   ├── fancy-process -- 流程服务
│   ├── fancy-system -- 系统服务
│   ├── fancy-tenant -- 租户服务
│   ├── fancy-websocket -- websocket服务
│   ├── fancy-weixin -- 微信服务
└── fancy-plugin -- 插件服务
│   ├── fancy-flyway -- 数据库版本管理
│   ├── fancy-generator -- 代码生成
│   ├── fancy-search -- 搜索引擎
│   ├── fancy-xxljob -- 定时任务
└── └── fancy-xxljob-executor -- 定时任务执行器
```

## 技术选型

| 技术                     | 说明            | 官网                                                   |
|------------------------|---------------|------------------------------------------------------|
| Spring Cloud           | 微服务框架         | https://spring.io/projects/spring-cloud              |
| Spring Boot            | 容器+MVC框架      | https://spring.io/projects/spring-boot               |
| Spring Security Oauth2 | 认证和授权框架       | https://spring.io/projects/spring-security-oauth     |
| Swagger                | 文档生产工具        | https://github.com/swagger-api/swagger-ui            |
| Elasticsearch          | 搜索引擎          | https://github.com/elastic/elasticsearch             |
| RocketMq               | 消息队列          | https://github.com/apache/rocketmq                   |
| Redis                  | 分布式缓存         | https://redis.io/                                    |
| Docker                 | 应用容器引擎        | https://www.docker.com/                              |
| OSS                    | 对象存储          | https://github.com/aliyun/aliyun-oss-java-sdk        |
| JWT                    | JWT登录支持       | https://github.com/jwtk/jjwt                         |
| LogStash               | 日志收集          | https://github.com/logstash/logstash-logback-encoder |
| Lombok                 | 简化对象封装工具      | https://github.com/rzwitserloot/lombok               |
| Seata                  | 全局事务管理框架      | https://github.com/seata/seata                       |
| Portainer              | 可视化Docker容器管理 | https://github.com/portainer/portainer               |
| Gitlab CICD            | 自动化部署工具       | https://about.gitlab.com/                            |
| Nginx                  | 反向代理web服务器    | http://nginx.org/                                    |

| 技术         | 说明             | 官网                              |
|------------|----------------|---------------------------------|
| Vue        | 前端框架           | https://vuejs.org/              |
| Vue-router | 路由框架           | https://router.vuejs.org/       |
| Vuex       | 全局状态管理框架       | https://vuex.vuejs.org/         |
| Ant design | 前端UI框架         | https://www.antdv.com/          |
| Vben Admin | 一个开箱即用的前端框架    | https://vvbin.cn/doc-next/      |
| Axios      | 前端HTTP框架       | https://github.com/axios/axios/ |
| v-charts   | 基于Echarts的图表框架 | https://v-charts.js.org/        |

## 快速上手

本文主要以图文的形式讲解项目所需环境在windows/mac下的安装，主要包括IDEA、Docker安装。
项目java环境基于JDK17或以上，插件Lombok；

### 创建项目fancy-cloud目录；创建pom.xml文件，文件内容如下

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
            <organizationUrl>https://github.com/fengyp8963/</organizationUrl>
            <url>https://github.com/fengyp8963/</url>
        </developer>
    </developers>

    <properties>
        <java.version>17</java.version>
    </properties>

</project>
```

### 拉取代码

```shell
git clone https://github.com/fengyp8963/fancy.git
git clone https://github.com/fengyp8963/fancy-config.git
git clone https://github.com/fengyp8963/fancy-vue-admin.git
```

### 将项目下载到本地，打开项目，启动服务

```text
FancyConfigApplication 配置中心服务 先启动
FancyEurekaApplication 注册中心服务 先启动
FancyGatewayApplication 网关服务
FancyAuthorizationApplication 验证服务
FancyCompApplication 组件服务
FancyUserApplication 用户服务
FancySystemApplication 系统服务
FancyTenantApplication 租户服务
```

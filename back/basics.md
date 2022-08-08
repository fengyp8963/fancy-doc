---
sidebarDepth: 2
---

# 后端框架

![SpringCloud](https://img.shields.io/badge/Spring%20Cloud%202021.0.2-blue)&nbsp;
![SpringBoot](https://img.shields.io/badge/Spring%20Boot-2.6.4.RELEASE-green)&nbsp;
![MySql](https://img.shields.io/badge/Database-MySql8-orange.svg)&nbsp;
![JDK](https://img.shields.io/badge/JDK-11.0.8-blue.svg)&nbsp;
![Author](https://img.shields.io/badge/Author-fengyp-blue.svg)&nbsp;

::: info 简介
`Serein Cloud`是一套基于微服务后台管理系统，使用现阶段主流技术实现；涵盖了Spring Cloud 2021.0.2、Spring Boot 2.6.4、Spring JPA 2.6.4、Elasticsearch
7.9.0、RocketMQ 4.7.1、Redis 5.0.5、MySQL 8.0.22 等技术，采用Docker容器化部署，同时提供了基于Vue3.0的管理后台方便快速搭建系统，集成了注册中心、配置中心、监控中心、服务网关等系统功能；
后台管理系统包含部门管理、用户管理、角色管理、菜单管理、岗位管理、字典管理、权限管理、系统设置等模块。
:::

## 业务架构

![业务架构图](/back/images/basics-000.png)

## 技术架构

![技术架构图](/back/images/basics-001.png)

## 部署架构

![系统架构图](/back/images/basics-002.png)

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

``` lua
.Serein Cloud
├── serein-cloud-admin -- 监控服务
├── serein-cloud-authorization -- 验证服务
├── serein-cloud-business -- 业务服务
├── serein-cloud-config -- 配置服务
├── serein-cloud-eureka -- 注册服务
├── serein-cloud-gateway -- 网关服务
├── serein-cloud-platform -- 平台服务
│   ├── serein-cloud-flink -- 数据分析服务
│   ├── serein-cloud-flink-api
│   ├── serein-cloud-component -- 组件服务
│   ├── serein-cloud-component-api
│   ├── serein-cloud-datav -- 数据大屏服务
│   ├── serein-cloud-datav-api
│   ├── serein-cloud-member -- 会员服务
│   ├── serein-cloud-member-api
│   ├── serein-cloud-online
│   ├── serein-cloud-online-api
│   ├── serein-cloud-page -- 页面服务
│   ├── serein-cloud-page-api
│   ├── serein-cloud-pay -- 支付服务
│   ├── serein-cloud-pay-api
│   ├── serein-cloud-process -- 流程服务
│   ├── serein-cloud-process-api
│   ├── serein-cloud-system -- 系统服务
│   ├── serein-cloud-system-api
│   ├── serein-cloud-tenant -- 租户服务
│   ├── serein-cloud-tenant-api
│   ├── serein-cloud-websocket -- websocket服务
│   ├── serein-cloud-websocket-api
│   ├── serein-cloud-weixin -- 微信服务
│   └── serein-cloud-weixin-api
└── serein-cloud-plugin -- 插件服务
│   ├── serein-cloud-flyway
│   ├── serein-cloud-generator -- 代码生成
│   ├── serein-cloud-generator-api
│   ├── serein-cloud-search -- 搜索引擎
│   ├── serein-cloud-search-api
│   ├── serein-cloud-xxljob -- 定时任务
└── └── serein-cloud-xxljob-executor
......
```

## 技术选型

::: tip 提示
后端技术
:::

| 技术                   | 说明                 | 官网                                                 |
| ---------------------- | -------------------- | ---------------------------------------------------- |
| Spring Cloud           | 微服务框架           | https://spring.io/projects/spring-cloud              |
| Spring Boot            | 容器+MVC框架         | https://spring.io/projects/spring-boot               |
| Spring Security Oauth2 | 认证和授权框架       | https://spring.io/projects/spring-security-oauth     |
| Swagger                | 文档生产工具         | https://github.com/swagger-api/swagger-ui            |
| Elasticsearch          | 搜索引擎             | https://github.com/elastic/elasticsearch             |
| RocketMq               | 消息队列             | https://github.com/apache/rocketmq                       |
| Redis                  | 分布式缓存           | https://redis.io/                                    |
| Docker                 | 应用容器引擎         | https://www.docker.com/                              |
| OSS                    | 对象存储             | https://github.com/aliyun/aliyun-oss-java-sdk        |
| JWT                    | JWT登录支持          | https://github.com/jwtk/jjwt                         |
| LogStash               | 日志收集             | https://github.com/logstash/logstash-logback-encoder |
| Lombok                 | 简化对象封装工具     | https://github.com/rzwitserloot/lombok               |
| Seata                  | 全局事务管理框架     | https://github.com/seata/seata                       |
| Portainer              | 可视化Docker容器管理 | https://github.com/portainer/portainer               |
| Gitlab CICD            | 自动化部署工具       | https://about.gitlab.com/                            |
| Nginx                  | 反向代理web服务器     | http://nginx.org/                                     |

::: tip 提示
前端技术
:::

| 技术                   | 说明                  | 官网                            |
| --------------------- | --------------------- | ------------------------------ |
| Vue                   | 前端框架               | https://vuejs.org/              |
| Vue-router            | 路由框架               | https://router.vuejs.org/       |
| Vuex                  | 全局状态管理框架        | https://vuex.vuejs.org/         |
| Ant design            | 前端UI框架             | https://www.antdv.com/          |
| Vben Admin            | 一个开箱即用的前端框架   | https://vvbin.cn/doc-next/      |
| Axios                 | 前端HTTP框架           | https://github.com/axios/axios/ |
| v-charts              | 基于Echarts的图表框架   | https://v-charts.js.org/        |

## 学习所需知识点

> 由于Serein Cloud项目涉及到很多知识点，比如SpringBoot、ElasticSearch、Redis、
> Mysql等，本教程不会详细讲述这些，只会讲述本项目相关部分，所以推荐以下资料。对其中一些知识点并不熟悉的同学，可以看下下面推荐的资料。

## 团队名单

欢迎提交PR一起完善项目，以下为项目贡献的战友（排名不分先后）：

`@fengyp` `@zhouj` `@lify` `@chengb` `@huyue`

## 推荐资料

### IDEA

《IntelliJ-IDEA-Tutorial》：[https://github.com/judasn/IntelliJ-IDEA-Tutorial](https://github.com/judasn/IntelliJ-IDEA-Tutorial)
> 特别全的IDEA使用教程，可以学到很多实用的技巧。

### Spring

《Spring实战（第4版）》：[https://book.douban.com/subject/26767354/](https://book.douban.com/subject/26767354/)
> 经典的、畅销的Spring学习和实践指南,从此书可以学习到Spring的实用用法，对Spring有个整体的了解，推荐整本阅读。

### SpringBoot

《Spring Boot实战》：[https://book.douban.com/subject/26857423/](https://book.douban.com/subject/26857423/)
> SpringBoot的入门书，一共也就200多页，反正我是看完了，其中关于Groovy和Grails部分大可不看。

### MyBatis

《MyBatis从入门到精通》：[https://book.douban.com/subject/27074809/](https://book.douban.com/subject/27074809/)
> 很好的一本MyBatis入门书，作者是开源插件PageHelper的项目主，平时忘了MyBatis的一些用法的时候可以当工具书使用，推荐整本阅读

### MySql

《深入浅出MySQL》：[https://book.douban.com/subject/25817684/](https://book.douban.com/subject/25817684/)
> 网易DBA写的一本MySql书籍，作为一个开发者，我们只要看第一部分基础篇、第二部分开发篇、第三部分优化篇即可。

### Linux

《循序渐进Linux（第2版）》：[https://book.douban.com/subject/26758194/](https://book.douban.com/subject/26758194/)
> 南非蚂蚁写的一本Linux书籍，作为一个开发者，我们只要看第一篇基础知识篇、第二篇服务器搭建篇即可，后面讲到生产环境部署项目会用到。

### Elasticsearch

《Elasticsearch
权威指南》：[https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html](https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html)
> Elasticsearch官方推荐的中文学习资料，基于Elasticsearch2.4.x版本，比较老，但是可堪一用。大多数成熟的框架，版本迭代用法相差不会很大。

《Elasticsearch 技术解析与实战》：[https://book.douban.com/subject/26967826/](https://book.douban.com/subject/26967826/)
> 如果你觉得上面那本ElasticSearch版本太老的话可以看这本。

### Docker

《Spring Cloud与Docker微服务架构实战》：[https://book.douban.com/subject/27028228/](https://book.douban.com/subject/27028228/)
> 我们只需要看下这本书的Docker部分即可，后面讲到生产环境部署项目会用到。

## 结语

> 如果你按照我的推荐看了以上部分的资料，或者你已经有了以上部分的基础，那么你学习Serein Cloud的时候会非常顺利。
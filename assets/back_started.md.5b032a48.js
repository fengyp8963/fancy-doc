import{_ as s,o as a,c as n,V as t}from"./chunks/framework.580080a9.js";const l="/assets/started-000.60fc9139.png",p="/assets/started-001.7518c29b.png",o="/assets/started-002.0935878f.png",h=JSON.parse('{"title":"后端框架","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"back/started.md","filePath":"back/started.md","lastUpdated":1688972433000}'),e={name:"back/started.md"},r=t('<h1 id="后端框架" tabindex="-1">后端框架 <a class="header-anchor" href="#后端框架" aria-label="Permalink to &quot;后端框架&quot;">​</a></h1><p>简介Fancy`是一套基于微服务后台管理系统，使用现阶段主流技术实现；涵盖了Spring Cloud 2021.0.2、Spring Boot 2.6.4、Spring JPA 2.6.4、Elasticsearch 7.9.0、RocketMQ 4.7.1、Redis 5.0.5、MySQL 8.0.22 等技术，采用Docker容器化部署，同时提供了基于Vue3.0的管理后台方便快速搭建系统，集成了注册中心、配置中心、监控中心、服务网关等系统功能； 后台管理系统包含部门管理、用户管理、角色管理、菜单管理、岗位管理、字典管理、权限管理、系统设置等模块。</p><h2 id="业务架构" tabindex="-1">业务架构 <a class="header-anchor" href="#业务架构" aria-label="Permalink to &quot;业务架构&quot;">​</a></h2><p><img src="'+l+'" alt="业务架构图"></p><h2 id="技术架构" tabindex="-1">技术架构 <a class="header-anchor" href="#技术架构" aria-label="Permalink to &quot;技术架构&quot;">​</a></h2><p><img src="'+p+'" alt="技术架构图"></p><h2 id="部署架构" tabindex="-1">部署架构 <a class="header-anchor" href="#部署架构" aria-label="Permalink to &quot;部署架构&quot;">​</a></h2><p><img src="'+o+`" alt="系统架构图"></p><h2 id="功能特点" tabindex="-1">功能特点 <a class="header-anchor" href="#功能特点" aria-label="Permalink to &quot;功能特点&quot;">​</a></h2><ul><li>主体框架：采用最新的Spring Cloud 2021.0.2, Spring Boot 2.6.4, Spring Cloud Alibaba 2021.1版本进行系统设计；</li><li>统一注册：支持eureka作为注册中心，实现多配置、分群组、分命名空间、多业务模块的注册和发现功能；</li><li>统一认证：统一Oauth2认证协议，采用jwt的方式，实现统一认证，并支持自定义grant_type实现手机号码登录，第三方登录集成JustAuth实现微信、支付宝等多种登录模式；</li><li>业务监控：利用Spring Boot Admin来监控各个独立Service的运行状态。</li><li>内部调用：集成了Feign模式支持内部调用，并且可以实现无缝切换，适合新老程序员，快速熟悉项目；</li><li>身份注入：通过注解的方式，实现用户登录信息的快速注入；</li><li>在线文档：通过接入springdoc，实现在线API文档的查看与调试;</li><li>代码生成：基于jpa-generator自动生成代码，提升开发效率，生成模式不断优化中，暂不支持前端代码生成；</li><li>消息中心：集成消息中间件RocketMQ和RabbitMQ，对业务进行异步处理;</li><li>业务分离：采用前后端分离的框架设计，前端采用vue3、antd</li><li>链路追踪：自定义traceId的方式，实现简单的链路追踪功能</li><li>多租户功能：集成spring data jpa，实现SAAS多租户功能</li></ul><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1><h2 id="模块说明" tabindex="-1">模块说明 <a class="header-anchor" href="#模块说明" aria-label="Permalink to &quot;模块说明&quot;">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.Fancy</span></span>
<span class="line"><span style="color:#A6ACCD;">├── fancy-base -- 平台服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-admin -- 监控服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-authorization -- 验证服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-config -- 配置服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-eureka -- 注册服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-gateway -- 网关服务</span></span>
<span class="line"><span style="color:#A6ACCD;">├── fancy-custom -- 自定义服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-demo -- 示例服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-poratl -- 门户服务</span></span>
<span class="line"><span style="color:#A6ACCD;">├── fancy-platform -- 平台服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-flink -- 数据分析服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-component -- 组件服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-datav -- 数据大屏服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-member -- 会员服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-online -- 在线表单</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-page -- 页面服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-pay -- 支付服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-process -- 流程服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-system -- 系统服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-tenant -- 租户服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-websocket -- websocket服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-weixin -- 微信服务</span></span>
<span class="line"><span style="color:#A6ACCD;">└── fancy-plugin -- 插件服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-flyway -- 数据库版本管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-generator -- 代码生成</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-search -- 搜索引擎</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fancy-xxljob -- 定时任务</span></span>
<span class="line"><span style="color:#A6ACCD;">└── └── fancy-xxljob-executor -- 定时任务执行器</span></span></code></pre></div><h2 id="技术选型" tabindex="-1">技术选型 <a class="header-anchor" href="#技术选型" aria-label="Permalink to &quot;技术选型&quot;">​</a></h2><table><thead><tr><th>技术</th><th>说明</th><th>官网</th></tr></thead><tbody><tr><td>Spring Cloud</td><td>微服务框架</td><td><a href="https://spring.io/projects/spring-cloud" target="_blank" rel="noreferrer">https://spring.io/projects/spring-cloud</a></td></tr><tr><td>Spring Boot</td><td>容器+MVC框架</td><td><a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer">https://spring.io/projects/spring-boot</a></td></tr><tr><td>Spring Security Oauth2</td><td>认证和授权框架</td><td><a href="https://spring.io/projects/spring-security-oauth" target="_blank" rel="noreferrer">https://spring.io/projects/spring-security-oauth</a></td></tr><tr><td>Swagger</td><td>文档生产工具</td><td><a href="https://github.com/swagger-api/swagger-ui" target="_blank" rel="noreferrer">https://github.com/swagger-api/swagger-ui</a></td></tr><tr><td>Elasticsearch</td><td>搜索引擎</td><td><a href="https://github.com/elastic/elasticsearch" target="_blank" rel="noreferrer">https://github.com/elastic/elasticsearch</a></td></tr><tr><td>RocketMq</td><td>消息队列</td><td><a href="https://github.com/apache/rocketmq" target="_blank" rel="noreferrer">https://github.com/apache/rocketmq</a></td></tr><tr><td>Redis</td><td>分布式缓存</td><td><a href="https://redis.io/" target="_blank" rel="noreferrer">https://redis.io/</a></td></tr><tr><td>Docker</td><td>应用容器引擎</td><td><a href="https://www.docker.com/" target="_blank" rel="noreferrer">https://www.docker.com/</a></td></tr><tr><td>OSS</td><td>对象存储</td><td><a href="https://github.com/aliyun/aliyun-oss-java-sdk" target="_blank" rel="noreferrer">https://github.com/aliyun/aliyun-oss-java-sdk</a></td></tr><tr><td>JWT</td><td>JWT登录支持</td><td><a href="https://github.com/jwtk/jjwt" target="_blank" rel="noreferrer">https://github.com/jwtk/jjwt</a></td></tr><tr><td>LogStash</td><td>日志收集</td><td><a href="https://github.com/logstash/logstash-logback-encoder" target="_blank" rel="noreferrer">https://github.com/logstash/logstash-logback-encoder</a></td></tr><tr><td>Lombok</td><td>简化对象封装工具</td><td><a href="https://github.com/rzwitserloot/lombok" target="_blank" rel="noreferrer">https://github.com/rzwitserloot/lombok</a></td></tr><tr><td>Seata</td><td>全局事务管理框架</td><td><a href="https://github.com/seata/seata" target="_blank" rel="noreferrer">https://github.com/seata/seata</a></td></tr><tr><td>Portainer</td><td>可视化Docker容器管理</td><td><a href="https://github.com/portainer/portainer" target="_blank" rel="noreferrer">https://github.com/portainer/portainer</a></td></tr><tr><td>Gitlab CICD</td><td>自动化部署工具</td><td><a href="https://about.gitlab.com/" target="_blank" rel="noreferrer">https://about.gitlab.com/</a></td></tr><tr><td>Nginx</td><td>反向代理web服务器</td><td><a href="http://nginx.org/" target="_blank" rel="noreferrer">http://nginx.org/</a></td></tr></tbody></table><table><thead><tr><th>技术</th><th>说明</th><th>官网</th></tr></thead><tbody><tr><td>Vue</td><td>前端框架</td><td><a href="https://vuejs.org/" target="_blank" rel="noreferrer">https://vuejs.org/</a></td></tr><tr><td>Vue-router</td><td>路由框架</td><td><a href="https://router.vuejs.org/" target="_blank" rel="noreferrer">https://router.vuejs.org/</a></td></tr><tr><td>Vuex</td><td>全局状态管理框架</td><td><a href="https://vuex.vuejs.org/" target="_blank" rel="noreferrer">https://vuex.vuejs.org/</a></td></tr><tr><td>Ant design</td><td>前端UI框架</td><td><a href="https://www.antdv.com/" target="_blank" rel="noreferrer">https://www.antdv.com/</a></td></tr><tr><td>Vben Admin</td><td>一个开箱即用的前端框架</td><td><a href="https://vvbin.cn/doc-next/" target="_blank" rel="noreferrer">https://vvbin.cn/doc-next/</a></td></tr><tr><td>Axios</td><td>前端HTTP框架</td><td><a href="https://github.com/axios/axios/" target="_blank" rel="noreferrer">https://github.com/axios/axios/</a></td></tr><tr><td>v-charts</td><td>基于Echarts的图表框架</td><td><a href="https://v-charts.js.org/" target="_blank" rel="noreferrer">https://v-charts.js.org/</a></td></tr></tbody></table><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><p>本文主要以图文的形式讲解项目所需环境在windows/mac下的安装，主要包括IDEA、Docker安装。 项目java环境基于JDK17或以上，插件Lombok；</p><p>1、创建项目fancy-cloud目录；创建pom.xml文件，文件内容如下</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">project</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">xsi</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2001/XMLSchema-instance</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://maven.apache.org/POM/4.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">         </span><span style="color:#C792EA;">xsi</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">schemaLocation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">modelVersion</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">4.0.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">modelVersion</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.junyue.fancy</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">fancy</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2022.06.01-SNAPSHOT</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">fancy</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">packaging</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">pom</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">packaging</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">fancy</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">java.version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">17</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">java.version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">maven.compiler.source</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${java.version}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">maven.compiler.source</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">maven.compiler.target</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${java.version}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">maven.compiler.target</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">project.build.sourceEncoding</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">UTF-8</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">project.build.sourceEncoding</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">project.reporting.outputEncoding</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">UTF-8</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">project.reporting.outputEncoding</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">fancy</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">licenses</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">license</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">The Apache Software License, Version 2.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">https://www.apache.org/licenses/LICENSE-2.0.txt</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">license</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">licenses</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">developers</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">developer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">fengyp</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">email</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">fengyp8963@hotmail.com</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">email</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">organizationUrl</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">https://gitlab.junyue.com/</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">organizationUrl</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">https://gitlab.junyue.com/</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">developer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">developers</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">java.version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">17</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">java.version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">project</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>2、拉取代码</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/fengyp8963/fancy.git</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/fengyp8963/fancy-config.git</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/fengyp8963/fancy-vue-admin.git</span></span></code></pre></div><p>3、将项目下载到本地，打开项目，启动服务如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FancyConfigApplication 配置中心服务 先启动</span></span>
<span class="line"><span style="color:#A6ACCD;">FancyEurekaApplication 注册中心服务 先启动</span></span>
<span class="line"><span style="color:#A6ACCD;">FancyAuthorizationApplication 验证服务</span></span>
<span class="line"><span style="color:#A6ACCD;">FancyComponentApplication 组件服务</span></span>
<span class="line"><span style="color:#A6ACCD;">FancyGatewayApplication 网关服务</span></span>
<span class="line"><span style="color:#A6ACCD;">FancyMemberApplication 会员服务</span></span>
<span class="line"><span style="color:#A6ACCD;">FancySystemApplication 系统服务</span></span>
<span class="line"><span style="color:#A6ACCD;">FancyTenantApplication 租户服务</span></span></code></pre></div>`,24),c=[r];function y(i,D,F,d,C,g){return a(),n("div",null,c)}const u=s(e,[["render",y]]);export{h as __pageData,u as default};

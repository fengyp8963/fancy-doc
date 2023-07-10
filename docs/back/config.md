# 配置

::: tip 提示
`fancy-config`配置中心服务，系统所有服务都通过它进行配置，`fancy-common-*.yml`为公共配置文件；配置文件分为：
`dev`、`test`、`prod` 四个环境。
:::

## Host文件

### 安装SwitchHosts

### 环境地址配置

#### Default Hosts

```text
#fancy项目
#redis
127.0.0.1 outside-agent-redis
#mysql
127.0.0.1 outside-agent-mysql
#logstashs
127.0.0.1 outside-agent-elk
#elasticsearch
127.0.0.1 outside-agent-elk
#rabbitmq
127.0.0.1 outside-agent-rabbitmq
#seate
127.0.0.1 outside-agent-seata-server
```

#### Dev Hosts

```text
#fancy项目
#redis
127.0.0.1 outside-agent-redis
#mysql
127.0.0.1 outside-agent-mysql
#logstashs
127.0.0.1 outside-agent-elk
#elasticsearch
127.0.0.1 outside-agent-elk
#rabbitmq
127.0.0.1 outside-agent-rabbitmq
#seate
127.0.0.1 outside-agent-seata-server
```

#### Test Hosts

```text
#fancy项目
#redis
127.0.0.1 outside-agent-redis
#mysql
127.0.0.1 outside-agent-mysql
#logstashs
127.0.0.1 outside-agent-elk
#elasticsearch
127.0.0.1 outside-agent-elk
#rabbitmq
127.0.0.1 outside-agent-rabbitmq
#seate
127.0.0.1 outside-agent-seata-server
```

## 项目配置

### 各环境配置示图

### local.yml示例

```yml
spring:
  redis:
    host: outside-agent-redis
    password: ${fancy.password}
  data:
    elasticsearch:
      repositories:
        enabled: true
  elasticsearch:
    rest:
      uris: outside-agent-elk:9200
      username: ${fancy.username}
      password: ${fancy.password}
  logger:
    enabled: true
    driver-class-name: ${fancy.datasource.default.driver-class-name}
    jdbc-url: ${fancy.datasource.default.url}
    username: ${fancy.datasource.default.username}
    password: ${fancy.datasource.default.password}
fancy:
  host: localhost
  username: ******
  password: ******
  datasource:
    default:
      url: jdbc:mysql://outside-agent-mysql:3306/fancy?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai
      driver-class-name: com.mysql.cj.jdbc.Driver
      username: ${fancy.username}
      password: ${fancy.password}
  login:
    single: true
    cache: true
    tenant: true
  uid:
    type: HU_TOOL
  social:
    vue:
      url: http://${fancy.host}:3100
  log:
    enabled: true
    log-save-types:
      - DB

```

## 存储配置

`fancy-component` 组件服务加入以下配置：

```yaml
fancy:
  oss:
    endpoint: oss-cn-shenzhen.aliyuncs.com #对象存储服务的URL
    custom-domain: #自定义域名
    path-style-access: true #反向代理和S3默认支持
    enabled: false #是否启用
    endpoints-web-enabled: false #是否暴露web端口
    region: shenzhen #区域
    access-key-id: Access-key-Id #Access key Id 就像用户ID，可以唯一标识你的账户
    access-key-secret: Access-key-Secret  #Access key Secret 是你账户的密码
    bucket-name: fancy #默认的存储桶名称
```

## 短信配置

`fancy-component` 组件服务加入以下配置：

```yaml
spring:
  jackieonway:
    sms:
      sms-type: ali #可以不填，默认是ali
      security-key: security-key # 短信的私钥
      appid: appid # 短信的应用id
      limit:
        enable: true # 允许限制 默认: false
        limit-time: 60000 # 一次请求限制1分钟 默认: 一分钟
```
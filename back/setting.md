# 配置

::: tip 提示
`serein-cloud-config`配置中心服务，系统所有服务都通过它进行配置，`serien-cloud-common-*.yml`为公共配置文件；配置文件分为：
`local`、`dev`、`test`、`prod` 四个环境。
:::

## 项目配置

![img.png](/back/images/setting-001.png)

## 存储配置

`serein-cloud-component` 组件服务加入以下配置：

```yml
serein:
  oss:
    enabled: true
```

## 短信配置

`serein-cloud-component` 组件服务加入以下配置：

```yml
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

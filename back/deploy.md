# 部署

::: info 简介
gitlab + gitlab-runner + docker 实现项目的自动化部署测试环境与打包
:::

## 容器化

### Linux环境配置

::: tip 提示
系统基于`CentOS 7`以上
:::

- 安装 `docker、docker-compose` [官网安装地址](https://docs.docker.com/engine/install/centos/)
- docker 安装教程

```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
 sudo yum install -y yum-utils
 sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
 sudo yum install docker-ce docker-ce-cli containerd.io
 sudo systemctl start docker
 sudo docker run hello-world
```

- docker-compose 安装教程

```shell
 sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
 sudo chmod +x /usr/local/bin/docker-compose
 sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
 docker-compose --version
```

- 容器所需`hub.vipklm.com/serein/adoptopenjdk/openjdk11/libreoffice`镜像
```shell
docker pull hub.vipklm.com/serein/adoptopenjdk/openjdk11/libreoffice
```

- 启动系统所需要的服务
  - 创建serein和docker-compose.yml文件
  - docker-compose.yml文件内容

```shell
mkdir ~/serein && touch docker-compose.yml
vi ~/serein/docker-compose.yml
```

```yaml
version: "3.6"

services:
  nginx:
    image: nginx:latest
    container_name: serein-nginx
    restart: always 
    volumes:
      - ./nginx/log:/var/log/nginx
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl/certs:/srv/nginx/etc/ssl/certs:ro
      - ./nginx/html:/etc/nginx/html
      - ./nginx/mysite.template:/etc/nginx/conf.d/mysite.template
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - portainer
      - registry
    networks:
      - app_serein_net
    environment:
      - TZ=Asia/Shanghai
    command: /bin/bash -c "envsubst < /etc/nginx/conf.d/mysite.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"  
  gitlab-runner:
    image: hub.vipklm.com/serein/gitlab-runner
    container_name: serein-gitlab-runner
    restart: always 
    networks:
      - app_serein_net
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - ./gitlab-runner/settings.xml:/usr/local/bin/maven/conf/settings.xml
      - ./gitlab-runner/sonar-scanner.properties:/usr/local/bin/sonar-scanner/conf/sonar-scanner.properties
      - ./gitlab-runner:/etc/gitlab-runner
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker
      - /usr/bin/docker-compose:/usr/bin/docker-compose
  portainer:
    image: portainer/portainer:latest
    container_name: serein-portainer
    restart: always 
    command: -H unix:///var/run/docker.sock
    environment:
      - TZ=Asia/Shanghai
    networks:
      - app_serein_net
    ports:
      - 8959:9000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./portainer/data:/data
  registry:
    image: registry:latest
    container_name: serein-registry
    restart: always
    environment:
      - TZ=Asia/Shanghai
    networks:
      - app_serein_net
    ports:
      - 5000:5000
    volumes:
      - ./registry/data:/var/lib/registry
  mysql:
    image: mysql:latest
    container_name: serein-mysql
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_HOST: '%'
      MYSQL_ROOT_PASSWORD: serein@2021
      MYSQL_DATABASE: serein
      MYSQL_USER: serein
      MYSQL_PASSWORD: serein@2021
    networks:
      - app_serein_net
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_0900_ai_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    ports:
      - 3306:3306
    volumes:
      - ./mysql/db:/var/lib/mysql
      - ./mysql/init:/docker-entrypoint-initdb.d/
      - ./mysql/sql_backup:/backup
      - ./mysql/conf/my.cnf:/etc/mysql/conf.d/mysqld.cnf 
  redis:
    image: redis:latest
    container_name: serein-redis
    restart: always
    ports:
      - 6379:6379
    networks:
      - app_serein_net
    volumes:
      - ./redis/redis.conf:/etc/redis/redis.conf:rw
      - ./redis/data:/data:rw
    command:
      redis-server /etc/redis/redis.conf --appendonly yes
# docker network create app_serein_net
networks:
  app_serein_net:
    external: true
```

- 查看系统核心服务是否启动
```shell
docker-compose ps
```
![img.png](/back/images/deploy-001.png)


### Oss存储配置

- 阿里云申请开通 Oss存储：详细参考官方文档

- 配置文件配置 `serein-cloud-component` 组件服务加入以下配置

```yaml
serein:
  oss:
    endpoint: oss-cn-shenzhen.aliyuncs.com #对象存储服务的URL
    custom-domain: #自定义域名
    path-style-access: true #反向代理和S3默认支持
    enabled: false #是否启用
    endpoints-web-enabled: false #是否暴露web端口
    region: shenzhen #区域
    access-key-id: Access-key-Id #Access key Id 就像用户ID，可以唯一标识你的账户
    access-key-secret: Access-key-Secret  #Access key Secret 是你账户的密码
    bucket-name: serein-cloud #默认的存储桶名称
```

### 域名证书配置

- 阿里云申请开通 域名和域名证书：详细参考官方文档
- 需要申请的域名

```text
admin.serein.vipklm.com #监控服务
eureka.serein.vipklm.com #注册中心服务
portainer.vipklm.com #容器服务
serein.vipklm.com #系统服务
xxljob.serein.vipklm.com #定时任务服务
```

## 非容器

::: tip 提示
略......
:::
# 部署

::: info 简介
gitlab + gitlab-runner + docker 实现项目的自动化部署测试环境与打包
:::

## 容器化

### 挂载数据硬盘

::: tip 提示
系统基于`阿里云`服务器
:::

__第一步__

- 1、找到 待挂载 云盘，在 操作 列中，选择 更多 > 挂载，刷新云盘列表，如果是使用中，表示挂载服务器成功
- 2、检查阿里云服务器数据盘情况，这里我们可以看到数据盘有没有挂载

```shell
$ fdisk -l
```

![img.png](/back/images/deploy-002.png)

__第二步__

- 1、挂载阿里云数据硬盘。输入"fdisk /dev/vdb"，然后根据下图的提示，输入n，p，1，回车，回车，wq，保存退出。

![img.png](/back/images/deploy-003.png)

- 2、格式化分区

![img.png](/back/images/deploy-004.png)

__第三步__

- 1、挂载数据盘，这里选择挂载到root下面

```shell
mount /dev/vdb1 /root/
```

![img.png](/back/images/deploy-005.png)

__第三步__

- 1、使其重启永久生效

```shell
echo '/dev/vdb1  /root ext4    defaults    0  0' >> /etc/fstab
```

![img_1.png](/back/images/deploy-006.png)

### Docker安装部署

::: tip 提示
系统基于`CentOS 7`以上 <br />
docker安装脚本 install.sh  <br />
安装地址 [官网安装地址](https://docs.docker.com/engine/install/centos/)
:::

- 安装`install.sh`脚本内容如下：

```shell
#!/bin/bash

# docker安装脚本
# 安装地址：https://docs.docker.com/engine/install/centos/

# 1. 移除旧版本docker
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# 2. 安装相关软件
sudo yum install -y yum-utils \
                    device-mapper-persistent-data \
                    lvm2 \
                    vim \
                    wget \
                    epel-release

# 3. 安装相关源
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# 4. 缓存生效
sudo yum makecache fast

# 5. 安装Docker Docker compose 插件
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 6. 启动docker,加入开机启动
sudo systemctl start docker
sudo systemctl enable docker
```

__第一步__

- 1、进入/root/fancy目录。上传install.sh文件，acme.sh、runner目录 到服务器上。输入"ls";

![img.png](/back/images/deploy-007.png)

__第二步__

- 1，执行install.sh脚本，输入`./install.sh`， 执行完成输入`docker version | docker compose --version`;

![img.png](/back/images/deploy-008.png)

- 2、进入acme.sh目录，执行完成输入`docker compose up -d`，启动acme证书服务；

![img.png](/back/images/deploy-009.png)
![img.png](/back/images/deploy-010.png)

__第三步__
1，进入runner目录，执行完成输入`docker compose up -d`，启动runner 相关服务；

![img.png](/back/images/deploy-011.png)

如果提示：network app_fancy_net declared as external, but could not be found
执行"docker network create app_fancy_net"创建docker网卡，"docker compose up -d"；

![img.png](/back/images/deploy-012.png)

2，拉取镜像输入`docker pull hub.fancy8963.com/fancy/libreoffice:latest`；

![img.png](/back/images/deploy-013.png)

3，查询镜像列表，执行完成输入"docker images"；

![img.png](/back/images/deploy-014.png)

- 启动系统所需要的服务

```shell
cd ~/fancy/runner
docker compose ps
```

![img.png](/back/images/deploy-015.png)

__第四步__

- 迁移 /var/lib/docker 目录

```shell
#1.1 停止docker服务。
systemctl stop docker
# 1.2 创建新的docker目录，执行命令df -h,找一个大的磁盘。 我在 /root目录下面建了 /root/docker/lib目录，执行的命令是：
mkdir -p /root/docker/lib
# 1.3 迁移/var/lib/docker目录下面的文件到 /root/docker/lib：
rsync -avz /var/lib/docker /root/docker/lib/
# 1.4 配置 /etc/systemd/system/docker.service.d/devicemapper.conf。查看 devicemapper.conf 是否存在。如果不存在，就新建。
sudo mkdir -p /etc/systemd/system/docker.service.d/
sudo vi /etc/systemd/system/docker.service.d/devicemapper.conf
# 1.5 然后在 devicemapper.conf 写入：(同步的时候把父文件夹一并同步过来，实际上的目录应在 /root/docker/lib/docker )
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd --graph=/root/docker/lib/docker
# 1.6 重新加载 docker
systemctl daemon-reload
systemctl restart docker
systemctl enable docker
# 1.7 删除 /var/lib/docker
rm -rf /var/lib/docker
```

如图：已经挂载到/root/docker/lib目录

![img.png](/back/images/deploy-015.png)

### Nginx证书配置

- 第1步：进入 /root/fancy/acme.sh 目录生成证书；

```shell
docker compose up -d
docker compose exec acme.sh --set-default-ca --server letsencrypt
docker compose exec acme.sh --issue --dns dns_ali -d fancy8963.com -d *.fancy8963.com
## 创建证书路径
mkdir -p ./nginx/ssl/fancy8963.com
#运行下面命令，在上面的位置存入证书
#请一定使用以上语法acme.sh --install-cert进行拷贝，这样证书才能保证在新的位置也能自动更新
docker compose exec acme.sh --install-cert -d fancy8963.com \
    --key-file /etc/nginx/ssl/fancy8963.com/key.pem \
    --fullchain-file /etc/nginx/ssl/fancy8963.com/fullchain.pem # --reloadcmd "service nginx force-reload"
```

### Gitlab-runner的配置

- 第1步：查询gitlab 上gitlab-runner token；记录token信息
  ![img.png](/back/images/deploy-016.png)
  修改gitlab-runner 中register.sh文件
  ![img.png](/back/images/deploy-017.png)
- 第2步：进入gitlab-runner容器，执行执行gitlab-runner注册命令
  ![img.png](/back/images/deploy-018.png)
  ![img.png](/back/images/deploy-019.png)
- 第3步：进入gitlab-runner容器，执行su – gitlab-runner命令，查询启动的容器镜像
  ![img.png](/back/images/deploy-020.png)
  如果出现没有权限安下图进行相应操作
  ![img.png](/back/images/deploy-021.png)
- 第4步：进入gitlab-runner容器，执行update.sh 升级node版本
  ![img.png](/back/images/deploy-022.png)

### 域名证书配置

- 阿里云申请开通 域名和域名证书：详细参考官方文档
- 需要申请的域名

```text
admin.fancy8963.com #监控服务
eureka.fancy8963.com #注册中心服务
portainer.fancy8963.com #容器服务
api.fancy8963.com #系统服务
xxljob.fancy8963.com #定时任务服务
```

## 非容器

::: tip 提示
略......
:::
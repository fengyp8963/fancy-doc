FROM nginx:latest
# 维护者信息
MAINTAINER fengyp
# 添加上下文目录下的内容 到容器里 自动解压
ADD .vitepress/dist/fancy-doc.tar.gz /etc/nginx/html
# 复制上下文目录下的内容 到容器里
COPY docker/app/nginx.conf /etc/nginx
# 指定时区
ENV TZ='Asia/Shanghai'
# 声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务
EXPOSE 80

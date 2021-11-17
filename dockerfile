FROM ubuntu:18.04

# 指定用户
USER root

# 指定工作目录
WORKDIR /exam-online/

# 安装ubuntu基础环境
RUN apt-get update

# 拷入前端项目代码
COPY ./* /exam-online/

# 安装npm
RUN apt-get -y install npm

# 安装依赖
RUN npm install | bash

# 容器执行时运行构建并运行项目
CMD ["bash", "-c", "npm run serve"]


# Nginx

Nginx是一个 轻量级/高性能的反向代理`Web服务器`，他实现非常高效的`反向代理`、`负载平衡`，他可以处理2-3万`并发连接`数，官方监测能支持5万并发.

>用到的配置
client_max_body_size 50m; #设置上传文件大小
proxy_connect_timeout 600; #设置连接超时时间
proxy_send_timeout 600; #设置发送超时时间
proxy_read_timeout 600; #设置接收超时时间
proxy_buffer_size 128k; #设置缓冲区大小
proxy_buffers 4 256k; #设置缓冲区个数
proxy_busy_buffers_size 256k; #设置缓冲区大小
proxy_temp_file_write_size 256k; #设置缓冲区大小

gzip on; #开启gzip压缩
gzip_min_length 1k; #设置压缩文件最小值

## 配置

1. 全局块
    全局块是默认配置文件从开始到events块之间的一部分内容，主要设置一些影响Nginx服务器整体运行的配置指令，因此，这些指令的作用域是Nginx服务器全局
2. events块
    events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等。
    这一部分的指令对Nginx服务器的性能影响较大，在实际配置中应该根据实际情况灵活调整。
3. http块
    `http块`是Nginx服务器的核心模块，主要用来配置Nginx服务器的虚拟主机，以及一些全局的配置指令，如日志格式、MIME类型、连接超时时间等。
    http块中的指令可以分为两类，一类是全局指令，作用域是Nginx服务器的全局，一类是`server块`中的指令，作用域是Nginx服务器的虚拟主机。
4. `server块`
    `server块`是http块的子块，用来配置Nginx服务器的虚拟主机，每个虚拟主机可以配置多个`server块`，每个`server块`可以配置多个location块，每个location块可以配置多个location块，这样就形成了一个层级的结构，这个结构就是Nginx服务器的配置文件的基本结构。
    `server块`中的指令可以分为两类，一类是全局指令，作用域是Nginx服务器的全局，一类是location块中的指令，作用域是Nginx服务器的虚拟主机。
5. location块
    location块是`server块`的子块，用来配置Nginx服务器的虚拟主机，每个虚拟主机可以配置多个`server块`，每个`server块`可以配置多个location块，每个location块可以配置多个location块，这样就形成了一个层级的结构，这个结构就是Nginx服务器的配置文件的基本结构。
    location块中的指令可以分为两类，一类是全局指令，作用域是Nginx服务器的全局，一类是location块中的指令，作用域是Nginx服务器的虚拟主机。

## 语法

Nginx配置文件的语法是由指令和指令参数组成的，指令和指令参数之间用分号分隔，指令参数之间用空格分隔，指令参数可以用双引号或单引号括起来，也可以不用引号括起来，但是如果参数中包含空格，必须用引号括起来。

## 指令

Nginx配置文件中的指令可以分为两类，一类是全局指令，作用域是Nginx服务器的全局，一类是`server块`中的指令，作用域是Nginx服务器的虚拟主机。

## 处理请求

nginx接收一个请求后，首先由listen和server_name指令匹配server模块，再匹配server模块里的location，location就是实际地址

```s
    server {  # 第一个Server区块开始，表示一个独立的虚拟主机站点
        listen       80；                # 提供服务的端口，默认80
        server_name  localhost；      # 提供服务的域名主机名
        location / {                     # 第一个location区块开始
            root   html；         # 站点的根目录，相当于Nginx的安装目录
            index  index.html index.htm；     # 默认的首页文件，多个用空格分开
        }              # 第一个location区块结果
    }           
```

## 使用History模式路由时Nginx的配置方案

> 使用try_files $uri $uri/ /index.html;来解决

```s
    server {
        listen 80;
        server_name localhost;
        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
    }
```

1. vue-router 默认路由模式为 hash 模式，该模式是使用 url 的 hash 来模拟一个完整的 url。但使用这种模式，URL 中会带一个 # 号（比如 <http://127.0.0.1:9090/#/about>），比较丑，不像是正常的 url。
2. 除了默认的 hash 模式外，我们也可以用路由的 history 模式。 当我们使用 history 模式时，URL 就像正常的 url 了，例如 <http://127.0.0.1:9090/about>。不过要使用这种模式，还需要后台服务端的支持。

> 因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 <http://127.0.0.1:9090/about> 时，服务端以为没有找到对应文件，就会返回 404 错误。
因此我们要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是我们 app 依赖的页面。

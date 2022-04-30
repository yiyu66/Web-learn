# Cookie

HTTP Cookie（也叫 Web Cookie或浏览器 Cookie）**是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上**。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。

## 创建

当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 Set-Cookie 选项。浏览器收到响应后通常会保存下 Cookie，之后对该服务器每一次请求中都通过  Cookie 请求头部将 Cookie 信息发送给服务器。另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。

`Set-Cookie: <cookie名>=<cookie值>`

## 属性

下图是Chrome浏览器中的Cookie截图，属性分别有**Name、Value、Domain、Path、Expires/Max-age、Size、HttpOnly、Secure、SameSite和Priority。**
![image](https://img-blog.csdnimg.cn/20200805102311919.png)

### Name 和 Value

Name和Value是一个键值对。Name是Cookie的名称，Cookie一旦创建，名称便不可更改，一般名称不区分大小写；Value是该名称对应的Cookie的值，如果值为Unicode字符，需要为字符编码。如果值为二进制数据，则需要使用BASE64编码。

### Domain

Domain 指定了哪些主机可以接受 Cookie。如果不指定，默认为 origin，不包含子域名。如果指定了Domain，则一般包含子域名。因此，指定 Domain 比省略它的限制要少。但是，当子域需要共享有关用户的信息时，这可能会有所帮助。

例如，如果设置 Domain=mozilla.org，则 Cookie 也包含在子域名中（如developer.mozilla.org）。

### Path 属性

Path 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 %x2F ("/") 作为路径分隔符，子路径也会被匹配。

例如，设置 Path=/docs，则以下地址都会匹配：

/docs
/docs/Web/
/docs/Web/HTTP

### Expires/Max-age

过期时间（Expires）或有效期（Max-Age）如果没有设置，默认是 Session，即会话期间有效。所谓的「会话期间」是指当客户端被关闭时，cookie 就会被移除。但是一定要注意，这个不是严格意义上的浏览器关了，Cookie 就没了，因为：很多 Web 浏览器支持会话恢复功能，用户重新打开浏览器的时候 cookie 也会恢复。
`Expires` 用于指定具体的过期时间
`Max-Age` 则以秒为单位设置多少秒之后过期

### size

Szie是此Cookie的大小。**最大4K**,在所有浏览器中，任何cookie大小超过限制都被忽略，且永远不会被设置。各个浏览器对Cookie的最大值和最大数目有不同的限制，整理为下表(数据来源网络，未测试)：

浏览器 Cookie最大条数 Cookie最大长度/单位：字节
IE 50 4095
Chrome 150 4096
FireFox 50 4097
Opera 30 4096
Safari 无限 4097

### HttpOnly

HttpOnly值为 true 或 false,若设置为true，则不允许通过脚本document.cookie去更改这个值，同样这个值在document.cookie中也不可见，但在发送请求时依旧会携带此Cookie。

### Secure

Secure为Cookie的安全属性，若设置为true，则浏览器只会在**HTTPS和SSL**等安全协议中传输此Cookie，不会在不安全的HTTP协议中传输此Cookie。
> Chrome 90 在http下 可以接收带 Secure 的 set-cookie 了，以前不行。

### SameSite

在 HTTP 响应头中，通过 set-cookie 字段设置 Cookie 时，可以带上 SameSite 选项。
SameSite 选项通常有 `Strict`、`Lax`和 `None` 三个值。

* Strict 最为严格。如果 SameSite 的值是 Strict，那么浏览器会完全禁止第三方 Cookie。简言之，如果你从极客时间的页面中访问 InfoQ 的资源，而 InfoQ 的某些 Cookie 设置了 SameSite = Strict 的话，那么这些 Cookie 是不会被发送到 InfoQ 的服务器上的。只有你从 InfoQ 的站点去请求 InfoQ 的资源时，才会带上这些 Cookie。
* Lax：默认值。除了下面三种情况外，不发送第三方 Cookie

```HTML
链接：<a href="..."></a>
预加载请求：<link rel="prerender" href="..."/>
GET 表单：<form method="GET" action="...">
```

* 而如果使用 None 的话，在任何情况下都会发送 Cookie 数据。
Priority
优先级，chrome的提案，定义了三种优先级，Low/Medium/High，当cookie数量超出时，低优先级的cookie会被优先清除。
在360极速浏览器和FireFox中，不存在Priority属性，不清楚在此类浏览器中设置该属性后是否生效。

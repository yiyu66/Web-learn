# HTTP请求报文和HTTP响应报文

> 请求方法字段、URL字段和HTTP协议版本
    Accept
    Accept-Language
    Accept-Encoding
    User-Agent
    Host
    Connection
    Cookie

## HTTP请求报文

一个HTTP请求报文由
请求行（request line）、
请求头部（header）、
空行和请求数据4个部分

User-Agent：产生请求的浏览器类型。

Accept：客户端可识别的内容类型列表。

Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。

## 响应报文

状态行、消息报头、响应正文。

```js
HTTP/1.1 200 OK
Date: Sat, 31 Dec 2005 23:59:59 GMT
Content-Type: text/html;charset=ISO-8859-1
Content-Length: 122

＜html＞
＜head＞
＜title＞Wrox Homepage＜/title＞
＜/head＞
＜body＞
＜!-- body goes here --＞
＜/body＞
＜/html＞
```

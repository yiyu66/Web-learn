# ajax

## Ajax 状态和 HTTP 状态码

Ajax 状态一共有 5 种 xhr.readyState，分别是 0, 1, 2, 3, 4
状态 0：unsent，刚创建的 XMLHttpRequest 实例，还没有发送。
状态 1：（载入）已调用 send() 方法，正在发送请求。
状态 2：（载入完成）send() 方法执行完成，已经接收到全部响应内容
状态 3：loading，（交互）正在解析响应内容
状态 4：done，表示响应的主体内容解析完成，可以在客户端调用了

## ajax 中常用的属性和方法

onabort: 表示请求中断后要处理的事。和 xhr.abort() 一起使用。
ontimeout: 表示请求的超时，执行的方法。和timeout设定的事件一起使用。
response: 响应的主体内容。
responseText: 响应的具体内容是字符串，一般是 json 字符串
responseXML: 响应的具体内容是文档。
status: http 的状态码。
statusText: 状态码描述
withCredentials：表示是否允许跨域。
getAllResponseHeaders：获取所有响应头信息。
xhr.open()：打开URL请求。
xhr.send()：表示发送 ajax。
setRequestHeader(): 设置请求头。这个属性在必须在xhr.open()后面。


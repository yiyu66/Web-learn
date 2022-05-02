# WebSocket

WebSocket是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

## 特点

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。

## 方法和事件

Socket.send() 使用连接发送数据
Socket.close() 关闭连接

open Socket.onopen 连接建立时触发
message Socket.onmessage 客户端接收服务端数据时触发
error Socket.onerror 通信发生错误时触发
close Socket.onclose 连接关闭时触发

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```

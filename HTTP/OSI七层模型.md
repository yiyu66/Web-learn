# OSI七层模型协议

[参考链接](https://zhuanlan.zhihu.com/p/267136799)
OSI的七层协议主要包括： - 物理层（physical layer） - 数据链路层（data link layer） - 网络层（network layer） - 运输层（transport layer） - 会话层（session layer） - 表示层（presentation layer） - 应用层（application layer）

## 每一层的协议

物理层：RJ45、CLOCK、IEEE802.3（中继器、集线器）,ISO2110,光导纤维，双绞线
数据链路层：wi-fi, ATM, DTM,令牌环，以太网，PPPoE ,PPP、FR、HDLC、VLAN、MAC（网桥、交换机）
网络层：IP、ICMP、ARP、RARP、OSPF、IPX、RIP、IGRP（交换机）
传输层：TCP（T/TCP · Fast Open） UDP DCCP SCTP RSVP PPTP TLS/SSL
会话层：NFS、SQL、NETBIOS、RPC
表示层：JPEG、MPEG、ASII
应用层：DHCP（v6） DNS FTP Gopher HTTP（SPDY、HTTP/2） IMAP4 IRC NNTP XMPP POP3 SIP SMTP SNMP SSH TELNET RPC RTCP RTP RTSP SDP SOAP GTP STUN NTP SSDP

## 相关面试题

1. TCP和UDP的 区别：
    >TCP是面向有连接型，UDP是面向无连接型；
    TCP是一对一传输，UDP支持一对一、一对多、多对一和多对多的交互通信；
    TCP是面向字节流的，即把应用层传来的报文看成字节流，将字节流拆分成大小不等的数据块，并添加TCP首部；UDP是面向报文的，对应用层传下来的报文不拆分也不合并，仅添加UDP首部；
    TCP支持传输可靠性的多种措施，包括保证包的传输顺序、重发机制、流量控制和拥塞控制；UDP仅提供最基本的数据传输能力。

2. TCP对应的应用层协议有哪些？UDP对应的应用层协议有哪些？
    TCP对应的典型的应用层协议：
    FTP：文件传输协议；
    SSH：远程登录协议；
    HTTP：web服务器传输超文本到本地浏览器的超文本传输协议。

    UDP对应的典型的应用层协议：
    DNS：域名解析协议；
    TFTP：简单文件传输协议；
    SNMP：简单网络管理协议。

3. 常见的http动词有哪些？
    GET: 从服务器获取资源
    POST: 在服务器新建资源
    PUT: 在服务器更新资源
    DELETE: 在服务器删除资源
    HEAD: 获取资源的元数据
    OPTIONAL: 查询对指定的资源支持的方法
4. ping命令基于哪一层协议的原理是什么？
    ping命令是基于网络层的命令，是基于ICMP协议工作的

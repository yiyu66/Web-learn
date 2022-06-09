# 关于script和link对DOM的解析和渲染影响

`<script>`标签会阻塞DOM的解析和渲染；
带src属性的`<script>`标签会触发页面paint，渲染此`<script>`标签之前的元素，但也有一定的条件：

此`<script>`标签是在`<body>`中的，`<head>`中的不会触发paint；
此`<script>`标签之前的`<link>`标签需加载完毕。

inline的`<script>`标签不会触发页面paint，页面必须等到脚本执行完毕，且DOM Tree和CSSOM Tree解析完毕后才会渲染；
`<link>`标签不会阻塞DOM的解析；
`<link>`标签会阻塞DOM的渲染；
`<link>`标签同时还会阻塞其之后的`<script>`标签的执行。

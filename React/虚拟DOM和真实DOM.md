# Real DOM 和 Virtual DOM 的区别

## 概念

1. 真实 DOM，意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实 DOM 结构

2. Virtual Dom，本质上是以 JavaScript 对象形式存在的对 DOM 的描述

## 区别

* 虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘
* 虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘”

传统的原生 api 或 jQuery 去操作 DOM 时，浏览器会从构建 DOM 树开始从头到尾执行一遍流程

当你在一次操作时，需要更新 10 个 DOM 节点，浏览器没这么智能，收到第一个更新 DOM 请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程

而通过 VNode，同样更新 10 个 DOM 节点，虚拟 DOM 不会立即操作 DOM，而是将这 10 次更新的 diff 内容保存到本地的一个 js 对象中，最终将这个 js 对象一次性 attach 到 DOM 树上，避免大量的无谓计算

```js
// 创建 h1 标签，右边千万不能加引号
const vDom = <h1>Hello World</h1>; 
// 找到 <div id="root"></div> 节点
const root = document.getElementById("root"); 
// 把创建的 h1 标签渲染到 root 节点上
ReactDOM.render(vDom, root); 
```

>在 React 中，JSX可以让你在 JS 中通过使用 XML 的方式去直接声明界面的 DOM 结构,ReactDOM.render() 用于将你创建好的虚拟 DOM 节点插入到某个真实节点上，并渲染到页面上

## 虚拟DOM的优缺点

>实际上渲染速度没有什么是比原生API更快的，按照尤雨溪在文章中的观点，虚拟DOM的好处是在带来的跨平台，同时在渲染大量dom时带来过得去的性能。
可以从两个角度看：

1. 性能方面
    优点：使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流，提高性能。
    缺点：首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢

2. 跨平台
    一套代码多端运行

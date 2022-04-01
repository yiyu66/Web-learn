# commonJS和ESM的区别

CommonJS 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范 (例如: AMD)，用来对前端模块进行管理。自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。但目前浏览器对 ES6 Module 兼容还不太好，我们平时在 Webpack 中使用的 export 和 import，会经过 Babel 转换为 CommonJS 规范。在使用上的差别主要有：

1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

3. CommonJs 是单个值导出，ES6 Module可以导出多个

4. CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层

5. CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined

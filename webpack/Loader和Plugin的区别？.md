# Loader和Plugin的区别？

Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。
因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。

Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

## 有哪些常见的Loader

file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)

url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)

source-map-loader：加载额外的 Source Map 文件，以方便断点调试

image-loader：加载并且压缩图片文件

babel-loader：把 ES6 转换成 ES5

ts-loader: 将 TypeScript 转换成 JavaScript

sass-loader：将SCSS/SASS代码转换成CSS

css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS

eslint-loader：通过 ESLint 检查 JavaScript 代码

tslint-loader：通过 TSLint检查 TypeScript 代码

vue-loader：加载 Vue.js 单文件组件

## 有哪些常见的Plugin？

uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)
html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度

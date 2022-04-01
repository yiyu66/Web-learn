# Tree shaking

`Tree shaking` 是一种通过清除多余代码方式来优化项目打包体积的技术,也就是说 ，tree shaking 其实是找出使用的代码

Tree shaking是基于ES6模板语法（import与exports），主要是借助ES6模块的**静态编译**思想，在编译时就能确定模块的依赖关系，以及输入和输出的变量

它做了两件事

* 编译阶段利用`ES6 Module`判断哪些模块已经加载
* 判断那些模块和变量未被使用或者引用，进而删除对应代码

## 好处

减少程序体积（更小）
减少程序执行时间（更快）
便于将来对程序架构进行优化（更友好

## 原理

因为tree shaking只能在静态modules下工作。ECMAScript 6 模块加载是静态的,因此整个依赖树可以被静态地推导出解析语法树。所以在 ES6 中使用 tree shaking 是非常容易的。

Webpack 中，Tree-shaking 的实现一是先标记出模块导出值中哪些没有被用过，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：

1. Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中
2. Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用
3. 生成产物时，若变量没有被其它模块使用则删除对应的导出语句


> 标记功能需要配置 optimization.usedExports = true 开启


链接：https://juejin.cn/post/7002410645316436004


## webpack开启tree-shaking的配置

在 Webpack 中，启动 Tree Shaking 功能必须同时满足三个条件：

* 使用 ESM 规范编写模块代码
* webpack配置optimization.usedExports为true,启动标记功能。
* 启动代码优化功能，可以通过如下方式之一即可实现:

配置 mode = production
配置 optimization.minimize = true
提供 optimization.minimizer 数组

例如：

```JavaScript
// webpack.config.js
  module.exports = {
    entry: "./src/index",
    mode: "production",
    devtool: false,
    optimization: {
      usedExports: true,
    },
  };
```

链接：<https://juejin.cn/post/7039547628379439135>

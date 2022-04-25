# nextTick

[源码解析](https://juejin.cn/post/6844904147804749832)

## 是什么

>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

注意：Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新。
这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。

Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

## 为什么要有nexttick

举个例子

```js
{{num}}
for(let i=0; i<100000; i++){
    num = i
}
```

如果没有 nextTick 更新机制，那么 num 每次更新值都会触发视图更新(上面这段代码也就是会更新10万次视图)，有了nextTick机制，只需要更新一次，所以nextTick本质是一种优化策略

示例：

```js
// 修改数据
vm.message = '修改后的值'
// DOM 还没有更新
console.log(vm.$el.textContent) // 原始的值
Vue.nextTick(function () {
  // DOM 更新了
  console.log(vm.$el.textContent) // 修改后的值
})
// 组件内使用
this.message = '修改后的值'
console.log(this.$el.textContent) // => '原始的值'
this.$nextTick(function () {
    console.log(this.$el.textContent) // => '修改后的值'
})
```

`$nextTick()`会返回一个 `Promise` 对象，可以是用`async/await`完成相同作用的事情

```js
this.message = '修改后的值'
console.log(this.$el.textContent) // => '原始的值'
await this.$nextTick()
console.log(this.$el.textContent) // => '修改后的值'
```

## 源码解析

源码位置：`/src/core/util/next-tick.js`

`callbacks`也就是异步操作队列

`callbacks`新增回调函数后又执行了`timerFunc`函数，`pending`是用来标识同一个时间只能执行一次
timerFunc函数定义，这里是根据当前环境支持什么方法则确定调用哪个，分别有：

`Promise.then、MutationObserver、setImmediate、setTimeout`
通过这些方法对任务进行降级操作，前两个微任务，后两个宏任务

>MutationObserver是Html5的一个新特性，用来监听目标DOM结构是否改变，也就是代码中新建的textNode；如果改变了就执行MutationObserver构造函数中的回调函数，不过是它是在微任务中执行的。

无论是微任务还是宏任务，都会放到`flushCallbacks`使用,也就是刷新回调函数

这里将callbacks里面的函数复制一份，同时callbacks置空

依次执行callbacks里面的函数

可以看到源码里对兼容性考虑的比较全面，然后优先放到微任务里面执行
小结：

1. 把回调函数放入callbacks等待执行
2. 将执行函数放到微任务或者宏任务中
3. 事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调

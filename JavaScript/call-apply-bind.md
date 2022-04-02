# call-apply-bind

[参考文章](https://segmentfault.com/a/1190000018017796)

## call 和 apply 的共同点

它们的共同点是，都能够改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。

## call 和 apply 的区别

### call

调用 call 的对象，必须是个函数 Function。
call 的第一个参数，是一个对象。 Function 的调用者，将会指向这个对象。如果不传，则默认为全局对象 window。
第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的 Function 的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到 Function 对应的第一个参数上，之后参数都为空。

```js
Function.call(obj,[param1[,param2[,…[,paramN]]]])
function func (a,b,c) {}

func.call(obj, 1,2,3)
// func 接收到的参数实际上是 1,2,3

func.call(obj, [1,2,3])
// func 接收到的参数实际上是 [1,2,3],undefined,undefined
```

### apply

调用 call 的对象，必须是个函数 Function。
call 的第一个参数，是一个对象。 Function 的调用者，将会指向这个对象。如果不传，则默认为全局对象 window。
第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的 Function 的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到 Function 对应的第一个参数上，之后参数都为空。

```js

Function.apply(obj[,argArray])
func.apply(obj, [1,2,3])
// func 接收到的参数实际上是 1,2,3

func.apply(obj, {
    0: 1,
    1: 2,
    2: 3,
    length: 3
})
// func 接收到的参数实际上是 1,2,3
```

## 使用场景

### call

1. 对象的继承

```js
function superClass () {
    this.a = 1;
    this.print = function () {
        console.log(this.a);
    }
}

function subClass () {
    superClass.call(this);
    this.print();
}

subClass();
// 1
```

2. 借用方法

```js
let domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));

```

这样，domNodes 就可以应用 Array 下的所有方法了。

### apply

Math.max

```js
let max = Math.max.apply(null, array);

```

实现两个数组合并。在 ES6 的扩展运算符出现之前，我们可以用 Array.prototype.push来实现。

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
```

## bind

函数函数函数！
bind() 方法创建一个新的函数，在调用时设置 this 关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。

bind 方法 与 apply 和 call 比较类似，也能改变函数体内的 this 指向。不同的是，bind 方法的返回值是函数，并且需要**稍后调用**，才会执行。而 apply 和 call 则是立即调用。

来看下面这个例子：

```js
function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

add.bind(sub, 5, 3); // 这时，并不会返回 8
add.bind(sub, 5, 3)(); // 调用后，返回 8
```

如果 bind 的第一个参数是 null 或者 undefined，this 就指向全局对象 window。

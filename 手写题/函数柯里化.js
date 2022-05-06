//写法一，给定了sum的参数
function curry(fn, currArgs) {
  return function (...args) {
    // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
    if (currArgs !== undefined) {
      args = args.concat(currArgs);
    }

    // 递归调用
    if (args.length < fn.length) {
      return curry(fn, args);
    }

    // 递归出口
    return fn.apply(null, args);
  }
}

function sum(a, b, c) {
  console.log(a + b + c);
}

const fn = curry(sum);

fn(1, 2, 3); // 6
fn(1, 2)(3); // 6
fn(1)(2, 3); // 6
fn(1)(2)(3); // 6

//写法二，sum的参数数量未知

function curry(fn, args) {
  // 收集传参
  var args = args || []
  // 定义resFunc函数并返回，保证柯里化后返回的是一个可调用的函数
  var resFunc = function () {
    // 将最新传入的参数和之前收集的参数集合在一起
    var _args = args.concat([].slice.call(arguments))
    // 与柯里化的不同之处在于无法使用收集参数的个数与执行函数的参数个数来确定柯里化的终止条件
    // 为了保证柯里化处理的函数可以多次调用，需不停的递归
    return curry(fn, _args)
  }
  // 如果不停的递归，没有终止条件的话，会没有执行结果输出
  // 从上面的分析中可知，当调用vauleOf方法时返回执行结果，因此可以为resFunc设置一个valueOf方法，调用时执行函数
  resFunc.valueOf = function () {
    return fn.apply(this, args)
  }
  return resFunc
}

function add(...args) {
  return args.reduce((a, b) => a + b)
}

var sum = curry(add)

console.log(sum(1)(2)(3)(4, 5).valueOf());
console.log(sum(1)(2)(3).valueOf());
console.log(sum(4, 5, 5)(1, 3, 2)(6, 6).valueOf());


//写法三，直接针对add写,这是我自己写的，就是需要最后一个是空的()
function add(...args) {
  let resfunc = function () {
    if (arguments.length === 0) {
      return args.reduce((a, b) => a + b)
    } else {
      args.push(...arguments)
      return resfunc
    }
  }
  return resfunc
}
console.log(add(1)(2)(4, 5)());

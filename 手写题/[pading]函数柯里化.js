// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// function sum(...args) {
//   const f = (...rest) => sum(...args, ...rest);
//   f.valueOf = () => args.reduce((x, y) => x + y, 0);
//   return f;
// }
// let res = sum(1,2)(3).valueOf();
// console.log(res);

function sum(...args) {
  const f = (...rest) => sum(...args, ...rest);
  console.log(...args);
  f.valueOf = () => args.reduce((x, y) => x + y, 0);
  return f;
}
let res = sum(1, 2)(3).valueOf();
console.log(res);
// 第一版
var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
};

// 第二版
function curry(fn, curArgs) {
  const len = fn.length  // 需要柯里化函数的参数个数
  curArgs = curArgs || []

  return function() {
      let args = [].slice.call(arguments) // 获取参数
      args = curArgs.concat(args) //拼接参数
      // 基本思想就是当拼接完的参数个数与原函数参数个数相等才执行这个函数，否则就递归拼接参数
      if(args.length < len) {
          return curry(fn, args)
      }else{
          return fn.apply(this, args)
      }
  }
}

let fn = curry(function(a,b,c){
  console.log([a,b,c])
})
fn(1,2,3) // [ 1, 2, 3 ]
fn(1,2)(3) // [ 1, 2, 3 ]
fn(1)(2,3) // [ 1, 2, 3 ]
fn(1)(2)(3) // [ 1, 2, 3 ]
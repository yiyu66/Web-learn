// 我的写法，这样简单，但是不支持new
Function.prototype.myBind = function (context, ...args) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  const fn = this

  return function () {
    //  拼接参数
    args.concat([...arguments])
    return fn.apply(context, args);
  };
}

var getName = function () {
  console.log(this.name)
}
getName.call({ name: "Jan" })
getName.myBind({ name: "Jan" })()














// 手写bind 两个答案
// 1.反回的是函数
// 2.可以传递多个参数，用ES6的...，或者Array.prototype.slice.call(arguments, 0)

// Function.prototype.mybind = function (context) {
//   if (typeof this !== "function") {
//     throw new Error(
//       "Function.prototype.bind - what is trying to be bound is not callable"
//     );
//   }
//   var self = this;
//   var args = Array.prototype.slice.call(arguments, 1);
//   var fNOP = function () { };
//   var fbound = function () {
//     self.apply(
//       this instanceof self ? this : context,
//       args.concat(Array.prototype.slice.call(arguments))
//     );
//   };
//   fNOP.prototype = this.prototype;
//   fbound.prototype = new fNOP();
//   return fbound;
// };

// Function.prototype.myBind = function (obj, ...args) {
//   var fn = this;
//   //仿制一个Person的构造函数
//   var F = function () { };
//   if (fn.prototype) {
//     //将Person的原型全部拷贝到F
//     F.prototype = fn.prototype;
//   }
//   var res = function () {
//     var callObj = F.prototype.isPrototypeOf(this) ? this : obj;
//     return fn.call(callObj, ...args)
//   }
//   res.prototype = new F();
//   return res
// }

// 示例
// var getName = function () {
//   console.log(this.name)
// }
// getName.call({ name: "Jan" })
// getName.mybind({ name: "Jan" })()




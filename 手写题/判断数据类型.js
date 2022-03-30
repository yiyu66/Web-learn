let a = [];
console.log(typeof a);
console.log(a instanceof Array);
console.log(Object.prototype.toString.call(a));
console.log(a.constructor); //constructor不能判断undefined和null

console.log(Array.isArray(a));
console.log(Number.isNaN(NaN));
console.log();

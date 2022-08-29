let a = [];
let b = undefined;
let c = 'asd';
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(a instanceof Array);
console.log(c instanceof String);
console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(c));
console.log(a.constructor); //constructor不能判断undefined和null

console.log(Array.isArray(a));
console.log(Number.isNaN(NaN));
console.log();

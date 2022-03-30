function FakeNew() {
  let obj = {};

  // 将类数组 arguments 转为数组，同时将第一个参数也就是构造函数 shift 出来
  let Constructor = [].shift.apply(arguments);

  // 绑定原型
  obj.__proto__ = Constructor.prototype;

  // 调用构造函数，将 obj 当做 this 传入
  let res = Constructor.apply(obj, arguments);

  // 返回
  return typeof res === "object" ? res : obj;
}

function User(name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};

let u = FakeNew(User, "leo");
console.log(u);
console.log(u.getName());

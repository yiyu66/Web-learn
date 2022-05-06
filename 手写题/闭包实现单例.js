// 单例模式：限制类实例化次数只能一次，一个类只有一个实例，并提供一个访问它的全局访问点。
class Singleton {
  constructor(name) {
    this.name = name;
  }
}

Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

function Singleton2(name) {
  this.name = name
  this.instance = null
}
Singleton2.getInstance = (name) => {
  if (!this.instance) {
    this.instance = new Singleton2(name);
  }
  return this.instance
}


var a = Singleton2.getInstance("a");
var b = Singleton2.getInstance("b");
console.log(a === b);


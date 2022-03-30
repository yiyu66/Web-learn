// 单例模式：限制类实例化次数只能一次，一个类只有一个实例，并提供一个访问它的全局访问点。
var Singleton = function (name) {
  this.name = name;
};

Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();
var a = Singleton.getInstance("a");
var b = Singleton.getInstance("b");
console.log(a === b);

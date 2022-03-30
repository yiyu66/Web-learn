var obj = { name: "Smiley" };
var greeting = function (str, lang) {
  this.value = "greetingValue";
  console.log("Welcome " + this.name + " to " + str + " in " + lang);
};
var objGreeting = greeting.bind(obj, "the world");
greeting();
objGreeting("JS");

// 手写bind 不懂
Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () {};
  var fbound = function () {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return fbound;
};

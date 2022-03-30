//
function test() {
  console.log("test");
}

var once = function (fn) {
  var isFirst = true;
  return function () {
    if (isFirst) {
      isFirst = !isFirst;
      fn();
    }
  };
};

var b = once(test);
b(); // 'test'
b(); // nothing

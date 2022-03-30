const _private = new WeakMap();
class Example {
  constructor() {
    _private.set(this, "private");
  }
  getName() {
    return _private.get(this);
  }
}

var ex = new Example()
console.log(ex._private);
console.log(ex.getName());
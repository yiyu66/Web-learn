function getValueByKey(p, key) {
    return p[key];
}
var val = getValueByKey({ name: "hello", age: 10, gender: "male" }, "age");
console.log(val);

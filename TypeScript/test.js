function getValueByKey(p, key) {
    return p[key];
}
var val = getValueByKey({ name: "hello", age: 10, gender: "male" }, "name");
console.log(val);

// 修改测试
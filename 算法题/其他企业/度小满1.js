// 计算一个字符串中出现次数最多的字符减去出现次数最少的字符的次数

var str = "aaabbbcccdddeeeefffggg";
var arr = str.split("");
var map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}
var max = 0;
var min = 1000000;
for (let [key, value] of map) {
  if (value > max) {
    max = value;
  }
  if (value < min) {
    min = value;
  }
}
console.log(max - min);

let yuanyin = ["a", "e", "i", "o", "u"];
let arr = [];
let res = 0;
for (let i = 0; i < str.length; i++) {
  arr.push(str.slice(i, i + 5));
}

arr.forEach((item) => {
  let set = new Set(item.split(""));
  if (set.size === item.length) {
    if (
      !yuanyin.includes(item[0]) &&
      yuanyin.includes(item[1]) &&
      yuanyin.includes(item[2]) &&
      !yuanyin.includes(item[3]) &&
      yuanyin.includes(item[4])
    ) {
      res += 1;
    }
  }
});
console.log(res);

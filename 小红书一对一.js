let lines = [1, 2, 2, 3, 3];
let arr = [];
let ans = 0;
let n = 6;

for (let i = 0; i < lines.length; i++) {
  arr.push([lines[i], i + 1 + 1]);
}
let ansarr = [];
// console.log(arr);
for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    arr.forEach((item) => {
      if (item[0] === i && item[1] === j&&!ansarr.includes(i)&&!ansarr.includes(j)) {
        // console.log(item);
        ans += 1;
        ansarr.push(i);
        ansarr.push(j);
      }
    });
  }
}
console.log(ans);

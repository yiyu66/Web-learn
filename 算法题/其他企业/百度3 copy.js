let n = readline();
let arr = readline().split(" ").map(Number);
let res = 0;
// 循环遍历数组，若是又长度为3的子串分别大于等于1，2，3，则子串分别减去1，2，3，res+=5
function fn(arr) {
  let flag = false;
  for (let i = arr.length - 1; i >= 2; i--) {
    if (arr[i] >= 3 && arr[i - 1] >= 2 && arr[i - 2] >= 1) {
      arr[i] -= 3;
      arr[i - 1] -= 2;a
      arr[i - 2] -= 1;
      res += 5;
//       console.log(arr);
      if (arr[i] >= 3 && arr[i - 1] >= 2 && arr[i - 2] >= 1) {
        arr[i] -= 3;
        arr[i - 1] -= 2;
        arr[i - 2] -= 1;
        res += 5;
      }
      flag = true;
    }
  }
  if (flag) {
    fn(arr);
  }
}
fn(arr);
// console.log(arr);
// 求和
let sum = arr.reduce((a, b) => a + b);
res = res + sum;
console.log(res);
// console.log(1);

let arr = [2, 3, 2, 3, 4];
22004;
// let arr = [4, 6, 9, 4];

112100;
let res = 0;
// 从后向前循环遍历数组，若是又长度为3的子串分别大于等于1，2，3，则子串分别减去1，2，3，res+=5
function fn(arr) {
  let flag = false;
  let maxSum = 0;
  let sum = 0;
  let maxindex = 0;
  for (let i = arr.length - 1; i >= 2; i--) {
    if (arr[i] >= 3 && arr[i - 1] >= 2 && arr[i - 2] >= 1) {
      sum = arr[i] + arr[i - 1] + arr[i - 2];
      //   console.log("sum", sum);
      if (sum >= maxSum) {
        maxSum = sum;
        maxindex = i;
      }
    }
  }
  //   最大的子串分别减去1，2，3，res+=5
  console.log("arr", arr, "能量", res);

  if (maxindex >= 2) {
    arr[maxindex] -= 3;
    arr[maxindex - 1] -= 2;
    arr[maxindex - 2] -= 1;
    res += 5;
    flag = true;
  }
  if (flag) {
    fn(arr);
  }
}
fn(arr);
console.log(arr);
// 求和
let sum = arr.reduce((a, b) => a + b);
res = res + sum;
console.log("能量", res);

let arr = [2, 2, 7, 3];
// let arr = [1, 3, 4];
let tempArr = [];
for (let i = 1; i < arr.length; i++) {
  const pre = arr[i - 1];
  const cur = arr[i];
  tempArr.push(Math.abs(cur - pre));
}
console.log(tempArr);
// 找到最大值下标
let maxIndex = 0;
for (let i = 0; i < tempArr.length; i++) {
  if (tempArr[i] > tempArr[maxIndex]) {
    maxIndex = i;
  }
}
maxIndex = maxIndex + 1;
console.log(maxIndex);
if (maxIndex === 0 || maxIndex === arr.length - 1) {
  console.log(Math.min(...tempArr));
} else {
  let newValue = Math.floor((arr[maxIndex + 1] + arr[maxIndex - 1]) / 2);
  // console.log("newValue", newValue);
  ans = Math.max(arr[maxIndex + 1] - newValue, arr[maxIndex - 1] - newValue);
  ans = Math.abs(ans);
  console.log(ans);
}

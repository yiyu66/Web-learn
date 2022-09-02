let arr = [101, 301];
// let arr = [13, 123, 24, 101, 301];
let ans = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    ans.push(arr[i]);
  } else {
    const strArr = arr[i].toString().split("").map(Number);
    let flag = false;
    for (let j = 0; j < strArr.length; j++) {
      let item = strArr[j];
      let endIndex = strArr.length - 1;
      if ((item === 0 || item % 2 === 0) && j !== strArr.length - 1) {
        [strArr[j], strArr[endIndex]] = [strArr[endIndex], strArr[j]];
        // console.log("strArr", strArr);
        ans.push(parseInt(strArr.join("")));
        flag = true; // 找到了
        break;
      }
    }
    // console.log(ans);
    if (!flag) ans.push(-1);
  }
}
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i]);
}

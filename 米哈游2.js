// 字符串str，找出最短的子串长度，使得该子串中包含至少k个的"mihoyo",打印出该子串的左下标和右下标，如果不存在则打印-1
let str = "mihoyoyomihoyomimihoyo";
let k = 2;
// 1. 暴力解法
function solution(str, k) {
  let len = str.length;
  if (len < k) return -1;
  let min = Number.MAX_SAFE_INTEGER;
  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + k - 1; j < len; j++) {
      let subStr = str.substring(i, j + 1);
      //   判断子串中的"mihoyo"的个数是否大于k
      let count = 0;
      for (let m = 0; m < subStr.length; m++) {
        if (
          subStr[m] === "m" &&
          subStr[m + 1] === "i" &&
          subStr[m + 2] === "h" &&
          subStr[m + 3] === "o" &&
          subStr[m + 4] === "y" &&
          subStr[m + 5] === "o"
        ) {
          count++;
        }
      }
      if (count >= k) {
        if (subStr.length <= min) {
          min = subStr.length;
          leftIndex = i;
          rightIndex = j;
          console.log(leftIndex, rightIndex);
        }
      }
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? -1 : [leftIndex, rightIndex];
}
console.log(solution(str, k));
// 2. 滑动窗口
// 3. 二分查找
// 4. 动态规划
// 5. 递归
// 6. 回溯
// 7. 贪心
// 8. 分治

// 字符串str，找出最短的子串长度，使得该子串中包含至少k个的"mihoyo",打印出该子串的左下标和右下标，如果不存在则打印-1
// 滑动窗口
let str = "mihoyoyomihoyomimihoyo";
let k = 2;
function solution(str, k) {
  let len = str.length;
  if (len < k) return -1;
  let min = Number.MAX_SAFE_INTEGER;
  let leftIndex = 0;
  let rightIndex = 0;
  //  找到字符串中每一个"mihoyo"的下标
  let indexArr = [];
  for (let i = 0; i < len; i++) {
    if (
      str[i] === "m" &&
      str[i + 1] === "i" &&
      str[i + 2] === "h" &&
      str[i + 3] === "o" &&
      str[i + 4] === "y" &&
      str[i + 5] === "o"
    ) {
      indexArr.push(i);
    }
  }
  //  如果不存在"mihoyo"的子串
  if (indexArr.length < k) return -1;
  //  如果存在"mihoyo"的子串
  let left = 0;
  let right = k - 1;
  while (right < indexArr.length) {
    let subStr = str.substring(indexArr[left], indexArr[right] + 6);
    if (subStr.length <= min) {
      min = subStr.length;
      leftIndex = indexArr[left];
      rightIndex = indexArr[right] + 5;
    }
    left++;
    right++;
  }
  return [leftIndex, rightIndex];
}

console.log(solution(str, k));

// 考试
// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var ans = 0;
var k = 0;
var n = 0;
var cur_line = 0;
rl.on("line", function (line) {
  // javascript每行数据的回调接口
  if (cur_line === 0) {
    // 测试用例第一行读取n
    //     console.log(line);
    n = parseInt(line.split(" ")[0]);
    k = parseInt(line.split(" ")[1]);
    //     console.log(k);
    cur_line += 1;
  } else {
    //     console.log(line);
    let str = line;
    function solution(str, k) {
      let len = str.length;
      if (len < k) return -1;
      let min = Number.MAX_SAFE_INTEGER;
      let leftIndex = 0;
      let rightIndex = 0;
      //  找到字符串中每一个"mihoyo"的下标
      let indexArr = [];
      for (let i = 0; i < len; i++) {
        if (
          str[i] === "m" &&
          str[i + 1] === "i" &&
          str[i + 2] === "h" &&
          str[i + 3] === "o" &&
          str[i + 4] === "y" &&
          str[i + 5] === "o"
        ) {
          indexArr.push(i);
        }
      }
      //  如果不存在"mihoyo"的子串
      if (indexArr.length < k) return -1;
      //  如果存在"mihoyo"的子串
      let left = 0;
      let right = k - 1;
      while (right < indexArr.length) {
        let subStr = str.substring(indexArr[left], indexArr[right] + 6);
        if (subStr.length <= min) {
          min = subStr.length;
          leftIndex = indexArr[left];
          rightIndex = indexArr[right] + 5;
        }
        left++;
        right++;
      }
      return [leftIndex, rightIndex];
    }
    let res = solution(str, k);

    console.log(res == -1 ? -1 : res.join(" "));
  }
});

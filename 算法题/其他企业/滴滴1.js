let n = 4;
let m = 4;
let k = 4;
let price = [
  [1, 2, 3, 6],
  [2, 3, 1, 3],
  [3, 4, 2, 4],
  [3, 4, 2, 1],
];

// for (let i = 0; i < n; i++) {
//     let temp = gets(1000000)
//     temp = temp.split(" ").map(Number)
//     price.push(temp)
// }
// let Array = [];
// 长度为n的数组，每个元素都在1到m之间，遍历所有的排列组合，数组升序排列
function getArray(n, m) {
  let arr = new Array(n).fill(1);
  let result = [];
  // result升序排列
  const dfs = (index, pre) => {
    if (index === n) {
      result.push(arr.slice());
      return;
    }
    for (let i = pre; i <= m; i++) {
      arr[index] = i;
      dfs(index + 1, i);
    }
  };
  dfs(0, 1);
  return result;
}

let ansArr = getArray(4, 4);

// 计算奖励的最大值sum
let max = 0;
console.log(ansArr);
// ansArr = [[1, 1, 2, 4]];
ansArr.forEach((item) => {
  let sum = 0;
  //   console.log(item);
  for (let i = 0; i < n; i++) {
    // console.log(price[i][1]);
    // console.log(item[price[i][1]]);
    if (item[price[i][1] - 1] - item[price[i][0] - 1] === price[i][2]) {
      sum += price[i][3];
    }
  }
  //   console.log("sum", sum);
  max = Math.max(max, sum);
});
console.log(max);

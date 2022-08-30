// let n = parseInt(arr[0]);
// let m = parseInt(arr[1]);
// let id = parseInt(arr[2]);
// let lines = [];

// for (let i = 0; i < n; i++) {
//   lines.push(gets(10000000).split(" "));
// }
// for (let line of lines) {
//   let nums = line.map(Number);
//   console.log(parseInt(nums[0]) + parseInt(nums[1]));
// }
let lines = [
  ["90", "90", "90"],
  ["80", "100", "90"],
  ["80", "85", "85"],
  ["800", "85", "85"],
];
let id = 2;

let arrM = [];
const sum = (arr) => {
  return arr.reduce((a, b) => a + b);
};

for (let i = 0; i < lines.length; i++) {
  const item = lines[i];
  let tempArr = item.map(Number);
  arrM[i] = [i, sum(tempArr)];
}
console.log(arrM);
// 找到序号对应的大小
let targetValue = arrM[id - 1];
const first = arrM.indexOf(targetValue);
const x = id - first - 1;
console.log(targetValue, first, x);
let listSort = arrM.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[0] - b[0];
  }
  return b[1] - a[1];
});
console.log("listSort", listSort);

const firstAns = listSort.indexOf(targetValue);
console.log("firstAns", firstAns);
const ans = firstAns + x + 1;
if (lines.length === 1) {
  console.log(1);
} else {
  console.log(ans);
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  1
}
// let arr = [];
// for (let i = 0; i < n; i++) {
//   input = gets(1000000);
//   let l = input.split(" ")[0];
//   let r = input.split(" ")[1];
//   arr.push([l, r]);
// }
let arr = [
  [1, 10],
  [0, 4],
  [3, 4],
  [4, 8],
  [7, 10],
];
let h = 3;

let array = [];
let count = 0;
let map = new Map();
// 生成数组,根据arr的每组下标在left和right之间加1,计算数组中大于h的个数
for (let i = 0; i < arr.length; i++) {
  let left = arr[i][0];
  let right = arr[i][1] - 1;
  for (let j = left; j <= right; j++) {
    if (map.has(j)) {
      continue;
    }
    array[j] = array[j] ? array[j] + 1 : 1;
    if (array[j] >= h) {
      count++;
      console.log(array);
      map.set(j, array[j]);
    }
  }
}
// 计算出array中大于h的元素个数

// for (let i = 0; i < array.length; i++) {
//   if (array[i] >= h) {
//     count++;
//   }
// }
// console.log(array);
console.log(count);

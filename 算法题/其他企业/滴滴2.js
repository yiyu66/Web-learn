let k = 1;
// let arr = [3, 10, 5, 4, 2];
let arr = [1, 5, 5];
let n = arr.length;
// 排序
arr.sort((a, b) => a - b);

let arr2 = arr.slice();
let n2 = n;

let sum = arr.reduce((a, b) => a + b);
let avg = sum / arr.length;
while (avg * k < arr[n - 1]) {
  sum -= arr[n - 1];
  arr.pop();
  n--;
  avg = sum / n;
}
console.log(n);

arr2.sort((a, b) => b - a);
let sum2 = arr2.reduce((a, b) => a + b);
let avg2 = sum2 / arr2.length;
console.log(arr2, sum2, avg2);
while (avg2 * k < arr2[n2 - 1]) {
  sum2 -= arr2[n2 - 1];
  arr2.pop();
  n2--;
  avg2 = sum2 / n2;
}
console.log(n2);

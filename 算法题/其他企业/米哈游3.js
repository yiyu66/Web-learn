// 每次让一个数组元素翻倍，求最小操作次数，使得数组递增

// 找到数组第一个不满足递增的元素，然后将其翻倍，直到满足递增为止
// 递增的元素个数为n，那么最小操作次数为n-1
let arr = [2, 3, 2, 3, 2];
function solution(arr) {
  console.log(arr);
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      // 就算出需要翻倍的次数
      let temp = Math.ceil(Math.log2(arr[i - 1] / arr[i]));
      arr[i] = arr[i] * Math.pow(2, temp);
      count += temp;
      console.log(`第${i + 1}位乘2的${temp}次方，当前操作数为${count}`, arr);
    }
  }
  return count;
}

console.log(solution(arr));

//

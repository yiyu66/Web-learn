// 找出两个数组中不同的值
function find(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  return result;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(find(arr2, arr1));

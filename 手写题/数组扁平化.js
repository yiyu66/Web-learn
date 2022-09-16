var array = [1, [2, 3, [4, 5]]];

function flatten1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function flatten2(arr) {
  let result = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

function flatten3(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

// 方法4、5：先转成字符串，再变回数组
function flat4(array) {
  //[1,[2,3]].toString()  =>  1,2,3
  return array
    .toString()
    .split(",")
    .map((item) => parseInt(item));
}

function flat5(array) {
  return array
    .join(",")
    .split(",")
    .map((item) => Number(item));
}
// 带参数
Array.prototype.myflatten = function (num = 1) {
  if (num === 0) return this;
  return this.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? cur.myflatten(num - 1) : cur);
  }, []);
};

// console.log(flatten(array));
console.log(array.flat(Infinity));
console.log(array.myflatten());

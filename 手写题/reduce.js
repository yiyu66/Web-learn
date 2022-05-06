Array.prototype.myReduce = function (callback, prev) {
    for (let i = 0; i < this.length; i++) {
        if (prev === undefined) {
            prev = callback(this[i], this[i + 1], i + 1, this); // 没有传prev的时候  需要给prev赋值成当前数组里的第一项
            i++; // 赋值完之后  prev有值了  下一次应该从第2项开始
        } else {
            prev = callback(prev, this[i], i, this);
        }
    }
    return prev;
}

let arr = [2, 3, 4, 5]
let b = arr.myReduce((prev, current) => {
    return prev + current
})
console.log(b)   // 24

// 用reduce仿写Map
Array.prototype.myMap = function (callback, thisArg) {
    let result = [];
    this.reduce((prev, curr, index, array) => {
        result[index] = callback.call(thisArg, array[index], index, array);
    }, 0)
    return result
};

let arr2 = [1, 2, 3]
const test = arr2.myMap((item) => {
    return item * 2
})
console.log(test);

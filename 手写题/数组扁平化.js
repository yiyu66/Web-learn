var array = [1, [2, 3, [4, 5]]]

function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
function flatten(arr) {
    let result = []
    arr.map(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item))
        } else {
            result.push(item)
        }
    })
    return result
}

function flatten(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

// 带参数
Array.prototype.myflatten = function (num = 1) {
    if (num === 0) return this
    return this.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? cur.myflatten(num - 1) : cur)
    }, [])
}

// console.log(flatten(array));
console.log(array.flat(Infinity));
console.log(array.myflatten());
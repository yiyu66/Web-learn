Array.prototype.findSum = function (sum) {
    let map = new Map();
    let result = []
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (map.has(sum - item)) {
            result.push([item, sum - item])
        } else {
            map.set(item, i)
        }
    }
    return result
}

a = [1, 2, 3, 4, 5, 6, 7, -2, 8, 9, 10]

console.log(a.findSum(8));
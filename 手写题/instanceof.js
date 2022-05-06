// 因为是判断实例,所以只能检测object
const myInstanceof = (L, R) => {
    if (typeof L !== 'object' || L === null) return false;
    let target = R.prototype
    L = L.__proto__
    while (true) {
        if (L === null) {
            return false
        }
        if (L === target) {
            return true
        }
        L = L.__proto__
    }
};

console.log(myInstanceof(123, Number));
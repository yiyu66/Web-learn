// let n = read_line();
// let str = read_line();

let n = 2
let strArr = [5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

let p1 = strArr[0], p2 = strArr[n - 1]
let temp = p2 - p1

for (let i = 0; i < strArr.length; i++) {
    const item = strArr[i];
    temp = Math.min(Math.abs((item - p1) - (p2 - item)), temp)
}
console.log(temp);
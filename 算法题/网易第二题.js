let p = 3
let x = 2
let arr = [2, 5, 3, 4]
let ans = 0
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

for (let i = 0; i < arr.length; i++) {
    const before = arr[i];
    let target = sum - before
    let fisrt = 0
    // 找到第一个公倍数
    for (let j = 1; j <= p; j++) {
        if (before === j) continue
        if ((target + j) % x === 0) {
            fisrt = j
            break
        }
    }
    if (fisrt !== 0) {
        for (let j = fisrt; j <= p; j += x) {
            if (before === j) continue
            ans++
        }
    }
}
console.log(ans);
//给一个数字30000，给一个数组[2,1,9]，实现一个算法能用数组中的数据组成比给定数字小的最大数29999。
function maxNum(num, arr) {
    let len = num.toString().length;
    let max = 0;
    const dfs = (numArr) => {
        if (numArr.length === len) {
            let ans = numArr.join('');
            if (ans < num && ans > max) {
                max = ans;
            }
            return
        }
        for (let i = 0; i < arr.length; i++) {
            numArr.push(arr[i]);
            dfs(numArr)
            numArr.pop()
        }
    }
    dfs([])
    return max
}

let a = maxNum(4132, [2, 1, 9]);
console.log(a);
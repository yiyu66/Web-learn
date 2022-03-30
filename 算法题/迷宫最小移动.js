// read_line() //读取一行输入
// gets(n) //读取n个字符
// readInt()
// readDouble()
let m = 4
let n = 3
let arr = [[1, 3, 1], [1, 5, 1], [4, 2, 1],[4, 2, 1]]

function sum(m, n, arr) {
    // 初始化行
    for (let i = 1; i < n; i++) {
        arr[0][i] += arr[0][i - 1]
    }
    for (let i = 1; i < m; i++) {
        arr[i][0] += arr[i - 1][0]
    }
    console.log(arr);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const value = arr[i][j];
            const valueLeft = arr[i][j - 1];
            const valueUp = arr[i-1][j];
            // 只能从左边和上面得来，所以这个值设置为：此值和上左和的最小值
            arr[i][j] = Math.min(value + valueLeft, value + valueUp)
        }
    }
    return arr[m - 1][n - 1]
}
console.log(sum(m, n, arr));

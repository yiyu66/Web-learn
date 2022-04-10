let inputArray = ['1', '4', 'A A A A']
let M = Number(inputArray[0])
let N = Number(inputArray[1])
let arr = inputArray[2].split(' ')
let Marray = Array(N).fill(4)
let ans = 0, id = 0
for (let i = 0; i < N; i++) {
    const item = arr[i];
    if (item === 'A') {
        for (let m = 0; m < M; m++) {
            if (Marray[m] > 0) { // 还有空间
                Marray[m] = Marray[m] - 1
                id = 4 - Marray[m]
                ans = m + 1
                break
            }
            else if (m === M - 1) {
                ans = 0
                id = 0
            }
        }

    }
    if (item === 'B') {
        for (let m = 0; m < M; m++) {
            if (Marray[m] === 4) { // 还有空间
                Marray[m] = Marray[m] - 4
                id = 1
                ans = m + 1
                break
            }
            else if (m === M - 1) {
                ans = 0
                id = 0
            }
        }
    }
}

console.log(ans);
console.log(id);
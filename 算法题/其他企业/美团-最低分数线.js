// let input1 = readline().split(' ')
// let scoreArray = readline().split(' ')

input1 = [6, 2, 3]
scoreArray = [1, 2, 6, 4, 5, 6, 7, 8]
scoreArray.sort((a, b) => a - b)
// console.log(scoreArray);
let n = input1[0]
let x = input1[1]
let y = input1[2]

let mArr = []
for (let i = 0; i < scoreArray.length; i++) {
    if ((i + 1) >= x && (scoreArray.length - i - 1) <= y) {
        mArr.push(scoreArray[i])
    }
}
if (!mArr) {
    console.log(-1)
} else { console.log(Math.min(...mArr)) }

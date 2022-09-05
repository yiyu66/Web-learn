let a = "663"
let b = "11"
let ans = Infinity;

const dfs = (a, b, times) => {
    
    if (a.length === 1 || b.length === 1) return

    for (let i = 0; i < a.length; i++) {
        let temp = [...a.split("")]
        let delNum = temp.splice(i, 1)
        let temp2 = temp.join("")
        console.log({times})
        if (temp2 % b === 0 || b % temp2 === 0) {
            ans = Math.min(ans, times + 1)
            console.log("算出来了", temp2, b,times)
            return
        }
        dfs(temp2, b, times + 1)
        // console.log({ temp });
        // temp.splice(i, 0, ...delNum)
    }
}
if (a % b === 0 || b % a === 0) {
    ans = 0;
} else {
    dfs(a, b, 0)
}
// let stra = a.toString().split("");
// for (let i = 0; i < stra.length; i++) {
//     let temp = [...stra]
//     temp.splice(i, 1)
//     let temp2 = temp.join("")
//     if (temp2 % b === 0 || b % temp2 === 0) ans = 3;
//     console.log(temp2);
// }
console.log(ans);

// let str = read_line();
let a = 'acbcca'.split('')
let test = 'dacbccab'
arr = test.split('')

let temp = []
let ans = 0
function find() {
    for (let j = 1; j < a.length; j++) {
        if (arr.includes(a[j])) {
            temp.push(a[j])
            arr.splice(arr.indexOf(a[j]), 1) // 找到一个，删除一个
            if (j === 5) {
                find()
                ans++
            }
        } else {
            break
        }
    }
}
if (arr.includes('a')) {
    temp.push('a')
    find()
    console.log(ans);
}else{
    console.log(0);
}




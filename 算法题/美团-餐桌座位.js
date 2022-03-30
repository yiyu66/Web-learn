let T = 1//数据组数,用于循环读数据组
let N = 5
let strArr = '01102'.split('')
let M = 6
let sexArr = 'MFMMFF'.split('')
// 优先坐左边，女单 男双
let output = []
for (let i = 0; i < sexArr.length; i++) {
    const item = sexArr[i];
    if (item === 'M') {
        let index = strArr.indexOf('1')
        if (index !== -1) {
            strArr[index] = '2'
            output.push(index + 1)
        } else {
            let index = strArr.indexOf('0')
            output.push(index+ 1)
            strArr[index] = '1'
        }
    } else {
        let index = strArr.indexOf('0')
        if (index !== -1) {
            strArr[index] = '1'
            output.push(index + 1)
        } else {
            let index = strArr.indexOf('1')
            output.push(index + 1)
            strArr[index] = '2'

        }
    }
}
output.forEach(item => {
    console.log(item);
})
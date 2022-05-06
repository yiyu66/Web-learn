// function sleep(func, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(func())
//         }, delay)
//     })
// }

function say(name) {
    console.log(name)
}
function say() {
    console.log(123)
}
// async function go() {
//     await sleep(() => say('nanjiu'), 1000) //过一秒打印nanjiu
//     await sleep(() => say('前端南玖'), 1000) // 再过两秒打印前端南玖
// }
// go()

// 两种写法，一种有函数一种没有。
// function sleep(delay) {
//     return new Promise((resolve) => { setTimeout(resolve, delay) })
// }

// sleep(1000).then(() => console.log(123))
sleep(say, 1000)

function sleep(func, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(func())
        }, delay)
    })
}
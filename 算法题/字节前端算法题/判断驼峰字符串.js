// judge('ByteDance','BD') -> true judge('Bytedance','BD') -> false
const judge = (str, head) => {
    let arr = str.split('')
    let smaller = head.split('')
    smaller.forEach((item) => {

    })
}
// 把字符串转换成驼峰格式
const test = 'abc-abc-abc';//测试用例
const words = test.split('-');
const len = words.length;
for (let i = 1; i < len; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(''));
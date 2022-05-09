let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key'

function getUrl(params, temp) {
    let query = params.split('?')[1].split('#')[0]
    let ans = query.split('&')
    let res = {}  // 返回的对象

    for (let i = 0; i < ans.length; i++) {
        let temp = ans[i].split('=')
        let key = temp[0]
        let value = temp[1]
        if (res[key]) {
            // 如果是数组，说明参数是出现第三次及以上
            if (Array.isArray(res[key])) res[key].push(Number(value))
            // 第二次出现。直接使用一个中括号，就会变成一个数组
            else res[key] = [res[key], Number(value)]
        } else {
            // 第一次出现
            res[key] = Number(value)
        }
    }
    return temp ? res[temp] : res
}
console.log(getUrl(url, 'key'))  // 输出结果[1,2,3]
console.log(getUrl(url))  // 输出结果 {'key':[1,2,3],'test':4}


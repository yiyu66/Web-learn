// 1.返回一个Promise
// 2.定义count，iteratorIndex，Results
// 3.用forof循环参数(这里为了保证可迭代，但是还要保证顺序，所以有了let resultIndex)
// 4.包一层，以兼容非promise的情况
// 5.当完成的数量===迭代的次数时，resolve
Promise.myAll = function (args) {
    return new Promise((resolve, reject) => {
        let count = 0 //记录完成的数量
        let iteratorIndex = 0
        const Results = []
        for (const item of args) {
            let resultIndex = iteratorIndex;
            iteratorIndex++
            // 包一层
            Promise.resolve(item).then(res => {
                Results[resultIndex] = res
                count++
                if (count === iteratorIndex) {
                    resolve(Results)
                }
            }).catch(err => {
                reject(err)
            })
        }
        if (iteratorIndex === 0)
            resolve(Results)
    })
}

















// 输入不仅仅只有Array
function promiseAll(args) {
    return new Promise((resolve, reject) => {
        const promiseResults = [];
        let iteratorIndex = 0;
        // 已完成的数量，用于最终的返回，不能直接用完成数量作为iteratorIndex
        // 输出顺序和完成顺序是两码事
        let fullCount = 0;
        // 用于迭代iterator数据
        for (const item of args) {
            // for of 遍历顺序，用于返回正确顺序的结果
            // 因iterator用forEach遍历后的key和value一样，所以必须存一份for of的 iteratorIndex
            let resultIndex = iteratorIndex;
            iteratorIndex += 1;
            // 包一层，以兼容非promise的情况
            Promise.resolve(item).then(res => {
                promiseResults[resultIndex] = res;
                fullCount += 1;
                // Iterator 接口的数据无法单纯的用length和size判断长度，不能局限于Array和 Map类型中
                if (fullCount === iteratorIndex) {
                    resolve(promiseResults)
                }
            }).catch(err => {
                reject(err)
            })
        }
        // 处理空 iterator 的情况
        if (iteratorIndex === 0) {
            resolve(promiseResults)
        }
    }
    )
}
// if (!Promise.all) Promise.all = promiseAll;

var promise1 = Promise.resolve(3);
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'foo');
});
var promise3 = 42;

promiseAll([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
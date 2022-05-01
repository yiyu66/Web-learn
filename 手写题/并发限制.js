var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, '1');
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, '2');
});
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, '3');
});
var promise4 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, '4');
});
var promise5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, '5');
});
let promiseList = [promise1, promise2, promise3, promise4, promise5]
// Promise.all(promiseList).then(function (values) {
//     console.log(values);
// });

const executingTasks = new Set()
function fill(tasks, max) {

    while (executingTasks.size < max && tasks.length) {
        const fn = tasks.shift()
            .then((values) => {
                console.log(values + '当前并发量：' + executingTasks.size);
                executingTasks.delete(fn);
                fill(tasks, max);
            })
        executingTasks.add(fn)
    }
}
fill(promiseList, 3)

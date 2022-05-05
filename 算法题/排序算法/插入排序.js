let arr = [2, 4, 5, 6, 1, 4, 3];
// 全部是N^2 稳定
// 时间平均和最坏是N^2 最好是N  稳定
// 优化：拆半插入
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let preIndex = i - 1
        let current = arr[i]
        while (preIndex >= 0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}

let result = insertionSort(arr);
console.log(result);

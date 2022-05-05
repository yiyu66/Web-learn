let arr = [2, 4, 5, 6, 1, 4, 3];
// 时间平均和最坏是N^2 最好是N  稳定
// 注意每次最后的元素会是最大的数。因此每轮的长度为j < arr.length - 1 - i
// 冒泡排序还有一种优化算法，就是立一个 flag，当在一趟序列遍历中元素没有发生交换，则证明该序列已经有序。但这种改进对于提升性能来说并没有什么太大作用。
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let result = bubbleSort(arr);
console.log(result);
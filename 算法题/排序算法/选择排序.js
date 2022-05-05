let arr = [2, 4, 5, 6, 1, 4, 3];
// 全部是N^2 不稳定
// 每次都找到最小的数，放到已排序的末尾
function selectionSort(arr) {
    let minIndex, temp
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let result = selectionSort(arr);
console.log(result);
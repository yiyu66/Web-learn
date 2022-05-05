function quickSort(arr, left = 0, right = arr.length - 1) {
    // var len = arr.length,
    //     partitionIndex,
    //     left = typeof left != 'number' ? 0 : left,
    //     right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

// 下面的分治代码是关键，要背下来
function partition(arr, left, right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let ans = quickSort([3, 2, 1, 5, 6, 4])
console.log(ans);
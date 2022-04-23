function quickSort(arr, low, high) {
    if (low < high) {
        let index = getIndex(arr, low, high);
        quickSort(arr, low, index - 1);
        quickSort(arr, index + 1, high);
    }
}

function getIndex(arr, low, high) {
    let temp = arr[low]
    while (low < high) {
        while (low < high && arr[high] >= temp) {
            high--
        }
        arr[low] = arr[high]
        while (low < high && arr[low] <= temp) {
            low++
        }
        arr[high] = arr[low]
    }
    arr[low] = temp
    return low
}
// 希尔排序
// n^1.3  不稳定
// 希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，再对全体记录进行依次直接插入排序。
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {          //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

// 归并排序
// 时间复杂度始终是nlog2n 空间复杂度是o(n) 不稳定
// 堆排序
// 基数排序
/*
    1.堆排序   时间复杂度始终是nlog2n  空间复杂度是o(1)
    2.归并排序 时间复杂度始终是nlog2n 空间复杂度是o(n) 不稳定
    3.计数排序 时间复杂度始终是Θ(n + k)  空间复杂度是Θ(n + k)
    4.希尔排序 时间复杂度平均是n^1.3 最好是n 最差是n^2  空间复杂度是o(1)
*/
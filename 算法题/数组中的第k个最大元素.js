// 快排的过程简单的说只有三步：
// 首先从序列中选取一个数作为基准数
// 将比这个数大的数全部放到它的右边，把小于或者等于它的数全部放到它的左边 （一次*** partition）
// 然后分别对基准的左右两边重复以上的操作，直到数组完全排序

// 快排，分区，partition

// 其实没有必要全部排序，可以利用快速排序的 partition 操作，找到第 K 个最大元素。

// 每进行一次快速排序的 partition 操作，就能找到这次我们选中的基准值排序之后的正确位置。

// 如果它的位置刚好是排序之后第 K 个最大元素的位置，即 len - k，我们直接得到了答案；
// 因为进行 partition 操作之后，位于基准值之前的元素都要小于基准值，位于基准值之后的元素都要大于等于基准值。

// 如果它的位置小于排序之后第 K 个最大元素的位置，我们就去它之后寻找第 K 个最大元素；
// 如果它的位置大于排序之后第 K 个最大元素的位置，我们就去它之前寻找第 K 个最大元素；
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let left = 0, right = nums.length - 1
    let targetIndex = nums.length - k
    while (left < right) {
        const index = partition(nums, left, right);
        // 进行 partition 操作之后，位于基准值之前的元素都要小于基准值，位于基准值之后的元素都要大于等于基准值。
        if (index === targetIndex) {
            return nums[index];
        } else if (index > targetIndex) {
            right = index - 1;
        } else {
            left = index + 1;
        }
    }
    return nums[left];
};

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

let ans = findKthLargest([3, 2, 1, 5, 6, 4], 4)
console.log(ans);
// 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。
// 示例 1 :
// 输入:nums = [1,1,1], k = 2
// 输出: 2
// 解释: 此题 [1,1] 与 [1,1] 为两种不同的情况
// 示例 2 :
// 输入:nums = [1,2,3], k = 3
// 输出: 2
// 提示:
// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  利用前缀和的差值来得出各个区间的和值
var subarraySum = function (nums, k) {
    let ans = 0, sum = 0
    let map = new Map()
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        // 如果map里存在 差值 
        if (map.has(sum - k)) {
            ans += map.get(sum - k)
        }

        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1) // map里没有这个差值就加上
        }

    }
    return ans
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 因为是所有子集，所以用startIndex做记录
 var subsets = function (nums) {
    let ans = []
    let path = []
    const dfs = (startIndex) => {
        ans.push(path.slice())
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(0)
    return ans
};
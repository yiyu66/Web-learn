// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  全排列 回溯
// path 已经选了那些数
// used 布尔数组
var permute = function (nums) {
    const res = [], used = []
    const dfs = (path) => {
        if (path.length === nums.length) { //排列长度够了
            res.push(path.slice()) //拷贝一份
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue //用过的数不用
            used[i] = true // 没用过的数标记一下已经push进去了
            path.push(nums[i])
            

            dfs(path) //继续向下搜索

            path.pop() // 回溯，状态重置，把最后的这个删掉
            used[i] = false
        }
    }
    dfs([])

    return res
};
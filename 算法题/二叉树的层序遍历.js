/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    let queue = [], res = []
    if (root !== null) queue.push(root)
    // 维护一个queue，每层开始时对应一个queue的长度。
    while (queue.length !== 0) {
        let n = queue.length
        let tempArr = []
        for (let i = 0; i < n; i++) {
            const item = queue.shift()
            tempArr.push(item.val)
            if (item.left !== null) {
                queue.push(item.left)
            }
            if (item.right !== null) {
                queue.push(item.right)
            }
        }
        res.push(tempArr)
    }
    return res
};
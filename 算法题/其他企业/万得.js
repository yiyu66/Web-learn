// 根据数组生成二叉树
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function createTree(arr) {
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    let node = queue.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
// let root = createTree([1, 2, 3, 4, 5, 6, 7]);
// let root = createTree([5, 3, 7, 9, null, 11, 2, 4, -1, null, null, 2, -2]);
let root = createTree([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  5,
  1,
  8,
  null,
  7,
  10,
  6,
  null,
  null,
  null,
]);
console.log(root);

// 二叉树路径查找
// 给定一棵二叉树(结构如下)，其中每个节点值为整数。给定一个值K，求所有满足如下条件的路径并将路径上节点的值打印出来：
// 返回路径上节点的值相加等于K的路径
var pathSum = function (root, sum) {
  if (root === null) {
    return 0;
  }
  let result = []; // 路径和为 sum 的路径数量
  let pathNum = 0; // 当前递归到的节点的路径和
  let pathArray = []; // 当前递归到的节点的路径数组
  var dfs = function (node, deep) {
    // console.log("deep", deep);
    deep += 1;
    pathNum = pathNum + node.val + deep; // 路径和 +1
    pathArray.push(node.val + deep); // 记录路径数组
    // console.log(pathArray, "sum", pathNum);
    if (pathNum === sum) {
      // 如果当前路径和等于sum，结果加1
      //   console.log("答案1", pathArray);
      let ansTemp = pathArray.slice();
      ansTemp = ansTemp.map((item, index) => item - index);
      result.push(ansTemp);
    }

    // 继续判断当前路径上是否存在路径和等于sum的路径
    let nowPathNum = pathNum;
    for (let i = 0; i < pathArray.length - 1; i++) {
      // 遍历判断当前路径上是否存在路径，使得路径和为 sum
      nowPathNum = nowPathNum - pathArray[i];
      if (nowPathNum === sum) {
        // console.log(pathArray, "答案2", pathArray.slice(i + 1));
        let ansTemp = pathArray.slice(i + 1);
        ansTemp = ansTemp.map((item, index) => item - index - i - 1);
        console.log("答案2", ansTemp);
        result.push(ansTemp);
      }
    }
    node.left && dfs(node.left, deep); // 如果左节点不为空则继续递归左节点
    node.right && dfs(node.right, deep); // 如果右节点不为空则继续递归右节点

    pathNum = pathNum - node.val - deep; // 尝试完毕该节点后还原路径和
    pathArray.pop(); // 尝试完毕该节点后还原路径数组
  };
  dfs(root, -1);
  return result;
};

let ans = pathSum(root, 35);
// console.log(ans);
ans.forEach((item) => {
  console.log(item.join(" "));
});

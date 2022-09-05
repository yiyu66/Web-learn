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

var pathSum = function (root, sum) {
  if (root === null) {
    return 0;
  }
  let result = []; // 路径和为 sum 的路径数量
  let pathNum = 0; // 当前递归到的节点的路径和
  let pathArray = []; // 当前递归到的节点的路径数组
  // deep为树的深度
  var dfs = function (node, deep) {
    deep += 1;
    pathNum = pathNum + node.val + deep; // 计算前缀和
    pathArray.push(node.val + deep); // 记录路径数组
    if (pathNum === sum) {
      let ansTemp = pathArray.slice();
      ansTemp = ansTemp.map((item, index) => item - index);
      result.push(ansTemp);
    }

    // 继续判断当前路径上是否存在路径和等于sum的路径
    let nowPathNum = pathNum;
    for (let i = 0; i < pathArray.length - 1; i++) {
      nowPathNum = nowPathNum - pathArray[i];
      if (nowPathNum === sum) {
        let ansTemp = pathArray.slice(i + 1);
        ansTemp = ansTemp.map((item, index) => item - index - i - 1);
        result.push(ansTemp);
      }
    }
    node.left && dfs(node.left, deep);
    node.right && dfs(node.right, deep);

    pathNum = pathNum - node.val - deep;
    pathArray.pop();
  };
  dfs(root, -1);
  return result;
};

let ans = pathSum(root, 35);
ans.forEach((item) => {
  console.log(item.join(" "));
});

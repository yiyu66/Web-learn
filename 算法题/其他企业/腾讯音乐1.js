// 给定一颗二叉树，二叉树的每个节点只有0或2个孩子。你需要对每个节点幅值一个正整数，使得每个节点的左右子树权值之和相等。你需要返回所有节点的最小权值之和。
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
let tree = createTree([0, 0, 0, 0, 0]);

console.log(tree);
// 给每一个叶子节点赋值1
// 从叶子节点开始向上赋值，每个节点的值为左右子树的最小值
function getTreeSum(tree) {
  if (tree === null) {
    return 0;
  }
  let sum = 0;
  const dfs = (root) => {
    // 没有子节点的情况
    if (!root.left) {
      root.val = 1;
      return 1;
    }
    let sumLeft = dfs(root.left);
    let sumRight = dfs(root.right);
    console.log("左右节点和", sumLeft, sumRight);
    // 如果两个子节点的值相等，那么当前节点的值就是两个子节点的值之和
    if (sumLeft === sumRight) {
      root.val = 1;
      return 1 + sumLeft + sumRight;
    } else {
      // 如果两个子节点的值不等，让两个子节点的值相等，然后当前节点的值为1
      if (sumLeft > sumRight) {
        sumRight = sumLeft;
      } else {
        sumLeft = sumRight;
      }
      root.val = 1;
      console.log("左右节点和111", sumLeft, sumRight);

      return sumLeft + sumRight + 1;
    }
  };
  sum = dfs(tree);
  return sum;
}

console.log("sum", getTreeSum(tree));
console.log(tree);


// sum对10^9+7取模，打印结果
console.log(sum % (10 ** 9 + 7));


// LeetCode 104 Easy

function TreeNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

var bstHeight = function (root) {
  if (root.left === null && root.right === null) return 0;

  const left = bstHeight(root.left);
  const right = bstHeight(root.right);

  return 1 + Math.max(left, right);
};

const root = new TreeNode(8);
root.left = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.right = new TreeNode(13);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(3);

console.log(bstHeight(root)); // [1, 4, 8, 3]

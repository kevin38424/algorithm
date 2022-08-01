// LeetCode 110

// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isBalanced = function (tree) {
  let isBalanced = true;
  function dfs(t) {
    if (!t) return -1;
    const left = dfs(t.left);
    const right = dfs(t.right);
    if (Math.abs(left - right) > 1) {
      isBalanced = false;
    }
    return 1 + Math.max(left, right);
  }
  dfs(tree);
  return isBalanced;
};

let tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

console.log(isBalanced(tree1));

let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.left = new TreeNode(2);
tree.left.right = new TreeNode(3);
tree.left.left = new TreeNode(3);
tree.left.left.right = new TreeNode(4);
tree.left.left.left = new TreeNode(4);

console.log(isBalanced(tree));

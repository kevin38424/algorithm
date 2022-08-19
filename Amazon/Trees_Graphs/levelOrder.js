// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

function levelOrder(root) {
  if (!root) return [];

  queue = [root];
  const result = [];
  while (queue.length) {
    const queueLength = queue.length;
    const subArr = [];
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      subArr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(subArr);
  }
  return result;
}

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Example 3:
// Input: root = [2,1], p = 2, q = 1
// Output: 2

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result;
  if (p.val === root.val || q.val === root.val) return root;
  if (
    (p.val < root.val && q.val > root.val) ||
    (p.val > root.val && q.val < root.val)
  )
    return root;

  if (p.val < root.val && q.val < root.val)
    result = lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val)
    result = lowestCommonAncestor(root.right, p, q);

  return result;
};

const tree = new TreeNode(6);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(0);
tree.left.right = new TreeNode(4);
tree.left.right.left = new TreeNode(3);
tree.left.right.right = new TreeNode(5);

tree.right = new TreeNode(8);
tree.right.left = new TreeNode(7);
tree.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(8)));

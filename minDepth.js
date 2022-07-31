function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}



var minDepth = function(root) {
    if (root===null) return 0;
    
    let min = Infinity;
    function getHeight(node, height = 0) {
        height++;
        if (node.left === null && node.right === null) {
            min = Math.min(min, height);
            return
        }
        
        if (node.left !== null) getHeight(node.left, height);
        if (node.right !== null) getHeight(node.right, height);
    }
    
    getHeight(root);
    return min;
};

let tree = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(4);
tree.right.right.right = new TreeNode(5);
tree.right.right.right.right = new TreeNode(6);

console.log(minDepth(tree))
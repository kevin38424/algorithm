/*

			8
    /		\
   4    13
  / \   / \
 1   6 15  3



*/

//tree is given as an input.
//return an output that contains list of smallest number in each path.
// input -> root node
// output -> array that has the smallest numbers in each path. 
// 8 -> 4 -> 1; smallest is 1
// 8 -> 4 -> 6; smallest is 4
// 8 -> 13 -> 15; smallest is 8
// 8 -> 13 -> 3; smallest is 3

//if there's no starting root, no tree at all, return empty [];

function TreeNode(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  
  
  function findMinInPath(root) {
    
    if (root === null) return [];
    
    //track every node in path in array
    // let nodes = [];
    //array that stores the smallest number in each path
    const minsInPath = [];
    
    function findMin(root, nodes=[]) {
      nodes.push(root.value);
      if (root.left === null && root.right === null) {
        const min = Math.min(...nodes);
        minsInPath.push(min);
        return;
      }
  
      findMin(root.left, nodes);
      nodes.pop();
      findMin(root.right, nodes);
      nodes.pop();
    }
    findMin(root);
    return minsInPath;
  }
  
  
  const root = new TreeNode(8);
  root.left = new TreeNode(4);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.right = new TreeNode(13);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(3);
  
  console.log(findMinInPath(root)); // [1, 4, 8, 3]
  
  
  
  
  
  
  
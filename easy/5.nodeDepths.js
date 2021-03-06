/**
 * RECURSIVE WAY
 * Avg: 
 *  time = O(n) -> because has to pass for all nodes
 *  space = O(h) -> the calls to save value into stack will be tree depth
 *                  where h is the height of the tree
 */


// SOLUTION ONE:
// O(n) time | O(h) space
const nodeDepths = (root) => {
	let depthResult = nodeDepthsHelper(root, 0, [])
	return depthResult.reduce((acc, item) => acc + item, 0)
}

const nodeDepthsHelper = (currentNode, depth, depthResult) => {
	depthResult.push(depth)
	
	if(currentNode.left) {
		nodeDepthsHelper(currentNode.left, depth + 1, depthResult)
	}
	
	if(currentNode.right) {
		nodeDepthsHelper(currentNode.right, depth + 1, depthResult)
	}
	
	return depthResult
}

// SOLUTION TWO
// O(n) time | O(h) space
function nodeDepths(root) {
  // Write your code here.
	return nodeDepthsHelper(root, 0)
}

function nodeDepthsHelper(currentNode, depth) {	
	if(!currentNode) return 0
	return depth + nodeDepthsHelper(currentNode.left, depth + 1) + nodeDepthsHelper(currentNode.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = {
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);


  console.log(nodeDepths(root))
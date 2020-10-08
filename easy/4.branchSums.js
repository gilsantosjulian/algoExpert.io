/**
 * RECURSIVE WAY
 * Avg: 
 *  time = O(n) -> because has to pass for all nodes
 *  space = O(1)
 * 
 * Worst: 
 *  time = O(n)
 *  space = O(1)
 */


class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSums = (root) => {
	let sumResult = []
  return branchSumsHelper(root, root.value, sumResult)
}

const branchSumsHelper = (currentNode, sum, sumResult) => {
	if(!currentNode.left && !currentNode.right) {
		sumResult.push(sum)
	}
	
	if(currentNode.left) {
		branchSumsHelper(currentNode.left, sum + currentNode.left.value, sumResult)
	}
	
	if(currentNode.right) {
		branchSumsHelper(currentNode.right, sum + currentNode.right.value, sumResult)
	}

	return sumResult
}

const tree = {
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": "10", "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10}
    ],
    "root": "1"
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(branchSums(root))

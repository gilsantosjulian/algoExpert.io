/**
 * RECURSIVE WAY
 * Avg: 
 *  time = O(lg(n))
 *  space = O(1)
 * 
 * Worst: 
 *  time = O(n)
 *  space = O(1)
 */

const findClosestValueInBst = (tree, target) => {
  return findClosestValueHelper(tree, target, tree.value)
}

const findClosestValueHelper = (tree, target, closest) => {
  if (tree === null) return closest

  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value
  }

  if (target > tree.value) {
    return findClosestValueHelper(tree.right, target, closest)
  }

  if (target < tree.value) {
    return findClosestValueHelper(tree.left, target, closest)
  }

  return tree.value
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const caseOne = {
  "tree": {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "13", "left": null, "right": "14", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
  },
  "target": 12
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

const expected = 13;

console.log(findClosestValueInBst(root, 12))


/**
 * ITERATIVE WAY
 * Avg: 
 *  time = O(lg(n))
 *  space = O(1)
 * 
 * Worst: 
 *  time = O(n)
 *  space = O(1)
 */


 const findClosestValueInBstIter = (tree, target) => {
   return findClosestValueHelperIter(tree, target)
 }

 const findClosestValueHelperIter = (tree, target) => {
  let closest = tree.vale
  let currentNode = tree
  while (currentNode !== null) {
    
    if (Math.abs(target - closest) > Math.abs(target - currentNode))
      closest = currentNode.value
    
    if (target > currentNode.value)
      currentNode = currentNode.right

    if (target < currentNode.value)
      currentNode = currentNode.left

    return currentNode.value
  }
 }


 console.log(findClosestValueInBstIter(root, 12))
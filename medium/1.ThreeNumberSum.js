/**
 * Three Number Sum

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.

  If no three numbers sum up to the target sum, the function should return an empty array

  Sample Input
  array  = [12, 3, 1, 2, -6, 5, -8, 6]
  targetSum = 0

  Sample Output
  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

 */


// SOLUTION ONE
 const threeNumberSum = (array, targetSum) => {
  // Write your code here.
	let triplets = []
	let triplet = []
	let length = array.length
	let arraySorted = array.sort((a, b) => (a - b))
	for(let i=0; i<length; i++) {
		let num1 = arraySorted[i]
		for(let j=i+1; j<length; j++) {
			let num2 = arraySorted[j]
			for(let k=j+1; k<length; k++) {
				let num3 = arraySorted[k]
				if((num1 + num2 + num3) === targetSum) {
					triplet = [num1, num2, num3].sort((a, b) => (a - b))
					triplets.push(triplet)
				}
			}
		}	
	}	
	return triplets
}

const array = [12, 3, 1, 2, -6, 5, -8, 6]
const targetSum = 0

console.log(threeNumberSum(array, targetSum))


// SOLUTION TWO
// O(n^2) time | O(n) space
const threeNumberSum2 = (array, targetSum) => {
	let triplets = []
	for(i=0; i<array.length; i++) {
		array = array.sort((a, b) => a - b)
		let left = i+1
		let right = array.length -1
		while(left < right) {
			currentSum = array[i] + array[left] + array[right]
			if(currentSum === targetSum) {
				triplets.push([array[i], array[left], array[right]])
				left++
				right--
			} else if(currentSum < 0) {
				left++
			} else if(currentSum > 0) {
				right--
			}
		}
	}
	return triplets
}

console.log(threeNumberSum2(array, targetSum))
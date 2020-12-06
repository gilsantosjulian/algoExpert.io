/**
 * Smallest Difference
 * 
    Write a function that takes in two non-empty arrays of integers, finds the
    pair of numbers (one from each array) whose absolute difference is closest to
    zero, and returns an array containing these two numbers, with the number from
    the first array in the first position.

     Note that the absolute difference of two integers is the distance between
    them on the real number line. For example, the absolute difference of -5 and 5
    is 10, and the absolute difference of -5 and -4 is 1.

    Sample Input
    arrayOne = [-1, 5, 10, 20, 28, 3]
    arrayTwo = [26, 134, 135, 15, 17]

    Sample Output
    [28, 26]

 */

// Solution
// O(nln(n) + mln(n)) =  -> where n and m are input arrays | O(1) space
const smallestDifference = (arrayOne, arrayTwo) => {
  let idx1 = 0
  let idx2 = 0
  let smallestDifference = []
	arrayOne = sort(arrayOne)
	arrayTwo = sort(arrayTwo)
	let absoluteDiff = Math.abs(arrayOne[0] - arrayTwo[0])
	
	while(idx1 < arrayOne.length && idx2 < arrayTwo.length) {
		let p1 = arrayOne[idx1]
		let p2 = arrayTwo[idx2]
		const diff = Math.abs(p1 - p2)
		
		if(p1 < p2) idx1++
		else if(p1 > p2) idx2++
		else return [p1, p2]
		
		if(diff < absoluteDiff) {
			absoluteDiff = diff
			smallestDifference = [p1, p2]
		}
	}
	return smallestDifference
}

const sort = (arr) => {
	return arr.sort((a,b) => a - b)
}

// O(n) time for the main array | O(1) just a couple of indexes
const isValidSubsequence = (array, sequence) => {
	let arrIdx = 0
	let seqIdx = 0
	
	while(arrIdx < array.length && seqIdx < sequence.length) {
		if(sequence[seqIdx] === array[arrIdx]) seqIdx++
		arrIdx++
	}
	return seqIdx === sequence.length
}

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const subsequence = [1, 6, -1, 10]

const isValidSubsequenceFor = (array, sequence) => {
	let seqIdx = 0
	for (let arrIdx = 0; arrIdx < array.length; arrIdx++) {
		if (sequence[seqIdx] === array[arrIdx]) {
			seqIdx++
		}
		if (seqIdx === sequence.length)
			return true
	}
	return false
}

console.log(isValidSubsequence(array, subsequence))
console.log(isValidSubsequenceFor(array, subsequence))
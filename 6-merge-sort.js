/**
 * Merge sort
 *
 * Merge sort best usage:
 *
 * 1. Huge data and you have a good memory
 *
 */

const arrayToSort = [1, 4, 63, 324, 547, 57, 5, 12, 87, 45, 23];

const mergeSort = (array) => {
	if (array.length === 1) return array;

	const length = array.length;
	const middle = Math.floor(length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.debug('Merge sort --->', mergeSort(arrayToSort));

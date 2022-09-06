/**
 * Selection sort
 *
 * Selection sort best usage:
 *
 * Is rarely used, its only for educational purpose
 *
 *
 */

const arrayToSort = [1, 4, 63, 324, 547, 57, 5, 12, 87, 45, 23];

const selectionSort = (array) => {
	const length = array.length;

	for (i = 0; i < length; i++) {
		let min = i;
		let temp = array[i];

		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}

		array[i] = array[min];
		array[min] = temp;
	}

	return array;
};

console.debug('Selection sort --->', selectionSort(arrayToSort));

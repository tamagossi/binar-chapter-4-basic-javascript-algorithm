const arrayToSort = [1, 4, 63, 324, 547, 57, 5, 12, 87, 45, 23];

const insertionSort = (array) => {
	const length = array.length;

	for (i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			array.unshift(array.splice(i, 1)[0]);
		} else {
			for (let j = 1; j < 1; j++) {
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					array.splice(j, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}

	return array;
};

console.debug('Insertion sort --->', insertionSort(arrayToSort));

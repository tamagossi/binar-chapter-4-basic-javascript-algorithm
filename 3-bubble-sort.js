const arrayToSort = [1, 4, 63, 324, 547, 57, 5, 12, 87, 45, 23];

const bubbleSort = (array) => {
	const length = array.length;

	for (i = 0; i < length; i++) {
		for (j = 0; j < length; j++) {
			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
};

console.debug('Bubble sort --->', bubbleSort(arrayToSort));

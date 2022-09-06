const numbers = [1, 4, 5, 2, 5, 3];
const text =
	'Maaf ni ya, jikalau Dr. Richard nyuntik saya pake jarum abocath dan saya kebal, mau kasih apa?';

const someObject = [
	{ name: 'Tama', weight: 60 },
	{ name: 'Nurul', weight: 55 },
	{ name: 'Rifki', weight: 52 },
	{ name: 'Odillo', weight: 55 },
	{ name: 'Khanti', weight: 57 },
];

// --- Basic sorting ---
console.debug('Basic sorting  --->', numbers.sort());
console.debug('Basic sorting  --->', text.split(' ').sort());
console.debug(
	'Basic sorting  --->',
	numbers.sort((a, b) => a - b)
);
console.debug(
	'Basic sorting  --->',
	numbers.sort((a, b) => b - a)
);

// --- Sorting an object ---

console.debug(
	'Sort object    --->',
	someObject.sort((a, b) => a.weight - b.weight)
);

// -- The problem with .sort()

const randomNumbers = [1, 45, 2, 34, 6, 90, 11, 59, 22, 3];
console.debug('Sorting problem --->', randomNumbers.sort());

// --- Sorting algorithm

const arrayToSort = [1, 4, 63, 324, 547, 57, 5, 12, 87, 45, 23];

// --- Bubble sort

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

// --- Selection sort

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

// --- Insertion sort

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

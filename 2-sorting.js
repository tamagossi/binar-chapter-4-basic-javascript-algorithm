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

const numbers = [1, 4, 5, 2, 8, 3];
const text = 'Maaf maaf ni ya, jikalau Dr. Richard dapat nyuntik saya pake jarum abocath';

console.debug('Sort basic usage', numbers.sort());
console.debug(
	'Basic sorting asc',
	numbers.sort((a, b) => a - b)
);
console.debug(
	'Basic sorting desc',
	numbers.sort((a, b) => b - a)
);

console.debug('Sotring a string', text.split(' ').sort());

const people = [
	{ name: 'Tama', weight: 60 },
	{ name: 'Nurul', weight: 55 },
	{ name: 'Rifki', weight: 52 },
	{ name: 'Odillo', weight: 55 },
	{ name: 'Khanti', weight: 57 },
];

console.debug(
	'sotring array of object',
	people.sort((a, b) => a.weight - b.weight)
);

const randomNumbers = [1, 45, 2, 34, 6, 90, 11, 59, 22, 3];

console.log(randomNumbers.sort());

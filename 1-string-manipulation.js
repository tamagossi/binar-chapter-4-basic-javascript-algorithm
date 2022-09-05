const someString = 'Hallo I am a string';

// --- Determina a length of a string ---
console.debug('A length of a string     -->', someString.length);

// --- Determina a character at some index ---

console.debug('A string at index 3      -->', someString.charAt(3));

// --- Merging two strings int one ---

const string1 = 'Clean';
const string2 = 'Code';

console.debug('Merge string1 & string2  -->', string1.concat(' ').concat(string2));
console.debug('Merge string1 & string2  -->', `${string1} ${string2}`);
console.debug('Merge string1 & string2  -->', string1 + ' ' + string2);

// -- Check if string contains some string --

console.debug('someString have I am     -->', someString.includes('I am'));
console.debug('someString have You are  -->', someString.includes('You are'));

// -- Replace soeme string within a string --

const nameRegex = /^[a-zA-Z]+$/;

console.debug('Replace hallo with hai   -->', someString.replace('Hallo', 'Hai'));
// console.debug('Replace space with dash  -->', someString.replaceAll(' ', '-')); // Only works in newer browser and NodeJS 15+

// -- Split a string --

console.debug('Split a string by space  -->', someString.split(' '));
console.debug('Split a string by space  -->', someString.substring(1, 3));
console.debug('Split a string by space  -->', `       ${someString}     `.substring(3));

// -- To lower case and uppercase --

console.debug('To upper case string     -->', someString.toUpperCase());
console.debug('To lower case string     -->', someString.toLowerCase());

// -- Trim string ---

console.debug('Trim all the space       -->', someString.trim());

const fs = require('fs');

const readFromFile = (path) => {
	try {
		const data = fs.readFileSync(path);

		return data.toString();
	} catch (e) {
		console.log('Error:', e.stack);
	}
};

const writeFile = (fileName, data) => {
	try {
		fs.writeFile(fileName, data, (err) => {
			if (err) return console.error(err);
		});
	} catch (e) {
		console.log('Error:', e.stack);
	}
};

const removeSpaceFromFile = () => {
	const text = readFromFile('./file.txt');
	const textWihoutSpace = text.replace(/ /g, '');

	writeFile('file-without-space.txt', textWihoutSpace);
};

removeSpaceFromFile();

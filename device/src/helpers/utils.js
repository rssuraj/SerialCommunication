const fs = require('fs');

const convertASCIIToChar = (ascii) => {
    return String.fromCharCode(+ascii);
};

const readFile = (file) => {
    const buffer = fs.readFileSync(file);
    return JSON.parse(buffer.toString());
};

module.exports = {
    convertASCIIToChar,
    readFile
};
const { convertASCIIToChar, readFile } = require('../helpers/utils');
const { commandToFieldMapper } = require('../helpers/constants');
const path = require('path');

// Keeps track of current command
let currentCommand = "";

// Process the command untill newLine is encounters for sending response
const processCommand = (command) => {
    const charCommand = convertASCIIToChar(command);

    if(charCommand === "\n") {
        const field = commandToFieldMapper[currentCommand];
        console.log(`Received Command: ${currentCommand}\\n`);
        currentCommand = "";

        if(!field) {
            console.log('Invalid Command received');
            return "";
        }

        console.log('Command recognized');
        const deviceData = readFile(path.join(__dirname, '../device.json'));
        return deviceData[field];
    }

    console.log(`Received Command: ${currentCommand}${charCommand}`)
    currentCommand += charCommand;

    return "";
};

module.exports = processCommand
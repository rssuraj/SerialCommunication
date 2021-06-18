// Asynchronous network API for creating stream-based IPC servers and clients
const net = require('net');
const { convertCharToASCII, sleep } = require('../helpers/utils');
const readline = require('readline'); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
});

const printCommands = () => {
    console.log('=============================================================');
    console.log('Please enter one of the following commands');
    console.log('"N" - To fetch the device name');
    console.log('"S" - To fetch the device serial number');
    console.log('"ST" - To fetch the device status');
    console.log('"CIC" - To fetch the current items placed in the device');
    console.log('"MIC" - To fetch the max items that can be placed in the device');
    console.log('"E" - To disconnect the driver from device')
    console.log('=============================================================');
};

const sendCommand = async (commands) => {
    // Marks the end of a command
    const newLineAscii = convertCharToASCII("\n");

    for(let i = 0; i < commands.length; i++) {
        const asciiCommand = convertCharToASCII(commands[i]);
        client.write(asciiCommand);

        // Sleep for commands to be send separately
        await sleep(2000);
    }

    // Sleep for commands to be send separately
    await sleep(2000);

    client.write(newLineAscii);
};

const sendCommands = () => {

    // Show the valid commands supported by device
    printCommands();

    rl.on('line', (input) => {
        switch(input) {
            case 'N': {
                // Send the Device Name
                // Command "N"
                console.log('Send the Device Name');
                console.log('Sending Command: "N\\n"');
                sendCommand([ "N" ]);
                break;
            }
            case 'S': {
                // Send the Device Serial Number
                // Command "S"
                console.log('Send the Device Serial Number');
                console.log('Sending Command: "S\\n"');
                sendCommand([ "S" ]);
                break;
            }
            case 'ST': {
                // Send the Device Status
                // Command "ST"
                console.log('Send the Device Status');
                console.log('Sending Command: "ST\\n"');
                sendCommand([ "S", "T" ]);
                break;
            }
            case 'CIC': {
                // Send the Device Current Item Count
                // Command "CIC"
                console.log('Send the Device Current Item Count');
                console.log('Sending Command: "CIC\\n"');
                sendCommand([ "C", "I", "C" ]);
                break;
            }
            case 'MIC': {
                // Send the Device Maximum Item Count
                // Command "MIC"
                console.log('Send the Device Maximum Item Count');
                console.log('Sending Command: "MIC\\n"');
                sendCommand([ "M", "I", "C" ]);
                break;
            }
            case 'E': {
                // Disconnect the driver and exit Nodejs application
                client.end();
                process.exit(1);
            }
            default: {
                console.log('Invalid command entered, Please try again');
            }
        }
    });
};

// Create a socket and establish connection with server on specified port
const SERVER_PORT = process.env.SERVER_PORT;
const client = net.createConnection({ port: SERVER_PORT }, () => {
    console.log('Driver online');

    sendCommands();
});

module.exports = client;
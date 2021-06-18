const { sleep } = require('../../../driver/src/helpers/utils');
const processCommand = require('../processor/command');

// 'error' event callback
const error = (error) => {
    // PORT provided fro server already in use
    if (e.code === 'EADDRINUSE') {
        console.error('Address in use, retrying...');
        setTimeout(() => {
          server.close();
          server.listen(PORT, HOST);
        }, 1000);
    }
    else {
        // Any other error
        console.error('Server Error', error);
    }
};

const clientError = (error) => {
    console.log("Driver has errored out.", error);
};

const clientClose = () => {
    console.log("Driver has disconnected.");
};

// 'connection' event callback
const connection = (socket) => {
    // 'close' event when driver disconnects
    socket.once("close", clientClose);

    // 'error' event when driver raises any error
    socket.on("error", clientError);

    // 'data' event to capture the messages sent from Driver
    socket.on("data", async (message) => {
        // Send command to processor
        const response = processCommand(message.toString());

        // If valid command recognized, then we get the reponse
        if(response) {
            // Wait before printing next console output
            await sleep(2000);

            console.log(`Sending Response: ${response}`);

            socket.write(response);
        }

        console.log('Listening...');
    });
};

module.exports = {
    error,
    connection
}
// Setup net module server for IPC communication
const server = require('./config/server');

// Server starts listening on configured PORT
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Device online on port ${PORT}`);
    console.log('Listening...');
});
// Asynchronous network API for creating stream-based IPC servers and clients
const net = require('net');
const { error, connection } = require('./events');

// Create an IPC based server
const server = net.createServer();

// Any error occurred on server is sent via event 'error'
server.on('error', error);

// Client connection event 'connection'
server.on("connection", connection);

module.exports = server;
const client = require('./config/client');
const { end, data } = require('./config/events');

// Data sent from server is caught by event 'data'
client.on('data', data);

// Cleanup to perform on client connection closed
client.on('end', end);
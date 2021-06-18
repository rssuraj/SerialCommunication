const end = () => {
    console.log('Driver has disconnected from device');
};

const data = (message) => {
    console.log(`Device Response: ${message.toString()}`);
};

module.exports = {
    end,
    data
}
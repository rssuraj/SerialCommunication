const convertCharToASCII = (char) => {
    return char.charCodeAt(0) + "";
};

const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

module.exports = {
    convertCharToASCII,
    sleep
};
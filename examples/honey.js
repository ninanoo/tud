var tud = require('../')({ showProcessInitExitLog: { init: false } });

if (process.connected)
    process.on('message', function processOnMessageCallback(message) {
        console.log('received message : ' + message);
        process.disconnect();
    });
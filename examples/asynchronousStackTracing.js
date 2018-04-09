var tud = require('../')({
    showProcessInitExitLog: false,
    showProcessEventLog: false,
    nodeAsyncCallLog: true,
    userAsyncCallLog: true,
    nodeStackViewLvl: 'off',
    userStackViewLvl: 'app'
});

function httpOnCloseCallback() {
    process.nextTick(function nextTickCallback() {
        console.log('Server is closed.');
    });
}
function httpListenCallback() {
    console.log('Server is listening.');
    setTimeout(
        function setTimeoutCallback(){ server.close() }, 3000
    );
}
var server = require('http').createServer()
    .on('close', httpOnCloseCallback)
    .listen(8080, httpListenCallback)
;
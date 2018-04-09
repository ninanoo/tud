var tud = require('../')({
    showProcessInitExitLog: false,
    showProcessEventLog: false,
    nodeAsyncCallLog: true
});

var fs = require('fs');
fs.readFile('notExistPath', function(err, data) {
    if (err) {
        __e(err, 'Here is optional debugging message.');
        fs.readFile(__filename, function(err, data) {
            err ? __e(err) : __('data.length', data.length);
        });
    } else {
        __('data.length', data.length);
    }
});
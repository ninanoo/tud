var tud = require('../')({ showProcessInitExitLog: { init: false } });

console.log('I am a dad.');

var child = require('child_process').fork('honey.js');
if (child.connected) child.send('Good night, honey ~');
var tud = require('../')({ showProcessInitExitLog: { init: false } });

console.log('I am a grandpa.');

var child_process = require('child_process');
var child1 = child_process.spawn('node', ['dad.js'], {stdio: 'inherit'});
var child2 = child_process.spawn('node', ['mom.js'], {stdio: 'pipe'});
child2.stdout.on('data', function(chunk){ process.stdout.writeNative(chunk) });
child2.stderr.on('data', function(chunk){ process.stderr.writeNative(chunk) });
var assert = require('assert');
var _module = require('module');
var events = require('events');
var EventEmitter = events.EventEmitter;
var stream = require('stream');
var child_process = require('child_process');
// var cluster = require('cluster');
var net = require('net');
var dgram = require('dgram');
var url = require('url');
var querystring = require('querystring');
var dns = require('dns');
// var http = require('http');
var crypto = require('crypto');
var tls = require('tls');
// var https = require('https');
var timers = require('timers');
var domain = require('domain');
var string_decoder = require('string_decoder');
var StringDecoder = string_decoder.StringDecoder;
var buffer = require('buffer');
var path = require('path');
var tty = require('tty');
var os = require('os');
var fs = require('fs');
var readline = require('readline');
var util = require('util');
var zlib = require('zlib');
var punycode = require('punycode');
var repl = require('repl');
var vm = require('vm');
// var v8 = require('v8');



var tudConfig = require('./tudConfig.js');

var dest = require('./loggerPathPrefix.js');



var loggerPipeAll = new stream.PassThrough();
loggerPipeAll.pipe(fs.createWriteStream(dest + 'pipeStdAll.log'));

tudConfig.logger = tudConfig.logger.concat([
    { type: 'pipe', data: 'out', dest: dest + 'pipeStdOut.log' },
    { type: 'pipe', data: 'err', dest: fs.openSync(dest + 'pipeStdErr.log', 'w') },
    { type: 'pipe', data: 'all', dest: loggerPipeAll }
]);
tudConfig.untouchableStdin = true;
// tudConfig.showLoggerEventLog = false;



// tudConfig.nodeAsyncCallLog = {
//     ntick : { add: false, run: false },
//     timer : { add: false, run: false },
//     event : { add: false, run: false, init: false, emit: false }
// };
tudConfig.nodeAsyncCallLog = true;
// tudConfig.nodeAsyncCallLog = false;

// tudConfig.userAsyncCallLog = {
//     ntick : { add: true, run: true },
//     timer : { add: true, run: true },
//     event : { add: true, run: true, init: true, emit: true }
// };
tudConfig.userAsyncCallLog = true;
// tudConfig.userAsyncCallLog = false;

tudConfig.nodeStackViewLvl = 'off';
// tudConfig.nodeStackViewLvl = 'app';
// tudConfig.nodeStackViewLvl = 'sys';
tudConfig.userStackViewLvl = 'off';
// tudConfig.userStackViewLvl = 'app';
// tudConfig.userStackViewLvl = 'sys';

tudConfig.showConfigurationLog = true;

// tudConfig.showProcessInitExitLog.init = false;
// tudConfig.showProcessInitExitLog.exit = false;

tudConfig.showProcessEventLog = true;

// tudConfig.showSpawnLog = false;



var tud = require('../index.js')(tudConfig);



// tud('tud', tud);
// tud('global', global);

// tud.injectTest(function(){
//    
// }, true);

// tud.d('tud.injectTest()', tud.injectTest(function(){
//    
// }));







var tests = [
    'test-10-inspect.js',
    'test-10-processStdioWriteHooking.js',
    'test-20-stackTrace.js',
    'test-30-nextTickHooking.js',
    'test-40-timerFunctionsHooking.js',
    'test-50-eventsHooking1.js',
    'test-50-eventsHooking2.js',
    'test-60-childProcessHooking.js', // TODO: check logger sync ?
    'test-70-cluster.js',
    // 'all.js',
].reverse();
tests.forEach(function(val, idx, arr){ arr[idx] = path.resolve(__dirname, val) });

function spawnTests() {
    if (!tests.length) return;
    var child, test = tests.pop();
    // process.stdout.writeNative(
    //     '\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++' +
    //     '\n+ next test : ' + test +
    //     '\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n\n'
    // );
    child = child_process.spawn('node', [test], { stdio: [0, 1, 2] }) // TODO: child debug
    // child = child_process.spawn('node', ['--inspect=localhost:8080', '--debug-brk', test], { stdio: [0, 1, 2] })
    // child = child_process.spawn('node', ['--debug', '--debug-brk', test], { stdio: [0, 1, 2] })
        .once('exit', function(code, signal){
            // __m('code: ' + code, 'signal: ' + signal);
            spawnTests();
        });
}
spawnTests();








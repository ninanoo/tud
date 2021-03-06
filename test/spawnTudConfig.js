var tudConfig = module.exports = exports = require('./tudConfig.js');

// tudConfig.useStdioWriteSync = true;

// tudConfig.nodeAsyncCallLog = {
//     ntick : false,
//     timer : false,
//     // event : { add: true, run: true, init: false, emit: false }
//     // event : { add: false, run: false, init: true, emit: true }
//     event : false
// };
tudConfig.nodeAsyncCallLog = true;
// tudConfig.nodeAsyncCallLog = false;

// tudConfig.userAsyncCallLog = {
//     ntick : { add: true, run: true },
//     timer : { add: true, run: true },
//     event : { add: true, run: true, init: true, emit: true }
//     // event : { add: true, run: true, init: false, emit: false }
// };
tudConfig.userAsyncCallLog = true;

tudConfig.nodeStackViewLvl = 'off';
// tudConfig.nodeStackViewLvl = 'app';
// tudConfig.nodeStackViewLvl = 'sys';
// tudConfig.userStackViewLvl = 'off';
tudConfig.userStackViewLvl = 'app';
// tudConfig.userStackViewLvl = 'sys';
// tudConfig.userStackViewLvl = { asyncCall: 'off', debugCall: 'app' };
// tudConfig.userStackViewLvl = { asyncCall: 'app', debugCall: 'all' };

// tudConfig.logger = [
//     { type: 'file', data: 'out', dest: 'fileStdOut_' + process.pid + '.log' },
//     { type: 'file', data: 'err', dest: 'fileStdErr_' + process.pid + '.log' },
//     { type: 'file', data: 'all', dest: require('fs').openSync('fileStdAll_' + process.pid + '.log', 'w') }
// ];




var fs = require('fs');
var dest = require('./loggerPathPrefix.js');



module.exports = exports = {
    
    stdioSyncMode : true,
    
    // redirectStderrToStdout : false,
    // untouchableStdin : false,
    
    // logger : { dest: global.passThrough = new stream.PassThrough() },
    // logger : { type: 'file', dest: global.fd = fs.openSync(path.resolve(__dirname,'fileStdAllAppend.log'),'a') },
    logger : [
        { type: 'file', data: 'out', dest: dest + 'fileStdOut.log' },
        { type: 'file', data: 'err', dest: dest + 'fileStdErr.log' },
        { type: 'file', data: 'all', dest: fs.openSync(dest + 'fileStdAll.log', 'w') }
    ],
    // showLoggerEventLog : true,
    
    // nodeAsyncCallLog : {
    //     // ntick : { add: true, run: true },
    //     // timer : { add: true, run: true },
    //     // event : { add: true, run: true, init: true, emit: true }
    //    
    //     ntick : { add: false, run: false },
    //     timer : { add: false, run: false },
    //     event : { add: false, run: false, init: false, emit: false }
    // },
    // nodeAsyncCallLog : true,
    
    // userAsyncCallLog : {
    //     // ntick : { add: false, run: false },
    //     // timer : { add: false, run: false },
    //     // event : { add: false, run: false, init: false, emit: false }
    //    
    //     ntick : { add: false, run: false },
    //     timer : { add: false, run: false },
    //     event : { add: false, run: false, init: false, emit: false }
    // },
    // userAsyncCallLog : false,
    
    nodeStackViewLvl : 'off',
    // nodeStackViewLvl : 'app',
    // nodeStackViewLvl : 'all',
    userStackViewLvl : 'off',
    // userStackViewLvl : 'app',
    // userStackViewLvl : 'all',
    // userStackViewLvl : { asyncCall: 'all', debugCall: 'app' },
    
    
    webstormConsoleSrcPath : 'D:\\workspace\\ws\\tud',
    // webstormConsoleSrcPath : '.',
    
    webstormConsoleLibPath : 'D:\\tools\\nodejs\\lib',
    // webstormConsoleLibPath : 'D:\\tools\\nodejs\\node-current-src\\lib',
    // webstormConsoleLibPath : 'D:\\workspace\\ws\\tud\\node_lib',
    
    
    defaultConsoleColumns : 132,
    // defaultInspectOptions : {
    //     showHidden      : true,
    //     depth           : null,
    //     colors          : true,
    //     customInspect   : true,
    //     showProxy       : true,
    //     maxArrayLength  : 100,
    //     breakLength     : 80
    // },
    // useConsoleAnsiColor : false,
    
    showConfigurationLog : false,
    
    showProcessInitExitLog : {
        // init : false,
        // exit : false
    },
    // showProcessEventLog : false,
    
    // showSpawnLog : false,
    
    // useGlobalTwoUnderscoreAPIs : false,
    
    // showSucceededCheckLog : true,
    bypassFailedCheck : false,
    
    // handleProcessUncaughtException : false
    
};




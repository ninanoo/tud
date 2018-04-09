var tty = require('tty');
var semver = require('semver');



module.exports = exports = {
    
    useStdioWriteSync : false,
    
    redirectStderrToStdout : process.platform === 'win32',
    
    // use 'ignore' or 'pipe' for childProcess.stdin
    untouchableStdin : !tty.isatty(0)
        && process.platform === 'win32'
        && semver.lt(semver.coerce(process.version), semver.coerce('4.0.0'))
    ,
    
    // logger [
    //     {      type : 'file' | <default> 'pipe'
    //          , data : 'out'  | 'err' | <default> 'all'
    //          , dest : {string} filePath | {number} fileDescriptor | {stream.Writable} writableStream
    //     },,,
    // ]
    logger : [],
    
    nodeAsyncCallLog : {
        async : {             run: false, init: false },             // == async : false
        ntick : { add: false, run: false },                          // == ntick : false
        timer : { add: false, run: false },                          // == timer : false
        event : { add: false, run: false, init: false, emit: false } // == event : false
    }, // == nodeAsyncCallLog : false
    
    userAsyncCallLog : {
        async : {            run: true, init: true },            // == async : true
        ntick : { add: true, run: true },                        // == ntick : true
        timer : { add: true, run: true },                        // == timer : true
        event : { add: true, run: true, init: true, emit: true } // == event : true
    }, // == userAsyncCallLog : true
    
    nodeStackViewLvl : 'off', // 'off' | 'app' | 'mod' | 'sys' | 'all'
    userStackViewLvl : { asyncCall: 'app', debugCall: 'app' },
    
    webstormConsoleSrcPath : '', // project app root directory ( use '.' for relative path )
    webstormConsoleLibPath : '', // node source's root lib directory
    
    defaultConsoleColumns : process.stdout.columns,
    defaultInspectOptions : {
        showHidden      : false,
        depth           : 0,
        colors          : true,
        customInspect   : true,
        showProxy       : false,
        maxArrayLength  : 32,
        breakLength     : 60
    },
    useConsoleAnsiColor : true,
    
    showConfigurationLog : false, // tud's startup console output which is printed before process init log
    
    showProcessInitExitLog : {
        init : true,
        exit : true
    },
    showProcessEventLog : true, // showProcessEventLog ? process.showTudEventLog() : process.hideTudEventLog()
    
    showSpawnLog : true,
    
    useGlobalTwoUnderscoreAPIs : true,
    
    showSucceededCheckLog : false,
    bypassFailedCheck : true,
    
    handleProcessUncaughtException : true // if true, tud adds the process uncaughtException event handler
    
};




###### ※ This is a tool made for my work for a while.<br/><br/>The [source](https://github.com/ninanoo/tud/blob/master/index.js) is not for cooperation, but rather a mixture of engine and view code.

<br/>

## tud ( Two Underscore Debugger )<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is Asynchronous Stack Trace Framework to debug [Node.js](http://nodejs.org) applications

```js
01: var tud = require('tud')();
02: 
03: setTimeout(
04:     function helloWorld(){ console.log('Hello World') }, 3000
05: );
```

![consoleOutput](examples/intro.png?raw=true "consoleOutput")

<br/>

# Installation

Node.js 0.10 or higher is supported.

```bash
$ npm install tud
```

<br/>

# Features

You do not need to modify your code to use tud. Just by including tud, you can view the fully traced asynchronous function call stacks and track the flow of the application currently operating.

> * **trace of asynchronous function call stacks**
> * **trace of node system objects derived from EventEmitter class**
> * **trace of process creation and termination**
> * **categorized logging of multiple processes' console output**
> * **debugging APIs which has no effect on user code**
> * **support for WebStorm run and debug console**

Tud hooks the Node.js's `child_process`, `events`, `timers` module and `process.nextTick` function at the top of user's main application code, and it uses `async_wrap` binding and `async_hooks` module for the asynchronous io calls mainly raised by the modules like `fs` and `net`.

Tud provides logging for stdout and stderr but it is not intended for operating mode logger. And it can not be used with modules that use `Error.prepareStackTrace()` or other hooking techniques.

<br/>

# Usage

> - **[Stack View](#stack-view)**
> - **[Asynchronous Stack Tracing](#asynchronous-stack-tracing)**
> - **[Parallel Processes Tracing](#parallel-processes-tracing)**
> - **[Console Output Logging](#console-output-logging)**
> - **[Debugging APIs](#debugging-apis)**
> - **[Default Options](#default-options)**

<br/>

## Stack View

There are two types of stacks. One is the stack of asynchronous function call or debugging API call called from user code. The other is the asynchronous function call stack called from node libraries or npm modules. And there are two types of options for each. One is `nodeAsyncCallLog` and `userAsyncCallLog` which determine what is logged. The other is `nodeStackViewLvl` and `userStackViewLvl` which determine whether it shows full stack or not.

For the support of the functionality to go directly to the source code by clicking on the stack call line in WebStorm console, there are two options: `webstormConsoleSrcPath` and `webstormConsoleLibPath`. Each changes application root path and node system modules' root path.

```js
01: var tud = require('tud')({
02:     showProcessInitExitLog: false,
03:     nodeStackViewLvl: 'off',
04:     userStackViewLvl: { asyncCall: 'app', debugCall: 'sys' }
05: });
06: 
07: setTimeout(
08:     function helloWorld(){ console.log('Hello World') }, 3000
09: );
```

![consoleOutput](examples/stackView.png?raw=true "stackView")

[back to top](#usage)

<br/>

## Asynchronous Stack Tracing

Tud uses `A` `ASYNC`, `N` `NTICK`, `T` `TIMER` and `E` `EVENT` tags as asynchronous type specifiers in stack message.

```js
01: var tud = require('tud')({
02:     showProcessInitExitLog: false,
03:     showProcessEventLog: false,
04:     nodeAsyncCallLog: true,
05:     userAsyncCallLog: true,
06:     nodeStackViewLvl: 'off',
07:     userStackViewLvl: 'app'
08: });
09: 
10: function httpOnCloseCallback() {
11:     process.nextTick(function nextTickCallback() {
12:         console.log('Server is closed.');
13:     });
14: }
15: function httpListenCallback() {
16:     console.log('Server is listening.');
17:     setTimeout(
18:         function setTimeoutCallback(){ server.close() }, 3000
19:     );
20: }
21: var server = require('http').createServer()
22:     .on('close', httpOnCloseCallback)
23:     .listen(8080, httpListenCallback)
24: ;
```

![consoleOutput](examples/asynchronousStackTracing.png?raw=true "asynchronousStackTracing")

<br/>

Promise stack trace is supported by `async_hooks` module in Node.js versions greater than or equal to 8.0.0. You can use the [bluebird](http://bluebirdjs.com/docs/getting-started.html) instead in versions below.

```js
01: var tud = require('tud')({
02:     showProcessInitExitLog: false,
03:     showProcessEventLog: false,
04:     nodeAsyncCallLog: true,
05:     userAsyncCallLog: true,
06:     nodeStackViewLvl: 'off',
07:     userStackViewLvl: 'app'
08: });
09: 
10: if (process.version[1] < 8) Promise = require("bluebird");
11: 
12: function lookupUrl(url) {
13:     return new Promise(
14:         function(resolve, reject) {
15:             require('dns').lookup(url,
16:                 function dnsLookupCallback(error, addresses) {
17:                     if (error) reject(error);
18:                     else resolve(addresses);
19:                 }
20:             );
21:         }
22:     ).then(
23:         function(addresses) {
24:             console.log(url, addresses);
25:         }
26:     );
27: }
28: lookupUrl('example.co').catch(
29:     function(error) {
30:         return lookupUrl('example.com');
31:     }
32: ).catch(
33:     function(error) {
34:         console.error('There is no available url.');
35:     }
36: );
```

![consoleOutput](examples/promiseStackTracing6113.png?raw=true "promiseStackTracing6113")

![consoleOutput](examples/promiseStackTracing8100.png?raw=true "promiseStackTracing8100")

[back to top](#usage)

<br/>

## Parallel Processes Tracing

Tud hooks `process.stdout.write()` and `process.stderr.write()` and all hooked data go with the tud log message. Use `process.stdout.writeNative()` or `process.stderr.writeNative()` as the original method before being hooked.

There are some exceptional cases associated with stdio in node.js 0.10.x and 0.12.x versions, especially stdin. `useStdioWriteSync` option changes the asynchronous socket write to the synchronous file write. Use `untouchableStdin` option when a parent process spawning a child process abruptly freezes or an abnormal case occurs by stdin.

```js
01: var tud = require('tud')({ showProcessInitExitLog: { init: false } });
02: 
03: console.log('I am a grandpa.');
04: 
05: var child_process = require('child_process');
06: var child1 = child_process.spawn('node', ['dad.js'], {stdio: 'inherit'});
07: var child2 = child_process.spawn('node', ['mom.js'], {stdio: 'pipe'});
08: child2.stdout.on('data', function(chunk){ process.stdout.writeNative(chunk) });
09: child2.stderr.on('data', function(chunk){ process.stderr.writeNative(chunk) });
```

```js
01: var tud = require('tud')({ showProcessInitExitLog: { init: false } });
02: 
03: console.log('I am a dad.');
04: 
05: var child = require('child_process').fork('honey.js');
06: if (child.connected) child.send('Good night, honey ~');
```

```js
01: var tud = require('tud')({ showProcessInitExitLog: { init: false } });
02: 
03: console.log('I am a mom.');
```

```js
01: var tud = require('tud')({ showProcessInitExitLog: { init: false } });
02: 
03: if (process.connected)
04:     process.on('message', function processOnMessageCallback(message) {
05:         console.log('received message : ' + message);
06:         process.disconnect();
07:     });
```

![consoleOutput](examples/parallelProcessesTracing.png?raw=true "parallelProcessesTracing")

[back to top](#usage)

<br/>

## Console Output Logging

There are two types of loggers: file and pipe. The file type logger is synchronously written, and the possible dest parameter values are the path string and file descriptor number of the file. On the other hand, the pipe type logger is asynchronously written, and the possible dest parameter values are the path string, file descriptor number and writable stream of the file. Tud does not check the closed state of any logger so you should explicitly call `tud.removeLogger(dest[, type[, data]])` when you try to close the file descriptor or writable stream.

```js
01: var pipeStream = new require('stream').PassThrough();
02: 
03: var tud = require('tud')({
04:     showProcessInitExitLog: false,
05:     userAsyncCallLog:  false,
06:     userStackViewLvl: 'off',
07:     logger : [
08:         { type: 'file', data: 'out', dest: 'stdout.log' },
09:         { type: 'file', data: 'err', dest: 'stderr.log' },
10:         { type: 'file', dest: 'stdall.log' },
11:         { dest: pipeStream }
12:     ]
13: });
14: 
15: process.on('exit', function() {
16:     require('fs').writeFileSync('stdallPipe.log', pipeStream.read());
17: });
18: console.log('stdout message');
19: console.error('stderr message');
```

![consoleOutput](examples/consoleOutputLogging.png?raw=true "consoleOutputLogging")

[back to top](#usage)

<br/>

## Debugging APIs

##### Debugging APIs provided by tud

```js
tud.debug()
tud.debug( {string} message )  ->  message
tud.debug( {string} title, {any} value [, {number|null|object} inspectDepthOrInspectOptionsObject] )  ->  value

tud.messg( {string} ...args )  ->  args[0]
tud.value(    {any} ...args )  ->  args[0]

tud.proto( {object} value [, {number|null|object} inspectDepthOrInspectOptionsObject] )  ->  value

tud.error(  {Error} error [, {string} message] )  ->  error

tud.check( {boolean} value                 [, {boolean} noExitOnFail] )  ->  value
tud.check(     {any} value , {string} type [, {boolean} noExitOnFail] )  ->  value
```

##### Global API name aliases

```js
tud() == tud.debug() == __debug() == __d() == __()
         tud.messg() == __messg() == __m()
         tud.value() == __value() == __v()
         tud.proto() == __proto() == __p()
         tud.error() == __error() == __e()
         tud.check() == __check() == __c()
```

```js
01: var tud = require('tud')({
02:     showProcessInitExitLog: false,
03:     userStackViewLvl: 'off'
04: });
05: 
06: var map = {
07:     key: 'message 0', obj: {
08:         key: 'message 1', obj: {
09:             key: 'message 2', obj: {
10:                 key: 'message 3'
11: }}}};
12: 
13: process.nextTick(function whereIsHere(){
14:     __();
15: });
16: __('message');
17: __('default depth', map   );
18: __(      '2 depth', map, 2);
19: 
20: __m(   'message a' ,    'message b' ,    'message c');
21: __v({a:'message a'}, {b:'message b'}, {c:'message c'}, map);
22: 
23: function A(){ this.a = 123 }
24: A.prototype = { a: 999 };
25: __p(new A());
```

![consoleOutput](examples/debuggingAPIs.png?raw=true "debuggingAPIs")

<br/>

```js
01: var tud = require('tud')({
02:     showProcessInitExitLog: false,
03:     showProcessEventLog: false,
04:     nodeAsyncCallLog: true
05: });
06: 
07: var fs = require('fs');
08: fs.readFile('notExistPath', function(err, data) {
09:     if (err) {
10:         __e(err, 'Here is optional debugging message.');
11:         fs.readFile(__filename, function(err, data) {
12:             err ? __e(err) : __('data.length', data.length);
13:         });
14:     } else {
15:         __('data.length', data.length);
16:     }
17: });
```

![consoleOutput](examples/debuggingAPIsError.png?raw=true "debuggingAPIsError")

##### Check types

```js
'u'  | 'undefined'
'nu' | 'null'     
'b'  | 'boolean'  
'n'  | 'number'   
's'  | 'string'   
'f'  | 'function' 
'o'  | 'object'   
'e'  | 'error'    
'a'  | 'array'    
'al' | 'arraylike'
```

```js
01: var tud = require('tud')({
02:     showProcessInitExitLog: false,
03:     userStackViewLvl: 'off',
04:     showSucceededCheckLog: true
05: });
06: 
07: (function truthCheck(arg1, arg2) {
08:     __c(arg1);
09:     __c(arg2);
10: })('a');
11: 
12: (function arrayLikeCheck(arg) {
13:     __c(arg, 'a');
14:     __c(arg, 'al');
15:     __c(arguments, 'a');
16:     __c(arguments, 'al');
17: })(['a','b','c']);
18: 
19: process.nextTick(function objectCheck() {
20:     __c({}, 'o');
21:     __c(null, 'o');
22:     __c(null, 'nu');
23: });
```

![consoleOutput](examples/debuggingAPIsCheck.png?raw=true "debuggingAPIsCheck")

[back to top](#usage)

<br/>

## Default Options

```js
{
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
}
```

[back to top](#usage)

<br/>

# License

[MIT](LICENSE)

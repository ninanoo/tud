var M__GLOBAL_PTM
  // , M__PTM
;
if (process.env['TUD_GLOBAL_PTM']) {
    // M__PTM = Date.now();
    M__GLOBAL_PTM = +process.env['TUD_GLOBAL_PTM'];
    delete process.env['TUD_GLOBAL_PTM'];
} else {
    // M__GLOBAL_PTM = M__PTM = Date.now();
    M__GLOBAL_PTM = Date.now();
}



var path = require('path');
var util = require('util');
var vm = require('vm');
var tty = require('tty');
var child_process = require('child_process');
var events = require('events');
var timers = require('timers');
var stream = require('stream');
var fs = require('fs');

var semver = require('semver');
var mkdirp = require('mkdirp');







// TODO: hooking of async io node modules linking to CApi @@@
// TODO: ipc messaging trace @@@
// TODO: web ui daemon using capi or pipe @@@

// TODO: <BOOTSTRAP> hooking for ntick and timer ( and event ) @@@
// TODO: socket net http hooking for connection and protocol header logging @@@

// TODO: use of node async module in debugger -> cycle by hook ( readable"data" -> run emit ) @@@

// TODO: use with browser debug.js @@@

// TODO: promise -> use with bluebird -> "From previous event:" as trace.async @@@
// TODO: async/await @@@



// TODO: version code -> each node versions ? !!!
// TODO: TudMessage to separate module !!!



// wrapped process.on, process.addListener, process.removeListener in node-v0.10.48 and node-v0.12.0/src/node.js
// "if (!hasDebugArg) execArgv = ['--debug-port=' + debugPort].concat(execArgv)" in node-v0.12.x/lib/cluster.js







var ____dbg_assert = require('assert');

function __ass(v, s) { /* v [ , s ] ::= assert() */
    return arguments.length < 2
        ? ____dbg_assert(v)
        : ____dbg_assert(v, (M__GLOBAL_PSN_VIEW && 'PSN' + M__GLOBAL_PSN_VIEW || 'PID' + '[' + process.pid + ']')
            + (s.indexOf('\n') === -1 ? ' ' : '\n' ) + s + '\n');
}

var ____dbg_inspect = require('util').inspect;

function __ins(v, d) { /* v [ , d ] ::= util.inspect() */
    return ____dbg_inspect(v, {
        showHidden     : true,
        depth          : arguments.length < 2 ? 0 : d,
        colors         : true,
        customInspect  : false,
        showProxy      : false,
        maxArrayLength : 100,
        breakLength    : 80
    });
}

var __s = true;

var ____dbg_write = process.stdout.write.bind(process.stdout);
var ____dbg_write_sync = fs.writeSync.bind(fs, process.stdout.fd);

function ______(s) { /* s ::= writable.write() */
    return __s ? ____dbg_write_sync('\n' + s + '\n\n') : ____dbg_write('\n' + s + '\n\n');
}

var __t = false;

var ____dbg_basepath_regex1 = new RegExp((             process.cwd()  + path.sep).replace(/\\/g, '\\\\'), 'g');
var ____dbg_basepath_regex2 = new RegExp((path.dirname(process.cwd()) + path.sep).replace(/\\/g, '\\\\'), 'g');

function ____(s, d) { /* s [ , d ] ::= ______() */
    var i, c = '', t = {name:''}, f = arguments.callee;
    while (d-- && (f = f.caller)) {}
    Error.captureStackTrace(t, f);
    if (t = t.stack) {
        t = t.replace(____dbg_basepath_regex1, '.' + path.sep).replace(____dbg_basepath_regex2, '..' + path.sep);
        i = t.indexOf('\n    at ') + 8;
        c = t.slice(i, (t.indexOf('\n', i) + 1 || t.length + 1) - 1);
    }
    return ______((__t ? t + '\n' : '') + '\u001b[31mat '
        + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> '.slice(c.length)
        + c + '\u001b[39m\n' + s
        + '\n\u001b[31m<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\u001b[39m');
}

function __d(s, v, d) { /* s [ , v [ , d ] ] ::= ____() */
    switch (arguments.length) {
        case  0 :
        case  1 :
            if (typeof s !== 'string') s = __ins(s);
            break;
        case  2 : v = __ins(v   ); s += v.indexOf('\n') === -1 ? ' : ' + v : ' :\n' + v; break;
        default : v = __ins(v, d); s += v.indexOf('\n') === -1 ? ' : ' + v : ' :\n' + v;
    }
    return ____(s, 1);
}

function __m() { /* [ {string},,, ] ::= ____() */
    return ____(Array.prototype.join.call(
        arguments, '\n\u001b[31m>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\u001b[39m\n'), 1);
}
var __ = __d;

function __v() { /* [ {any},,, ] ::= ____() */
    var i, s = '';
    if (i = arguments.length) {
        do s = __ins(arguments[--i],1) + s;
        while (i && (s = '\n\u001b[31m>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\u001b[39m\n' + s));
    }
    return ____(s, 1);
}







var NODE_SAMVER = semver.coerce(process.version);
var NODE_SAMVER_STABLE_STDIN = semver.coerce('4.0.0'); // and node-v4.8.7
var NODE_SAMVER_PROCESS_BEFOREEXIT = semver.coerce('0.12.0');
var NODE_SAMVER_EVENT_RAWLISTENERS = semver.coerce('9.4.0');
var NODE_SAMVER_EVENT_LISTENERS_NO_ONCE_WRAPPER = semver.coerce('7.0.0');
var NODE_SAMVER_EVENT_BOUND_ONCE_WRAPPER_NAME = semver.coerce('7.4.0');
var NODE_SAMVER_EVENT_EMIT_REMOVELISTENER_NO_ONCE_WRAPPER = semver.coerce('4.7.0');
var NODE_SAMVER_EVENT_EMIT_REMOVELISTENER_ONCE_WRAPPER = semver.coerce('6.0.0');



process.on('uncaughtException', tudInitiationExceptionHandler);



var M__TRACE_LEVEL = {
    OFF : 0,
    APP : 1,
    MOD : 1 << 1,
    SYS : 1 << 2,
    ALL : 1 << 9    // maximum of M__PATH_TYPE_*
};
(function(){
    for (var key in m__copy_map(M__TRACE_LEVEL)) M__TRACE_LEVEL[M__TRACE_LEVEL[key]] = key;
})();
// __d('M__TRACE_LEVEL', M__TRACE_LEVEL);



var ASYNC_STACK_LVL = {}
  , DEBUG_STACK_LVL = {}
;
var m__excluded_modules; // TODO: m__included_modules



var M__MAIN_FILE = require.main.filename
  , M__MAIN_PATH = path.dirname(M__MAIN_FILE) + path.sep
  , M__BASE_FILE
  , M__BASE_PATH
  , M__WORK_PATH = process.cwd()
;

if (process.env['TUD_PBASE_FILE']) {
    M__BASE_FILE = process.env['TUD_PBASE_FILE'];
    delete process.env['TUD_PBASE_FILE'];
} else {
    M__BASE_FILE = M__MAIN_FILE
}

if (process.env['TUD_PBASE_PATH']) {
    M__BASE_PATH = process.env['TUD_PBASE_PATH'];
    delete process.env['TUD_PBASE_PATH'];
} else {
    M__BASE_PATH = M__MAIN_PATH
}



var M__GLOBAL_PSN
  , M__GLOBAL_PID
  , m__global_psn_list
  , m__global_pid_list
  , m__child_proc_list = []
  
  , M__GLOBAL_PSN_VIEW
  , M__GLOBAL_OBJ_PREF
  
  , M__GLOBAL_COL
;

if (process.env['TUD_GLOBAL_PSN']) {
    M__GLOBAL_PSN = process.env['TUD_GLOBAL_PSN'].slice(2);
    m__global_psn_list = process.env['TUD_GLOBAL_PSN'].split('-');
    delete process.env['TUD_GLOBAL_PSN'];
    
    M__GLOBAL_PSN_VIEW = '[' + M__GLOBAL_PSN + ']';
    M__GLOBAL_OBJ_PREF = M__GLOBAL_PSN + '-';
} else {
    M__GLOBAL_PSN = '';
    m__global_psn_list = [0];
    
    M__GLOBAL_PSN_VIEW = '[-]';
    M__GLOBAL_OBJ_PREF = '';
}
m__global_psn_list.push(0);

if (process.env['TUD_GLOBAL_PID']) {
    m__global_pid_list = process.env['TUD_GLOBAL_PID'].split('-');
    delete process.env['TUD_GLOBAL_PID'];
} else {
    m__global_pid_list = [];
}
m__global_pid_list.push(process.pid);
M__GLOBAL_PID = m__global_pid_list.join('-');

if (process.env['TUD_GLOBAL_COL']) {
    M__GLOBAL_COL = +process.env['TUD_GLOBAL_COL'];
    delete process.env['TUD_GLOBAL_COL'];
} else {
    M__GLOBAL_COL = process.stdout.columns;
}



function m__get_child_process_env(env) { /* [ env ] ::= env */
    return m__copy_map({
        'TUD_GLOBAL_PTM' : M__GLOBAL_PTM,
        'TUD_GLOBAL_PSN' : m__global_psn_list.join('-'),
        'TUD_GLOBAL_PID' : m__global_pid_list.join('-'),
        'TUD_GLOBAL_COL' : M__GLOBAL_COL,
        'TUD_PBASE_FILE' : M__BASE_FILE,
        'TUD_PBASE_PATH' : M__BASE_PATH
    }, env);
}

function m__init_spawn_hook() {
    
    function spawnWrapper(options) {
        
        var childProc = {
            process: this, options: options, sid: ++m__global_psn_list[m__global_psn_list.length - 1]
        };
        var ret, env, key;
        
        m__cfg.showSpawnLog && m__log_user_msg('<SPAWN>'
            , 'child psn / debug id : ' + m__inspect(childProc.sid)
            + ' / ' + m__inspect(m__mark_instance(this).tud_target_id) + '\n'
            + 'args : ' + m__inspect(options.args) + '\n'
            + 'stdio / detached : ' + m__inspect(options.stdio) + ' / ' + m__inspect(options.detached) + '\n'
            + 'cwd : ' + m__inspect(options.cwd) + '\n'
            + 'envPairs.length : ' + m__inspect(options.envPairs.length) + '\n'
            + 'uid / gid : ' + m__inspect(options.uid) + ' / ' + m__inspect(options.gid)
        );
        if (!options.envPairs) options.envPairs = [];
        env = m__get_child_process_env();
        for (key in env) options.envPairs.push(key + '=' + env[key]);
        
        // __d('options.envPairs', options.envPairs);
        
        ret = _spawn.apply(this, arguments);
        m__child_proc_list.push(childProc);
        return ret;
    }
    var _spawn, checker;
    
    if (child_process.ChildProcess &&
        typeof child_process.ChildProcess === 'function' &&
        typeof child_process.ChildProcess.prototype.spawn === 'function'
    ) {
        _spawn = child_process.ChildProcess.prototype.spawn;
        child_process.ChildProcess.prototype.spawn = spawnWrapper;
    } else {
        checker = child_process.exec(':', { detached:true, stdio:'ignore', env:{} }, function(){});
        
        checker.stdin .hideTudEventLog();
        checker.stdout.hideTudEventLog();
        checker.stderr.hideTudEventLog();
        m__mark_instance(checker, 'tudSpawnCheckProcess').hideTudEventLog();
        
        _spawn = checker.constructor.prototype.spawn;
        checker.constructor.prototype.spawn = spawnWrapper;
    }
}







var m__mark_instance = function(/* v [ , s ] */){}; /* ::= v */

(function(){
    var instanceSeq = 0;
    m__mark_instance = function(v, s) {
        if (v && !v.tud_target_id) v.tud_target_id = arguments.length > 1
            ? s                      + '-O-' + M__GLOBAL_OBJ_PREF + ++instanceSeq + '-'
            : v.constructor.name
                ? v.constructor.name + '-O-' + M__GLOBAL_OBJ_PREF + ++instanceSeq + '-'
                :                      '-O-' + M__GLOBAL_OBJ_PREF + ++instanceSeq + '-'
        ;
        return v;
    };
})();

var m__mark_function = function(/* v [ , s ] */){}; /* ::= v */

(function(){
    var functionSeq = 0;
    m__mark_function = function(v, s) {
        if (v && !v.tud_target_id) v.tud_target_id = arguments.length > 1
            ? s          + '-F-' + M__GLOBAL_OBJ_PREF + ++functionSeq + '-'
            : v.name
                ? v.name + '-F-' + M__GLOBAL_OBJ_PREF + ++functionSeq + '-'
                :          '-F-' + M__GLOBAL_OBJ_PREF + ++functionSeq + '-'
        ;
        return v;
    };
})();







var m__msg;

function TudMessage() {
    
    //  _bufList = [ [ { writable:<object>, write:<function>, msg:<string>, enc:<string>, cbf:<function> },, ],, ]
    var _bufList = []
      , _hasLine = []
      , _corked  = 0
      , _synced  = m__cfg.stdioSyncMode
    ;
    this.truncate = function() {
        for (var i in _bufList) _bufList[i].length = 0;
        return this;
    };
    this.cork   = function(forced){ if (forced) _corked = -1; else if (_corked > -1) _corked++; return this; };
    this.uncork = function(forced){ if (forced) _corked =  0; else if (_corked >  0) _corked--; return this; };
    
    this.merge = function(){ this.out.merge(); this.err.merge(); return this; };
    this.flush = function(){ this.out.flush(); this.err.flush(); return this; };
    
    
    var _addLogger = function(/* dest [ , isPipe ] */){}; /* ::= {object} logger | {undefined} */
    var _delLogger = function(/* dest [ , isTest ] */){}; /* ::= {object} logger | {undefined} */
    (function(){
        var nmSharedMap = {} // prototype derivative or full shared
          , fdSharedMap = {}
          , wsSharedMap = {}
        ;
        _delLogger = function(dest, isTest) {
            var map;
            switch (typeof dest) {
                case 'string' :
                    dest = path.resolve(M__WORK_PATH, dest);
                    if ((map = nmSharedMap[dest]) && !isTest && !(--map.cnt)) {
                        if (map.ws) map.ws.end(function(){ fs.close(map.fd); });
                        else                               fs.close(map.fd);
                        delete nmSharedMap[dest];
                    }
                    break;
                case 'number' :
                    if ((map = fdSharedMap[dest]) && !isTest && !(--map.cnt)) {
                        if (map.ws) map.ws.end();
                        delete fdSharedMap[dest];
                    }
                    break;
                default :
                    if (dest && (map = wsSharedMap[dest.tud_target_id]) && !isTest && !(--map.cnt)) {
                        dest.showTudEventLog(); // TODO: ?
                        delete wsSharedMap[dest.tud_target_id];
                    }
            }
            return map;
        };
        _addLogger = function(dest, isPipe) {
            var map, dir;
            switch (typeof dest) {
                
                case 'string' : // file path
                    if (!(dest = path.resolve(M__WORK_PATH, dest))) return;
                    if (nmSharedMap[dest]) {
                        nmSharedMap[dest].cnt++;
                    } else {
                        dir = path.dirname(dest);
                        if (dir) {
                            if (fs.existsSync(dir)) { // TODO: version code - fs.accessSync
                                // fs.accessSync && fs.accessSync(dir
                                //     , fs.constants && fs.constants.W_OK || fs.W_OK); // fail -> throw
                            } else if (!mkdirp.sync(dir)) {
                                throw Error('path creation fail : ' + dir + ' of ' + dest);
                            }
                        }
                        nmSharedMap[dest] = { cnt: 1, nm: dest, fd: fs.openSync(dest, 'w') };
                    }
                    map = nmSharedMap[dest];
                    break;
                
                case 'number' : // file descriptor
                    if (dest < 1) return;
                    if (fdSharedMap[dest]) {
                        fdSharedMap[dest].cnt++;
                    } else {
                        fs.writeSync(dest, ''); // TODO: opened with 'w' flag ?
                        fdSharedMap[dest] = { cnt: 1, nm: '', fd: dest };
                    }
                    map = fdSharedMap[dest];
                    break;
                    
                // TODO: writable stream onClose { this.delLogPipe() } ? file descriptor ?
                default : // writable stream
                    if (!(dest instanceof stream.Stream && dest.writable)) return; // TODO: instanceof stream.Writable
                    if (wsSharedMap[m__mark_instance(dest).tud_target_id]) { // TODO: stream cycle
                        wsSharedMap[dest.tud_target_id].cnt++;
                    } else {
                        m__cfg.showLoggerEventLog || dest.hideTudEventLog();
                        wsSharedMap[dest.tud_target_id] = { cnt: 1, nm: dest.path, fd: dest.fd, ws: dest };
                        
                        dest.once('open', function tudLogWriteStreamOpenHandler(fd) {
                            dest.fd = fd ;
                            wsSharedMap[dest.tud_target_id].fd = fd ;
                        });
                        dest.write(''); // TODO: ?
                    }
                    map = wsSharedMap[dest.tud_target_id];
            }
            if (!map.no) _hasLine[map.no = _hasLine.length] = false;
            
            if (isPipe && !map.ws) {
                map.ws = fs.createWriteStream('', {fd: map.fd, autoClose: false});
                m__cfg.showLoggerEventLog || map.ws.hideTudEventLog();
            }
            return map;
        };
    })();
    
    
    this.out = new TudMessageWriter(process.stdout, 0);
    this.err = new TudMessageWriter(process.stderr, 0);
    
    function TudMessageWriter(writable, targetNo) { /* writable, targetNo (new)::= {instance} */
        
        __ass(writable && writable.write);
        __ass(writable && writable.fd);
        __ass(isNaN(+targetNo) === false);
        
        _hasLine[targetNo = +targetNo] = false;
        
        var _srcWritable = writable
          , _dstWritable = writable === process.stderr && m__cfg.redirectStderrToStdout
            ? process.stdout
            : writable
          , _srcRawWrite = _srcWritable.writeNative
            || (_srcWritable.writeNative = _srcWritable.write.bind(_srcWritable))
          , _dstRawWrite = _dstWritable.writeNative
            || (_dstWritable.writeNative = _dstWritable.write.bind(_dstWritable))
          
          , _buf = _bufList[targetNo] || (_bufList[targetNo] = [])
          , _msg = ''
          
          // _logXxxxList [
          //     {     nm  : {string} file path
          //         , fd  : {number} file descriptor
          //         , ws  : {stream.Writable} write stream    // only in _logPipeList ?
          //         , no  : {number} virtual screen number
          //         , cnt : {number} shared count
          //     },,,
          // ]
          , _logFileList = []
          , _logPipeList = []
        ;
        
        this.addLogFile = function(dest) { /* dest ::= {boolean} passFail */
            var logger = _addLogger(dest);
            if (logger) return !!_logFileList.push(logger);
            return false;
        };
        this.addLogPipe = function(dest) { /* dest ::= {boolean} passFail */
            var logger = _addLogger(dest, true);
            if (logger) return !!_logPipeList.push(logger);
            return false;
        };
        this.delLogFile = function(dest) { /* dest ::= {boolean} passFail */
            var idx = _logFileList.indexOf(_delLogger(dest, true));
            if (idx !== -1) return !!(_delLogger(dest) && _logFileList.splice(idx, 1));
            return false;
        };
        this.delLogPipe = function(dest) { /* dest ::= {boolean} passFail */
            var idx = _logPipeList.indexOf(_delLogger(dest, true));
            if (idx !== -1) return !!(_delLogger(dest) && _logPipeList.splice(idx, 1));
            return false;
        };
        this.getLogFileList = function() { return _logFileList.slice(0) };
        this.getLogPipeList = function() { return _logPipeList.slice(0) };
        
        this.write = _write;
        this.merge = _merge;
        this.flush = _flush;
        
        
        function _write(s) { /* [ s ] ::= {string} */
            return _msg += arguments.length === 0 ? '\n' : s + '\n';
        }
        
        function _trim(s, targetNo) { /* s, targetNo ::= {string} */
            var l, r, n = (s = s.toString()).length;
            
            for (l =     0;     l < n; l++) if ('\n' !== s[l]) break;
            for (r = n - 1; 0 < r    ; r--) if ('\n' !== s[r]) break;
            
            if (!_hasLine[targetNo] && 0 < l) l--;
            _hasLine[targetNo] = r < n - 2;
            
            return s.slice(l, r + 3);
        }
        
        function _merge() { /* ::= {string} mergedMsg */
            var i, msg = '';
            if (_buf.length) {
                for (i = 0; i < _buf.length; i++) msg += _trim(_buf[i].msg, targetNo);
                _buf.length = 0;
                _msg = msg + _trim(_msg, targetNo);
            }
            return _msg;
        }
        
        // TODO: check pipe close ? or removeLogger ?
        // TODO: ws._writableState.ended || ws._writableState.ending || ws.write(...) ?
        function _flush(deferred, callback) { /* [ deferred [ , callback ] ] ::= {boolean} writable.write() */
            var i, j, ret = true, buf, msg = _msg; // recursively called by writable.write()
            _msg = '';
            if (_buf.length && !_corked && !deferred) {
                buf = _buf.splice(0);
                for (i = 0; i < buf.length; i++) {
                    if (_synced) {
                        ret &= fs.writeSync(buf[i].dst, _trim(buf[i].msg, targetNo)) >= 0; // TODO: ?
                        buf[i].cbf && process.nextTick(buf[i].cbf);
                    } else {
                        ret &= buf[i].dst(_trim(buf[i].msg, targetNo), buf[i].cbf);
                    }
                    for (j = 0; j < _logFileList.length; j++)
                        fs.writeSync(_logFileList[j].fd, _trim(buf[i].msg, _logFileList[j].no));
                    for (j = 0; j < _logPipeList.length; j++)
                        _logPipeList[j].ws.write(        _trim(buf[i].msg, _logPipeList[j].no));
                }
            }
            if (_corked || deferred) {
                ret = !_buf.push({ dst: _synced ? _dstWritable.fd : _dstRawWrite, msg: msg, cbf: callback });
            } else {
                if (_synced) {
                    ret &= fs.writeSync(_dstWritable.fd, _trim(msg, targetNo)) >= 0; // TODO: ?
                    callback && process.nextTick(callback);
                } else {
                    ret &= _dstRawWrite(_trim(msg, targetNo), callback);
                }
                for (j = 0; j < _logFileList.length; j++)
                    fs.writeSync(_logFileList[j].fd, _trim(msg, _logFileList[j].no));
                for (j = 0; j < _logPipeList.length; j++)
                    _logPipeList[j].ws.write(        _trim(msg, _logPipeList[j].no));
            }
            return !!ret;
        }
        
        
        _srcWritable.write = function writeWrapper(chunk, encoding, callback) {
            
            if (Buffer.isBuffer(chunk)) {
                chunk = chunk.toString();
            } else if (typeof chunk === 'string') {
                if (typeof encoding === 'string') {
                    if (Buffer.isEncoding(encoding)) chunk = new Buffer(chunk, encoding).toString();
                    else return _srcRawWrite.call(this, chunk, encoding, callback);
                }
            } else {
                return _srcRawWrite.call(this, chunk, encoding, callback);
            }
            var level, trace = m__get_stack_trace(1);
            
            _write();
            if (level = DEBUG_STACK_LVL[m__get_stack_type(trace)]) { // TODO: M__STACK_TYPE_NODE
                _write(m__get_stack_trace_msg(trace, level));
                _write(m__get_dd_line(m__get_msg_tag()
                    , this === process.stdout ? '[ STDOUT ]' : '[ STDERR ]'));
            } else {
                _write(m__get_dd_line(m__get_msg_tag()
                    + ' ' + m__get_call_trace_msg(trace)
                    , this === process.stdout ? '[ STDOUT ]' : '[ STDERR ]'));
            }
            _write('\n' === chunk[chunk.length - 1]
                ? chunk +        m__get_dd_line()
                : chunk + '\n' + m__get_dd_line_r('[ NO NEW LINE ]')
            );
            _write();
            
            return _flush(false, typeof encoding === 'function' ? encoding : callback);
        };
    }
}







// TODO: lambda ? bind ?

/* format       :== {function} date_formatter */
/* format, date :== {string}   formatted_date */
function m__get_date_formatter(format, date) {
    
    var fm = format.match(/[^yYmMdDhHiIsScC]+|[yYmMdDhHiIsScC]/g)
      , fmLen = fm.length
    ;
    function fmt(date) { /* [ date ] :== {string} formatted_date */
        
        if (!arguments.length) date = new Date();
        else if (!(date instanceof Date)) date = new Date(+date);
        
        var i, s = '';
        for (i = 0; i < fmLen; i++) {
            switch (fm[i]) {
                case 'y' :
                case 'Y' : s += date.getFullYear(); break;
                case 'm' : s += date.getMonth() +1; break;
                case 'M' : s += date.getMonth   () <  9 ? '0' + (date.getMonth()+1) : date.getMonth() +1; break;
                case 'd' : s += date.getDate    (); break;
                case 'D' : s += date.getDate    () < 10 ? '0' +  date.getDate    () : date.getDate    (); break;
                case 'h' : s += date.getHours   (); break;
                case 'H' : s += date.getHours   () < 10 ? '0' +  date.getHours   () : date.getHours   (); break;
                case 'i' : s += date.getMinutes (); break;
                case 'I' : s += date.getMinutes () < 10 ? '0' +  date.getMinutes () : date.getMinutes (); break;
                case 's' : s += date.getSeconds (); break;
                case 'S' : s += date.getSeconds () < 10 ? '0' +  date.getSeconds () : date.getSeconds (); break;
                
                case 'c' : s += date.getMilliseconds(); break;
                case 'C' :
                    s += date.getMilliseconds() < 10 ? '00' + date.getMilliseconds()
                        : date.getMilliseconds() < 100 ? '0' + date.getMilliseconds() : date.getMilliseconds();
                    break;
                    
                default  : s += fm[i];
            }
        }
        return s;
    }
    return date ? fmt(date) : fmt;
}



function m__copy_map(src, dst, ownProperty) { /* src [ , dst [ , ownProperty ] ] ::= dst */
    // if (!dst || typeof dst !== 'object') dst = Object.create(null); // TODO: Object.create(null) ? or {} ?
    if (!dst || typeof dst !== 'object') dst = {};
    for (var k in src) { // no native, enumerable, inherited
        if (ownProperty && src.hasOwnProperty && !src.hasOwnProperty(k)) continue; // no inherited
        dst[k] = src[k];
    }
    return dst;
}



// TODO: inherited property (for-in) and getter

var m__inspect     = function(/* v [ , depth ] */){} /* ::= {string} util.inspect() */
  , m__inspect_all = function(/* v [ , depth ] */){} /* ::= {string} util.inspect() */
  , m__inspect_row = function(/* v [ , depth ] */){} /* ::= {string} util.inspect() */
;
function m__init_variable_inspectors() {
    
    var options    = m__copy_map()
      , optionsAll = m__copy_map()
      , optionsRow = m__copy_map()
    ;
    options.default = {
        showHidden      : false,
        depth           : 0,
        colors          : true,
        customInspect   : true,
        showProxy       : false,
        maxArrayLength  : 32,
        breakLength     : 60
    };
    (function(){
        for (var k in m__cfg.defaultInspectOptions) options.default[k] = m__cfg.defaultInspectOptions[k];
        if ('useConsoleAnsiColor' in m__cfg) options.default.colors &= m__cfg.useConsoleAnsiColor;
    })();
    
    optionsAll.default = m__copy_map(options.default);
    optionsAll.default.customInspect = false;
    optionsAll.default.showHidden = true;
    
    optionsRow.default = m__copy_map(options.default);
    optionsRow.default.customInspect = false;
    optionsRow.default.breakLength = Infinity;
    
    
    m__inspect = function(v, depth) {
        if (arguments.length > 1) {
            if (depth && typeof depth === 'object') {
                return util.inspect(v, m__copy_map(depth, m__copy_map(options.default)));
            }
            if (!options[depth]) {
                options[depth] = m__copy_map(options.default);
                options[depth].depth = depth;
            }
            return util.inspect(v, options[depth]);
        }
        return util.inspect(v, options.default);
    };
    
    m__inspect_all = function(v, depth) {
        if (arguments.length > 1) {
            if (!optionsAll[depth]) {
                optionsAll[depth] = m__copy_map(optionsAll.default);
                optionsAll[depth].depth = depth;
            }
            return util.inspect(v, optionsAll[depth]);
        }
        return util.inspect(v, optionsAll.default);
    };
    
    m__inspect_row = function(v, depth) {
        if (arguments.length > 1) {
            if (!optionsRow[depth]) {
                optionsRow[depth] = m__copy_map(optionsRow.default);
                optionsRow[depth].depth = depth;
            }
            return util.inspect(v, optionsRow[depth]);
        }
        return util.inspect(v, optionsRow.default);
    };
}



// TODO: use es5 compatible string length module

var m__get_printable_length = function(/* s */){}; /* ::= {number} length */

(function(){
    var REGEXP = /\x1b\[[0-9;]*m/g; // color and text formatting escape code sequence
    
    m__get_printable_length = function(s){ return (s + '').replace(REGEXP, '').length };
})();



var m__get_at_line   = function(/* [ l [ , r ] ] */){}
  , m__get_sd_line   = function(/* [ l [ , r ] ] */){}
  , m__get_dd_line   = function(/* [ l [ , r ] ] */){}
  , m__get_at_line_r = function(/* [       r   ] */){}
  , m__get_sd_line_r = function(/* [       r   ] */){}
  , m__get_dd_line_r = function(/* [       r   ] */){}
;
function m__init_msg_line_formatters() {
    
    var DEFAULT_CONSOLE_COLUMNS = 80
      , at = '*'
      , sd = '-'
      , dd = '='
    ;
    (function(){
        var len = +m__cfg.defaultConsoleColumns || DEFAULT_CONSOLE_COLUMNS;
        while (--len) {
            at += at[0];
            sd += sd[0];
            dd += dd[0];
        }
    })();
    
    m__get_at_line = function(l, r) {
        return undefined === l
            ? at
            : l + ' ' + (
                undefined === r
                    ? at.slice(m__get_printable_length(l) + 1)
                    : at.slice(m__get_printable_length(l) + m__get_printable_length(r) + 2) + ' ' + r
            );
    };
    m__get_sd_line = function(l, r) {
        return undefined === l
            ? sd
            : l + ' ' + (
                undefined === r
                    ? sd.slice(m__get_printable_length(l) + 1)
                    : sd.slice(m__get_printable_length(l) + m__get_printable_length(r) + 2) + ' ' + r
            );
    };
    m__get_dd_line = function(l, r) {
        return undefined === l
            ? dd
            : l + ' ' + (
                undefined === r
                    ? dd.slice(m__get_printable_length(l) + 1)
                    : dd.slice(m__get_printable_length(l) + m__get_printable_length(r) + 2) + ' ' + r
            );
    };
    m__get_at_line_r = function(r) {
        return undefined === r ? at : at.slice(m__get_printable_length(r) + 1) + ' ' + r;
    };
    m__get_sd_line_r = function(r) {
        return undefined === r ? sd : sd.slice(m__get_printable_length(r) + 1) + ' ' + r;
    };
    m__get_dd_line_r = function(r) {
        return undefined === r ? dd : dd.slice(m__get_printable_length(r) + 1) + ' ' + r;
    };
}



var m__get_msg_tag = function(){}; /* ::= {string} message tag */

(function(){
    function getTime() {
        function _f(n) {
            var s;
            
            if      (n <      60000) { s = 's'; n = n + 100000; }
            else if (n <    3600000) { s = 'm'; n = Math.round(n /    60) + 100000; }
            else if (n <   86400000) { s = 'h'; n = Math.round(n /  3600) + 100000; }
            else if (n < 8640000000) { s = 'd'; n = Math.round(n / 86400) + 100000; }
            else {
                return 'infinit';
            }
            n += '';
            n = ('0' !== n[1]
                    ? n[1] + n[2]
                    : '-' + ('0' !== n[2] ? n[2] : '-')
                )
                + '.'
                + ('0' !== n[3]
                        ? n[3] + n[4] + n[5]
                        : '-' + ('0' !== n[4]
                            ? n[4] + n[5]
                            : '-' + ('0' !== n[5] ? n[5] : '-')
                    )
                )
            ;
            return n + ' ' + s;
        }
        var s = _f(-now + (now = Date.now()));
        return _f(now - M__GLOBAL_PTM) + ' ' + s;
    }
    var now = M__GLOBAL_PTM
      , psn = M__GLOBAL_PSN_VIEW + ' '
    ;
    m__get_msg_tag = function(){ return psn + getTime() };
})();







// TODO: clickable link for one line trace @@@
// TODO: eval stack @@@

// TODO: M__BASE_PATH of __call__ and __line__ -> M__MAIN_PATH ? configurable ?

// TODO: M__PATH_TYPE_INC -> m__included_modules  ( INC > EXC > APP > MOD > SYS > DBG > ERR )

var M__PATH_TYPE_APP = M__TRACE_LEVEL.APP
  , M__PATH_TYPE_MOD = M__TRACE_LEVEL.MOD
  , M__PATH_TYPE_SYS = M__TRACE_LEVEL.SYS
  , M__PATH_TYPE_DBG = M__TRACE_LEVEL.ALL >> 2
  , M__PATH_TYPE_EXC = M__TRACE_LEVEL.ALL >> 1 // m__excluded_modules
  , M__PATH_TYPE_ERR = M__TRACE_LEVEL.ALL
;
// __m('M__PATH_TYPE_APP : ' + M__PATH_TYPE_APP,
//     'M__PATH_TYPE_MOD : ' + M__PATH_TYPE_MOD,
//     'M__PATH_TYPE_SYS : ' + M__PATH_TYPE_SYS,
//     'M__PATH_TYPE_DBG : ' + M__PATH_TYPE_DBG,
//     'M__PATH_TYPE_EXC : ' + M__PATH_TYPE_EXC,
//     'M__PATH_TYPE_ERR : ' + M__PATH_TYPE_ERR
// );
__ass(M__PATH_TYPE_SYS < M__PATH_TYPE_DBG);

var M__STACK_TYPE_NODE  = 1
  , M__STACK_TYPE_USER  = 2
;
var M__ASYNC_TYPE_NTICK = 1
  , M__ASYNC_TYPE_TIMER = 2
  , M__ASYNC_TYPE_EVENT = 4
;
var m__current_async_traces = []; // TODO: push, pop, has, get interface ?

var m__get_stack_trace = function(/* v [ , noTrace ] */){}; /* ::= {object} trace */
var m__get_stack_type  = function(/* traceWrapperOrTrace */){}; /* ::= M__STACK_TYPE_NODE | M__STACK_TYPE_USER */

function m__init_stack_trace_generator() {
    
    // callTree {
    //        __proto__ : callList[]
    //      , __no__    : n > 0         // callee (current node) number per caller (parent)
    // }
    // callList {
    //        __type__ : M__PATH_TYPE_*
    //      , __data__ : match()
    //      , __line__ : '<object> (<absulute_path>:line:column)'
    //    [ , __call__ :          '(<relative_path>:line:column)' ]     // only for M__PATH_TYPE_APP
    // }
    var callTree = {}
      , callList = {}
      
      , STACK_CALL_REGEXP = /(([^(]*) \(|())([^ (]+):([0-9]+):([0-9]+)/ // 2-this.caller 4-file 5-line 6-column
      
      , LIB_PATH_PREFIX = m__cfg.webstormConsoleLibPath || ''
      , SRC_PATH_PREFIX = m__cfg.webstormConsoleSrcPath || ''
      // , SRC_PATH_PREFIX = m__cfg.webstormConsoleSrcPath || (function(){
      //       var a = process.execArgv, i = a.length;
      //       while (i-- && a[i].indexOf('--debug-brk')) {}
      //       return i < 0 ? '.' + path.sep : '';
      //   })()
      , BOOTSTRAP_PATH    = 'internal' + path.sep + 'bootstrap_node.js' // TODO: version code
      , NODE_MODULES_PATH = path.sep + 'node_modules' + path.sep
    ;
    Error.stackTraceLimit = 127; // TODO: configurable ? or view top-n ?
    
    
    function getLinePath(type, s) { /* type, s ::= {string} path */
        switch (type) {
            case M__PATH_TYPE_APP :
            case M__PATH_TYPE_MOD : // TODO: global modules
            case M__PATH_TYPE_DBG :
                return SRC_PATH_PREFIX ? SRC_PATH_PREFIX + path.relative(M__WORK_PATH, s) : s;
                
            default :
                switch (s) {
                    case 'bootstrap_node.js' :
                        return LIB_PATH_PREFIX ? LIB_PATH_PREFIX + BOOTSTRAP_PATH : s; // TODO: return s ?
                    case 'node.js' :
                        return s;
                    default :
                        return LIB_PATH_PREFIX ? LIB_PATH_PREFIX + s : s;
                }
        }
    }
    
    function getCallPoint(rawCall) { /* rawCall ::= callList[rawCall] */
        var v, d;
        if (!callList[rawCall]) {
            v = callList[rawCall] = {};
            d = rawCall.match(STACK_CALL_REGEXP);
            
            if (!d || typeof d[4] !== 'string' || typeof d[5] !== 'string' || typeof d[6] !== 'string') { // TODO: ?
                // __d('tud warning in getCallPoint() :'
                //     + '\n\t"' + rawCall + '".match(' + STACK_CALL_REGEXP + ') === ' + m__inspect(d)
                //     + '\n\tunknown call line "' + rawCall + '" in function stack'
                // );
                if (!d) {
                    d = ['', '', '', '', rawCall, '', ''];
                } else {
                    if (typeof d[4] !== 'string') d[4] = rawCall;
                    if (typeof d[5] !== 'string') d[5] = '';
                    if (typeof d[6] !== 'string') d[6] = '';
                }
                Object.defineProperties(v, {
                    __data__: { value: d },
                    __type__: { value: M__PATH_TYPE_ERR },
                    __line__: { value: rawCall }
                });
            } else {
                Object.defineProperties(v, { __data__: { value: d }, __type__: { value:
                    // ((               d[4] === __filename                      ) && M__PATH_TYPE_DBG) ||
                    ((m__excluded_modules.indexOf(d[4])                 !== -1) && M__PATH_TYPE_EXC) ||
                    ((               d[4].indexOf(NODE_MODULES_PATH)    !== -1) && M__PATH_TYPE_MOD) ||
                    ((               d[4] === __filename                      ) && M__PATH_TYPE_DBG) || // TODO: ?
                    ((               d[4].indexOf(M__MAIN_PATH)         ===  0) && M__PATH_TYPE_APP) ||
                                                                                   M__PATH_TYPE_SYS
                }});
                if (v.__type__ === M__PATH_TYPE_APP) {
                    Object.defineProperty(v, '__call__', { value: d[4] === M__BASE_FILE
                        ? '( '                                           + d[5] + ':' + d[6] + ' )'
                        : '( ' + path.relative(M__BASE_PATH, d[4]) + ':' + d[5] + ':' + d[6] + ' )'
                    });
                }
                Object.defineProperty(v, '__line__'
                    , { value: (d[1] || '(') + getLinePath(v.__type__, d[4]) + ':' + d[5] + ':' + d[6] + ')' }
                );
            }
            // __ass(Number.isInteger(Math.log(v.__type__)/Math.LN2)
            //         && 0 < v.__type__ && v.__type__ <= M__TRACE_LEVEL.ALL, 'v.__type__ : ' + __ins(v.__type__)
            //     + '\nv.__data__ : ' + __ins(v.__data__) + '\nv.__line__ : ' + __ins(v.__line__));
        }
        return callList[rawCall];
    }
    
    function getCallStack(rawCallList) { /* rawCallList ::= [ callTree[],,, ] | undefined */
        var i, stack
          , node = callTree
        ;
        if (i = rawCallList.length) {
            stack = [];
            while (i--) {
                if (!node[rawCallList[i]]) {
                    do {
                        node[rawCallList[i]] = { __proto__: getCallPoint(rawCallList[i]) };
                        
                        stack.push(node = Object.defineProperty(
                            node[rawCallList[i]], '__no__', { value: Object.keys(node).length })
                        );
                    } while (i--);
                    break;
                }
                stack.push(node = node[rawCallList[i]]);
            }
        }
        return stack;
    }
    
    
    m__get_stack_trace = function(v, noTrace) {
        var f, stack;
        
        __ass(typeof v === 'number' || typeof v === 'string', __ins(v));
        
        if (typeof v === 'number') {
            f = arguments.callee;
            while (v--) f = f.caller;
            Error.captureStackTrace((v = {name:''}), f);
            v = v.stack;
        }
        // __m(v);
        
        if (v) {
            stack = v.split('\n    at '); // TODO: /^\s*at\s*/ ?
            stack.shift();
            stack = getCallStack(stack);
        }
        // trace { // TODO: trace, stack, async class and chaining ?
        //        type  : M__STACK_TYPE_NODE | M__STACK_TYPE_USER
        //      , stack : [ callTree[],,, ] | undefined    // from bottom to top
        //    [ , async : {
        //              type  : M__ASYNC_TYPE_*
        //            , trace : trace {}
        //      } ]
        // } | null
        return !noTrace && m__current_async_traces.length
            ? { type: getStackType(stack), stack: stack
                , async: m__current_async_traces[m__current_async_traces.length - 1] }
            : { type: getStackType(stack), stack: stack } // if !stack -> <NoSTACKS> , else -> stack.length > 0
        ;
    };
    
    
    function getStackType(stack) { // TODO: ?
        
        // stack[stack.length - 1].__data__[2] === 'EventEmitter.once' ||
        // stack[stack.length - 1].__data__[2] === 'new EventEmitter'
        
        return stack && stack.length && stack[stack.length - 1] && (
            stack[stack.length - 1].__type__ === M__PATH_TYPE_APP || (
                stack[stack.length - 1].__type__ === M__PATH_TYPE_EXC && stack[stack.length - 2] && (
                    stack[stack.length - 2].__type__ === M__PATH_TYPE_APP || (
                        stack[stack.length - 2].__type__ === M__PATH_TYPE_EXC && stack[stack.length - 3] && (
                            stack[stack.length - 3].__type__ === M__PATH_TYPE_APP
                        )
                    )
                )
            )
        ) ? M__STACK_TYPE_USER : M__STACK_TYPE_NODE;
    }
    
    // m__get_stack_type = function(trace) { return trace && trace.type || M__STACK_TYPE_NODE }; // TODO: ?
    m__get_stack_type = function(traceWrapperOrTrace) {

        if (traceWrapperOrTrace) {
            if ('trace' in traceWrapperOrTrace) { // traceWrapper
                return traceWrapperOrTrace.trace && traceWrapperOrTrace.trace.type || M__STACK_TYPE_NODE
            } else { // trace
                return traceWrapperOrTrace.type || M__STACK_TYPE_NODE
            }
        }
        return M__STACK_TYPE_NODE;
    };
}







// TODO: top to bottom -> bottom to top ?

var m__get_stack_trace_msg = function(/* [ trace [ , stackLevel [ , tab ] ] ] */){};

(function(){
    var prevStackNo = [] // bottom to top
      , AT_EXC = '   at : -        '
      , AT     = []
    ;
    AT[M__PATH_TYPE_APP] = '   at : + ';
    AT[M__PATH_TYPE_MOD] = '   at :   ';
    AT[M__PATH_TYPE_SYS] = '   at :   ';
    AT[M__PATH_TYPE_DBG] = '   at : - ';
    AT[M__PATH_TYPE_EXC] = '   at : - ';
    AT[M__PATH_TYPE_ERR] = '   at : ? ';
    
    var STACK_TYPE_HEAD
      , STACK_TYPE_BODY
      , ASYNC_TYPE = []
    ;
    ASYNC_TYPE[M__ASYNC_TYPE_NTICK] = 'NTICK :';
    ASYNC_TYPE[M__ASYNC_TYPE_TIMER] = 'TIMER :';
    ASYNC_TYPE[M__ASYNC_TYPE_EVENT] = 'EVENT :';
    ASYNC_TYPE[STACK_TYPE_HEAD = ASYNC_TYPE.length] = 'STACK :';
    ASYNC_TYPE[STACK_TYPE_BODY = ASYNC_TYPE.length] = 'STACK :';
    
    function getStackMsg(type, stack, stackLevel, tab) { // stack : array of bottom to top call object
        var LEN = stack.length
          , stackNo = new Array(LEN)
          , s = '', sid = '', exc, i
        ;
        __ass(stack && (stack.length > 0)); // TODO: should ?
        
        if (type === STACK_TYPE_HEAD && m__cfg.useConsoleAnsiColor) {
            for (i = 0; i < LEN; i++) {
                if (prevStackNo[i] !== stack[i].__no__) {
                    do stackNo[i] = '\u001b[31m' + (prevStackNo[i] = stack[i].__no__) + '\u001b[39m';
                    while (++i < LEN);
                    break;
                }
                stackNo[i] = prevStackNo[i] = stack[i].__no__;
            }
            prevStackNo.length = LEN;
            
        } else { // TODO: copying -> switching
            for (i = 0; i < LEN; i++) stackNo[i] = stack[i].__no__;
        }
        
        i = LEN - 1;
        do {
            if (stack[i].__type__ <= stackLevel) {
                if (exc) {
                    s += tab + AT_EXC + exc + '\n';
                    exc = '';
                }
                s += tab + AT[stack[i].__type__] + (i < 9 ? '-' + (i + 1) : i + 1) + '-'
                    + (stack[i].__no__ < 10 ? '-' + stackNo[i] : stackNo[i])
                    + '  ' + stack[i].__line__;
            } else {
                exc = exc ? stackNo[i] + '-' + exc : stackNo[i] + ' (' + (i + 1) + ')';
            }
            sid += stackNo[i];
            
        } while (i-- && (sid += '-') && (exc || (s += '\n')));
        
        return m__get_sd_line(tab + ASYNC_TYPE[type], '(' + LEN + ') ' + sid)
            + '\n' + (exc ? s + tab + AT_EXC + exc : s);
    }
    
    function getTraceMsg(type, trace, stackLevel, tab) {
        var s;
        
        if (trace) { // NoSTACK -> process'beforeExit' and process'exit'
            s = trace.stack
                ? getStackMsg(type, trace.stack, stackLevel, tab)
                : m__get_sd_line(tab + ASYNC_TYPE[type], 'NoSTACK')
            ;
            if (trace.async) s += '\n' + getTraceMsg(trace.async.type, trace.async.trace, stackLevel, tab);
            
        } else { // UNKNOWN -> by meta construction after real event addListener
            s = m__get_sd_line(tab + ASYNC_TYPE[type], 'UNKNOWN');
        }
        return s;
    }
    
    m__get_stack_trace_msg = function(trace, stackLevel, tab) {
        
        return arguments.length < 3 // TODO: STACK_TYPE_HEAD interface
            ? getTraceMsg(STACK_TYPE_HEAD, trace, stackLevel, M__VIEW_STKPART_FILLER)
            : getTraceMsg(STACK_TYPE_BODY, trace, stackLevel, tab);
    };
})();



var m__get_call_trace_msg = function(/* [ trace ] */) {};

(function(){
    var ASYNC_TYPE = [];
    
    ASYNC_TYPE[M__ASYNC_TYPE_NTICK] = '~N~';
    ASYNC_TYPE[M__ASYNC_TYPE_TIMER] = '~T~';
    ASYNC_TYPE[M__ASYNC_TYPE_EVENT] = '~E~';
    
    m__get_call_trace_msg = function(trace) {
        var s, i;
        if (trace) {
            if (trace.stack) {
                i = trace.stack.length - 1;
                do {
                    if (trace.stack[i].__call__) {
                        s = trace.stack[i].__call__;
                        break;
                    }
                } while (i--);
                if (i < 0) s = '(-)';
            } else {
                s = '( NoSTACK )';
            }
            if (trace.async) s = m__get_call_trace_msg(trace.async.trace) + ASYNC_TYPE[trace.async.type] + s;
        } else {
            s = '( UNKNOWN )';
        }
        return s;
    };
})();







var M__VIEW_TAGPART_FILLER = '                   '
  , M__VIEW_PART_SEPARATOR = ' | '
  , M__VIEW_MSGPART_FILLER = M__VIEW_TAGPART_FILLER + M__VIEW_PART_SEPARATOR
  , M__VIEW_STMPART_FILLER = M__VIEW_MSGPART_FILLER.replace('|', ' ')
  , M__VIEW_TAGPART_MAXLEN = M__VIEW_TAGPART_FILLER.length
  , M__VIEW_MSGPART_LPDLEN = M__VIEW_MSGPART_FILLER.length
  , M__VIEW_MSGPART_SDLINE
  , M__VIEW_STKPART_FILLER = M__VIEW_TAGPART_FILLER.slice(0, -5) // TODO: ?
;
// TODO: tag regex and array processing -> raw string parsing ( white-space:normal; ) @@@
// TODO: stackMsg ? deferred ?
// TODO: msg type meta ?

var m__log_hook_msg  = function(/* [ tag [ , msg [ , trace [ , deferred ] ] ] ] */){};
var m__log_user_msg  = function(/* [ tag [ , msg [ , trace [ , stackMsg ] ] ] ] */){};
var m__log_error_msg = function(/* tag, err [ , msg ] */){};

(function(){
    var TAG_REGEXP    = new RegExp('[^\\n]{1,' + M__VIEW_TAGPART_MAXLEN + '}\\n?|\\n', 'g')
      , TAB_REGEXP    = /\t/g
      , TAB_TO_SPACE  = '    '
      
      , MSG_BOTTOM_SD = M__VIEW_TAGPART_FILLER.replace(/ /g, '-')
      , MSG_BOTTOM_DD = M__VIEW_TAGPART_FILLER.replace(/ /g, '=')
    ;
    // TODO: so many args -> constant object of view factor { stackLevel, msgBottom, getLine, extended }
    function logMsg(writer, tag, msg, stackLevel, trace, stackMsg, deferred, msgBottom, getLine, extended) {
        var i, s = '';
        
        switch (arguments.length) {
            case  0 : msg = [''];                   tag = []; break; // TODO: tud__debug() ?
            case  1 : msg = (tag + '').split('\n'); tag = []; break; // TODO: tud__debug(msg) ?
            default :
                msg = (msg + '').split('\n');
                tag = (tag + '').replace(TAB_REGEXP, TAB_TO_SPACE);
                if (tag.indexOf('\n') !== -1 || tag.length > M__VIEW_TAGPART_MAXLEN) {
                    tag = tag.match(TAG_REGEXP);
                    i = tag.length - 1;
                    if (tag[i][tag[i].length - 1] === '\n') tag.push('');
                    do { tag[i] = tag[i].trim() } while (i--);
                } else {
                    tag = [tag];
                }
        }
        
        if (extended || stackLevel || tag.length > 1 || msg.length > 1 || stackMsg) {
            
            i = tag.length < msg.length ? msg.length - 1 : tag.length - 1;
            do {
                if (tag[i]) s = M__VIEW_TAGPART_FILLER.slice(tag[i].length) + tag[i]
                    +           M__VIEW_PART_SEPARATOR + (msg[i] || '') + s;
                else        s = M__VIEW_MSGPART_FILLER + (msg[i] || '') + s;
            } while (i-- && (s = '\n' + s));
            
            writer.write();
            
            // if (stackLevel) writer.write(m__get_stack_trace_msg(trace, stackLevel)); // TODO: ?
            // writer.write(getLine(m__get_msg_tag() + ' ' + m__get_call_trace_msg(trace)));
            
            if (stackLevel) {
                writer.write(m__get_stack_trace_msg(trace, stackLevel));
                writer.write(getLine(m__get_msg_tag()));
            } else {
                writer.write(getLine(m__get_msg_tag() + ' ' + m__get_call_trace_msg(trace)));
            }
            
            writer.write(s);
            if (stackMsg) writer.write(stackMsg);
            writer.write(msgBottom);
            writer.write();
            
        } else if (tag.length) {
            writer.write(m__get_msg_tag() + ' ' + m__get_call_trace_msg(trace) + '  ' + tag[0]
                + (tag[0][0] === '<' && tag[0][tag[0].length - 1] === '>' ? ' ' : ' -- ') + msg[0]
            );
        } else {
            writer.write(m__get_msg_tag() + ' ' + m__get_call_trace_msg(trace) + '  ' + msg[0]);
        }
        writer.flush(deferred);
    }
    
    
    m__log_hook_msg = function(tag, msg, trace, deferred) {
        
        if (!trace || typeof trace !== 'object') trace = m__get_stack_trace((trace || 1) + 1);
        
        logMsg(m__msg.out, tag, msg, ASYNC_STACK_LVL[m__get_stack_type(trace)], trace
            , '',    deferred, MSG_BOTTOM_SD, m__get_sd_line);
    };
    
    m__log_user_msg = function(tag, msg, trace, stackMsg) {
        
        if (!trace || typeof trace !== 'object') trace = m__get_stack_trace((trace || 1) + 1);
        
        logMsg(m__msg.out, tag, msg, DEBUG_STACK_LVL[m__get_stack_type(trace)], trace
            , stackMsg, false, MSG_BOTTOM_DD, m__get_dd_line, true);
    };
    
    m__log_error_msg  = function(tag, err, msg) { // TODO: all Error properties
        msg = arguments.length > 2 ? msg + '\n\n' : '';
        
        var trace = m__get_stack_trace(2);
        if (err instanceof Error) {
            logMsg(m__msg.err, tag
                , msg + 'errType : ' + err.tud_target_id + '\nmessage : ' + err.message + '\ntrace >'
                , DEBUG_STACK_LVL[m__get_stack_type(trace)], trace
                , m__get_stack_trace_msg(m__get_stack_trace(err.stack, true)
                    , M__TRACE_LEVEL.ALL, M__VIEW_STMPART_FILLER)
                , false, MSG_BOTTOM_DD, m__get_dd_line, true);
        } else {
            logMsg(m__msg.err, tag, msg + err
                , DEBUG_STACK_LVL[m__get_stack_type(trace)], trace, ''
                , false, MSG_BOTTOM_DD, m__get_dd_line, true);
        }
    };
})();







var m__attach_async_hook = function(){};
var m__detach_async_hook = function(){};

var m__hook_event_object = function(/* {object} self */){}; /* ::= {object} self */

function m__init_async_hook() {
    
    var SHOW_NTICK_ADD  = {}
      , SHOW_NTICK_RUN  = {}
      
      , SHOW_TIMER_ADD  = {}
      , SHOW_TIMER_RUN  = {}
      
      , SHOW_EVENT_ADD  = {}
      , SHOW_EVENT_RUN  = {}
      , SHOW_EVENT_INIT = {}
      , SHOW_EVENT_EMIT = {}
    ;
    SHOW_NTICK_ADD [M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.ntick.add;
    SHOW_NTICK_RUN [M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.ntick.run;
    
    SHOW_TIMER_ADD [M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.timer.add;
    SHOW_TIMER_RUN [M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.timer.run;
    
    SHOW_EVENT_ADD [M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.event.add;
    SHOW_EVENT_RUN [M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.event.run;
    SHOW_EVENT_INIT[M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.event.init;
    SHOW_EVENT_EMIT[M__STACK_TYPE_NODE] = m__cfg.nodeAsyncCallLog.event.emit;
    
    SHOW_NTICK_ADD [M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.ntick.add;
    SHOW_NTICK_RUN [M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.ntick.run;
    
    SHOW_TIMER_ADD [M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.timer.add;
    SHOW_TIMER_RUN [M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.timer.run;
    
    SHOW_EVENT_ADD [M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.event.add;
    SHOW_EVENT_RUN [M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.event.run;
    SHOW_EVENT_INIT[M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.event.init;
    SHOW_EVENT_EMIT[M__STACK_TYPE_USER] = m__cfg.userAsyncCallLog.event.emit;
    
    var _nextTick       = process.nextTick
      
      , _setImmediate   = timers.setImmediate
      , _setTimeout     = timers.setTimeout
      , _setInterval    = timers.setInterval
    ;
    var eep = events.EventEmitter.prototype
      
      , _addListener        = eep.addListener
      , _on                 = eep.on
      , _prependListener    = eep.prependListener
      
      , _init = events.EventEmitter.init
      , _emit = eep.emit
      
      , _onceWrapperName = semver.lt(NODE_SAMVER, NODE_SAMVER_EVENT_BOUND_ONCE_WRAPPER_NAME)
            ? 'g' : 'bound onceWrapper'
      , _removelistenerBypassWrappedCallback
            = semver.lt(NODE_SAMVER, NODE_SAMVER_EVENT_EMIT_REMOVELISTENER_NO_ONCE_WRAPPER) ||
              semver.eq(NODE_SAMVER, NODE_SAMVER_EVENT_EMIT_REMOVELISTENER_ONCE_WRAPPER)
    ;
    // TODO: change priority from ____AsyncCallLog.event to ____TudEventLog() ?
    eep.showTudEventLog = function(){ this.tud_event_log = true ; return this; }; // showed -> hide -> show
    eep.hideTudEventLog = function(){ this.tud_event_log = false; return this; }; // showed -> hide
    
    
    m__attach_async_hook = function() {
        
        process.nextTick = nextTickWrapper;
        
        if (timers.setImmediate !== global.setImmediate ) timers.setImmediate = setImmediateWrapper;
        else                        global.setImmediate = timers.setImmediate = setImmediateWrapper;
        
        if (timers.setTimeout   !== global.setTimeout   ) timers.setTimeout   = setTimeoutWrapper;
        else                        global.setTimeout   = timers.setTimeout   = setTimeoutWrapper;
        
        if (timers.setInterval  !== global.setInterval  ) timers.setInterval  = setIntervalWrapper;
        else                        global.setInterval  = timers.setInterval  = setIntervalWrapper;
        
        eep.addListener     = addListenerWrapper;
        eep.on              = onWrapper;
        eep.prependListener = prependListenerWrapper;
    };
    
    m__detach_async_hook = function() {
        
        process.nextTick = _nextTick;
        
        if (timers.setImmediate !== global.setImmediate ) timers.setImmediate = _setImmediate;
        else                        global.setImmediate = timers.setImmediate = _setImmediate;
        
        if (timers.setTimeout   !== global.setTimeout   ) timers.setTimeout   = _setTimeout;
        else                        global.setTimeout   = timers.setTimeout   = _setTimeout;
        
        if (timers.setInterval  !== global.setInterval  ) timers.setInterval  = _setInterval;
        else                        global.setInterval  = timers.setInterval  = _setInterval;
        
        eep.addListener     = _addListener;
        eep.on              = _on;
        eep.prependListener = _prependListener;
    };
    
    
    function inspect(v) {
        switch (typeof v) {
            case 'function' :
                return v.listener
                    ? (v.tud_target_id || m__mark_function(v).tud_target_id)
                        + '[' + (v.listener.tud_target_id || m__mark_function(v.listener).tud_target_id) + ']'
                    :  v.tud_target_id || m__mark_function(v).tud_target_id
                ;
            case 'object' :
                if (v) {
                    if (!v.constructor || v.constructor === Object) return m__inspect(v);
                    return v.tud_target_id || m__mark_instance(v).tud_target_id;
                }
        }
        return m__inspect(v);
    }
    
    function inspectArgs(args, idx) {
        var s = '';
        if (args) {
            if (arguments.length < 2) idx = 0;
            if (idx < args.length) {
                do s += inspect(args[idx]);
                while (++idx < args.length && (s += ', '));
                s = '( ' + s + ' )';
            }
        }
        return s || '()';
    }
    
    
    // TODO: repetitive dummy callback - node-v6.11.3 afterWrite - 'nop' function of arguments[4]
    // TODO: repetitive dummy callback - node-v0.10.0 afterWrite - _stream_writable.js:249
    // 'function () {\n        afterWrite(stream, state, finished, cb);\n      }'
    // TODO: repetitive dummy callback - node-v0.10.0 - fs.js:485
    // 'function () {\n        callback(undefined, 0);\n      }'
    // TODO: repetitive dummy callback - node-v0.10.0 - _stream_readable.js:395
    // 'function () {\n      maybeReadMore_(stream, state);\n    }'
    function nextTickWrapper(callback) {
        function nextTickCallbackWrapper() {
            m__current_async_traces.push(nextTickCallbackWrapper.tud_async);
            
            if (SHOW_NTICK_RUN[m__get_stack_type(nextTickCallbackWrapper.tud_async)]
                && (callback.listener + '') !== 'function () {\n        afterWrite(stream, state, finished, cb);\n      }'
                // && (callback.listener + '') !== 'function () {\n        callback(undefined, 0);\n      }'
                // && (callback.listener + '') !== 'function () {\n      maybeReadMore_(stream, state);\n    }'
            ) {
                // __(m__inspect(callback.listener + ''));
                
                m__log_hook_msg('<NTICK-RUN>'
                    , inspect(nextTickCallbackWrapper.listener) + ' ' + inspectArgs(arguments));
            }
            nextTickCallbackWrapper.listener.apply(null, arguments);
            
            m__current_async_traces.pop();
        }
        // __(m__inspect(callback + ''));
        
        if (typeof callback === 'function'
            && (typeof arguments[4] !== 'function' || arguments[4].name !== 'nop')
        ) {
            m__mark_function(callback);
            
            // __(m__inspect(callback + ''));
            
            nextTickCallbackWrapper.listener = callback;
            nextTickCallbackWrapper.tud_async = { type: M__ASYNC_TYPE_NTICK, trace: m__get_stack_trace(1) };
            
            if (SHOW_NTICK_ADD[m__get_stack_type(nextTickCallbackWrapper.tud_async)]
                && (callback + '') !== 'function () {\n        afterWrite(stream, state, finished, cb);\n      }'
                // && (callback + '') !== 'function () {\n        callback(undefined, 0);\n      }'
                // && (callback + '') !== 'function () {\n      maybeReadMore_(stream, state);\n    }'
            ) {
                // __(m__inspect(callback + ''));
                
                m__log_hook_msg('<NTICK-ADD>', inspect(callback) + ' ' + inspectArgs(arguments, 1)
                    , nextTickCallbackWrapper.tud_async.trace);
            }
            callback = nextTickCallbackWrapper;
        }
        return _nextTick.apply(this, arguments);
    }
    
    
    function setTimer(args, type, argIdx, once) {
        function setTimerCallbackWrapper() {
            m__current_async_traces.push(setTimerCallbackWrapper.tud_async);
            
            if (SHOW_TIMER_RUN[m__get_stack_type(setTimerCallbackWrapper.tud_async)])
            {
                m__log_hook_msg('<TIMER-RUN>', '"' + setTimerCallbackWrapper.tud_type + '" '
                    + inspect(setTimerCallbackWrapper.listener) + ' ' + inspectArgs(arguments));
            }
            setTimerCallbackWrapper.listener.apply(this, arguments);
            
            m__current_async_traces.pop();
        }
        if (typeof args[0] === 'function') {
            m__mark_function(args[0]);
            
            setTimerCallbackWrapper.listener = args[0];
            setTimerCallbackWrapper.tud_async = { type: M__ASYNC_TYPE_TIMER, trace: m__get_stack_trace(2) };
            setTimerCallbackWrapper.tud_type = type;
            setTimerCallbackWrapper.tud_once = once;
            
            if (SHOW_TIMER_ADD[m__get_stack_type(setTimerCallbackWrapper.tud_async)])
            {
                m__log_hook_msg('<TIMER-ADD>', '"' + type + '" ' + inspect(args[0])
                        + ' ' + inspectArgs(args, argIdx)
                    , setTimerCallbackWrapper.tud_async.trace);
            }
            args[0] = setTimerCallbackWrapper;
        }
        return args;
    }
    function setImmediateWrapper(callback)
                            { return _setImmediate.apply(this, setTimer(arguments, 'immediate', 1, true)) }
    function   setTimeoutWrapper(callback, delay)
                            { return   _setTimeout.apply(this, setTimer(arguments, 'timeout:' + delay, 2, true)) }
    function  setIntervalWrapper(callback, delay)
                            { return  _setInterval.apply(this, setTimer(arguments, 'interval:' + delay, 2)) }
    
    
    function addListener(event, callback, noStack) {
        
        function onCallbackWrapper() {
            m__current_async_traces.push(onCallbackWrapper.tud_async);
            
            if (onCallbackWrapper.tud_target.tud_event_log
                && SHOW_EVENT_RUN[m__get_stack_type(onCallbackWrapper.tud_async)]
            ) {
                m__log_hook_msg('<EVENT-RUN>', onCallbackWrapper.tud_logMsg + ' ' + inspectArgs(arguments));
            }
            onCallbackWrapper.listener.apply(onCallbackWrapper.tud_target, arguments);
            m__current_async_traces.pop();
        }
        function onceCallbackWrapper() {
            onceCallbackWrapper.tud_target.removeListener(onceCallbackWrapper.tud_event, onceCallbackWrapper);
            if (!fired) {
                fired = true;
                m__current_async_traces.push(onceCallbackWrapper.tud_async);
                
                if (onceCallbackWrapper.tud_target.tud_event_log
                    && SHOW_EVENT_RUN[m__get_stack_type(onceCallbackWrapper.tud_async)]
                ) {
                    m__log_hook_msg('<EVENT-RUN>', onceCallbackWrapper.tud_logMsg + ' ' + inspectArgs(arguments));
                }
                onceCallbackWrapper.listener.apply(onceCallbackWrapper.tud_target, arguments);
                m__current_async_traces.pop();
            }
        }
        var trace, fired = false;
        
        if (!this.tud_target_id) m__hook_event_object(this);
        
        if (typeof callback === 'function') {
            
            if (callback.name === _onceWrapperName) { // TODO: if (callback.listener) ?
                onceCallbackWrapper.listener = m__mark_function(callback.listener);
                callback = onceCallbackWrapper;
                callback.tud_isOnce = true;
                callback.tud_logMsg = inspect(this) + ' "' + event
                    + '" onceCallbackWrapper[' + inspect(callback.listener) + ']';
            } else {
                onCallbackWrapper.listener = m__mark_function(callback);
                callback = onCallbackWrapper;
                callback.tud_logMsg = inspect(this) + ' "' + event + '" ' + inspect(callback.listener);
            }
            callback.tud_target = this;
            if (noStack) {
                callback.tud_logMsg += '   /* tud meta construction after real add */';
                trace = null;
            } else {
                trace = m__get_stack_trace(2);
            }
            callback.tud_async = { type: M__ASYNC_TYPE_EVENT, trace: trace };
            callback.tud_event = event;
            
            if (this.tud_event_log && SHOW_EVENT_ADD[m__get_stack_type(callback.tud_async)])
                m__log_hook_msg('<EVENT-ADD>', callback.tud_logMsg, trace);
        }
        return callback;
    }
    function     addListenerWrapper(e, l) { return     _addListener.call(this, e, addListener.call(this, e, l)) }
    function              onWrapper(e, l) { return              _on.call(this, e, addListener.call(this, e, l)) }
    function prependListenerWrapper(e, l) { return _prependListener.call(this, e, addListener.call(this, e, l)) }
    
    
    function rawListeners(l, e) {
        var arr = l.call(this, e), i = arr.length;
        while (i--) {
            if (arr[i].tud_async && !arr[i].tud_isOnce) arr[i] = arr[i].listener;
        }
        return arr;
    }
    if (semver.lt(NODE_SAMVER, NODE_SAMVER_EVENT_LISTENERS_NO_ONCE_WRAPPER)) {
        eep.listeners = (
            function(l){ return function rawListenersWrapper(e){ return rawListeners.call(this, l, e) } }
        )(eep.listeners);
    }
    if (eep.rawListeners) { // semver.gte(NODE_SAMVER, NODE_SAMVER_EVENT_RAWLISTENERS)
        eep.rawListeners = (
            function(l){ return function rawListenersWrapper(e){ return rawListeners.call(this, l, e) } }
        )(eep.rawListeners);
    }
    
    
    events.EventEmitter.init = function initWrapper() {
        m__mark_instance(this);
        
        var trace = m__get_stack_trace(1);
        if (this.tud_event_log && SHOW_EVENT_INIT[m__get_stack_type(trace)])
        {
            m__log_hook_msg('<EVENT-INIT>', this.tud_target_id, trace);
        }
        return _init.call(this);
    };
    
    m__hook_event_object = function(self) { // TODO: should once
        m__mark_instance(self);
        
        if (self.tud_event_log && SHOW_EVENT_INIT[m__get_stack_type()])
        {
            m__log_hook_msg('<EVENT-INIT>', self.tud_target_id + '   /* tud meta construction after real init */');
        }
        var k, i;
        for (k in self._events) {
            if (typeof self._events[k] !== 'function')
                for (i = 0; i < self._events[k].length; i++) {
                    self._events[k][i] = addListener.call(self, k, self._events[k][i], true);
                }
            else self._events[k] = addListener.call(self, k, self._events[k], true);
        }
        return self;
    };
    
    
    eep.emit = function emitWrapper(e, targetEvent, targetListener) {
        if (!this.tud_target_id) m__hook_event_object(this);
        
        if (_removelistenerBypassWrappedCallback && e === 'removeListener'
            && targetListener.tud_async && !targetListener.tud_isOnce
        ) {
            targetListener = targetListener.listener;
        }
        if (this === process && (e === 'beforeExit' || e === 'exit')) m__msg.cork(true); // TODO: ?
        
        var r, i, s, listeners
          , trace = m__get_stack_trace(1)
          , stackType = m__get_stack_type(trace)
        ;
        if (this.tud_event_log && SHOW_EVENT_EMIT[stackType])
        {
            if (!ASYNC_STACK_LVL[stackType]) {
                s = '';
            } else if (listeners = this._events && this._events[e]) {
                if (typeof listeners !== 'function') {
                    s = '\nlisteners:';
                    for (i = 0; i < listeners.length; i++) {
                        s += '\n\t' + inspect(listeners[i].tud_isOnce ? listeners[i] : listeners[i].listener);
                    }
                } else {
                    s = '\nlisteners: ' + inspect(listeners.tud_isOnce ? listeners : listeners.listener);
                }
            } else {
                s = '\nlisteners: <NoLISTNER>';
            }
            m__log_hook_msg('<EVENT-EMIT>'
                , this.tud_target_id + ' "' + e + '" ' + inspectArgs(arguments, 1) + s, trace);
        }
        r = _emit.apply(this, arguments);
        
        return r;
    };
}







function tud__injectTest(f, justRun, useCallerScope) { /* f [ , justRun [ , useCallerScope ] ] */
    
    var sf = '(' + f + ')' + '();;' // ;; -> eval pass/fail
        , lines, i, s = ''
    ;
    if (!justRun) {
        m__msg.out.write();
        m__msg.out.write(m__get_at_line(m__get_msg_tag(), '[ module local test - add ]'));
        lines = sf.split('\n');
        if (i = lines.length) {
            while (i > 1) s = (i < 10 ? '\n0' : '\n') + i-- + ': ' + lines[i] + s; // TODO: 1 01 001 0001 ...
            m__msg.out.write('01: ' + lines[0] + s);
        }
        m__msg.out.write(m__get_at_line_r('[ module local test - run ]'));
        m__msg.out.flush();
    }
    try {
        f = useCallerScope ? f() : eval(sf);
        !justRun && m__msg.out.write(m__get_at_line_r('[ module local test - end ]'));
    } finally {
        !justRun && m__msg.out.write();
        m__msg.out.flush();
    }
    return f;
}







function tud__debug(title, value, depth) { /* [ title [ , value [ , depth ] ] ] */
    
    if (!m__initiated) throw new Error('tud was not initiated. run "tud.init()"'); // TODO: -> switching
    
    var trace = m__get_stack_trace(1);
    switch (arguments.length) {
        case  0 :
            if (DEBUG_STACK_LVL[m__get_stack_type(trace)] === M__TRACE_LEVEL.OFF) { // TODO: configurable trace level ?
                m__log_user_msg('<WHERE>', 'trace >', trace
                    , m__get_stack_trace_msg(trace, M__TRACE_LEVEL.APP, M__VIEW_STMPART_FILLER));
            } else {
                m__log_user_msg('<WHERE>', '', trace); // TODO: ?
            }
            return; // TODO: ?
            
        case  1 :
            if (typeof title === 'string') {
                m__log_user_msg('<MESSG>',            title , trace);
            } else {
                m__log_user_msg('<VALUE>', m__inspect(title), trace);
            }
            return title;
            
        case  2 : m__log_user_msg(title, m__inspect(value       ), trace); return value;
        default : m__log_user_msg(title, m__inspect(value, depth), trace); return value;
    }
}



function tud__messg() { /* [ {string},,, ] */
    
    var s = '', i = arguments.length;
    
    if (i--) {
        do s = arguments[i] + s;
        while (i-- && (s = M__VIEW_MSGPART_SDLINE + s));
    }
    m__log_user_msg('<MESSG>', s);
    
    return arguments[0]; // TODO: ?
}



function tud__value() { /* [ {object},,, ] */
    
    var s = '', i = arguments.length;
    
    if (i--) {
        do s = m__inspect(arguments[i]) + s;
        while (i-- && (s = M__VIEW_MSGPART_SDLINE + s));
    }
    m__log_user_msg('<VALUE>', s);
    
    return arguments[0]; // TODO: ?
}



function tud__proto(value, depth) { /* value [ , depth ] */
    
    var s = '', c = 0, p = value;
    
    do s += arguments.length > 1 ? m__inspect(p, depth) : m__inspect(p);
    while (p instanceof Object && (p = p.__proto__) // TODO: p.constructor.prototype ?
        && (s += '\n' + m__get_sd_line_r('( ' + ++c + ' )').slice(M__VIEW_MSGPART_LPDLEN) + '\n')
    );
    m__log_user_msg('<PROTO>', s);
    
    return value;
}



function tud__check(value, type, bypass) { /* value [ , type ] [ , bypass ] */
    
    function _f(msg, type, pass, bypass, resultMsg) {
        
        var trace = m__get_stack_trace(2);
        if (pass) {
            m__cfg.showSucceededCheckLog && m__log_user_msg('<CHECK>', msg + m__inspect(type, 0) + '  ->  PASS'
                , trace);
        } else {
            msg += m__inspect(type, 0) + (resultMsg || '  ->  FAIL');
            
            if (bypass || m__cfg.bypassFailedCheck) {
                if (DEBUG_STACK_LVL[m__get_stack_type(trace)] === M__TRACE_LEVEL.ALL)
                    m__log_user_msg('<CHECK>', msg, trace);
                else m__log_user_msg('<CHECK>', msg + '\ntrace >', trace
                    , m__get_stack_trace_msg(trace, M__TRACE_LEVEL.ALL, M__VIEW_STMPART_FILLER));
            } else {
                if (DEBUG_STACK_LVL[m__get_stack_type(trace)] === M__TRACE_LEVEL.ALL)
                    m__log_user_msg('<CHECK>', msg + '  ->  EXIT', trace);
                else m__log_user_msg('<CHECK>', msg + '  ->  EXIT\ntrace >', trace
                    , m__get_stack_trace_msg(trace, M__TRACE_LEVEL.ALL, M__VIEW_STMPART_FILLER));
                
                process.exit(1);
            }
        }
    }
    var msg, i = true;
    
    if (typeof type !== 'string') {
        _f('true check :  ' + m__inspect(value, 0) + ' == ', true, !!value, type);
    } else {
        msg = 'type check :  tudTypeOf ' + m__inspect(value, 0) + ' === ';
        switch (type) {
            case 'u'  : case 'undefined' : _f(msg, 'undefined', value === undefined, bypass); break;
            case 'nu' : case 'null'      : _f(msg,      'null', value ===      null, bypass); break;
            
            case 'b'  : case 'boolean'   : _f(msg,   'boolean', typeof value ===  'boolean', bypass); break;
            case 'n'  : case 'number'    : _f(msg,    'number', typeof value ===   'number', bypass); break;
            case 's'  : case 'string'    : _f(msg,    'string', typeof value ===   'string', bypass); break;
            case 'f'  : case 'function'  : _f(msg,  'function', typeof value === 'function', bypass); break;
            
            case 'o'  : case 'object'    : // not 'typeof object' but 'no primitive'
                _f(msg, 'object', value && (typeof value === 'object' || typeof value === 'function'), bypass);
                break;
            
            case 'e'  : case 'error'     :
                _f(msg, 'error', value instanceof Error, bypass);
                break;
            
            case 'a'  : case 'array'     :
                _f(msg, 'array', value instanceof Array, bypass);
                break;
            
            case 'al' : case 'arraylike' :
                if (typeof value === 'object' && typeof value.length === 'number') { // except function object
                    i = value.length;
                    while (i && ((i - 1) in value) && i--) {} // TODO: check elements up to length ?
                }
                _f(msg, 'arraylike', !i, bypass);
                break;
            
            default : _f(msg, type, false, bypass, '  ->  INVALID TYPE');
        }
    }
    return value;
}



function tud__error(error, msg) { /* error [ , msg ] */
    
    arguments.length > 1
        ? m__log_error_msg('<ERROR>', m__mark_instance(error), msg)
        : m__log_error_msg('<ERROR>', m__mark_instance(error))
    ;
    return error;
}







// TODO: deprecate tud__runs and tud__runsSafe @@@
// TODO: process.cpuUsage([previousValue]) process.hrtime([time]) @@@

function tud__runs(script /* , runs */) {
    
    var i, e, t
        , isRun = true
        , runs = arguments[1]
        , compile = typeof script === 'string' ? eval('compile = function(){ ' + script + ' }') : script
    ;
    if (typeof runs === 'number' && runs) isRun = false;
    else runs = 1;
    
    do {
        t = Date.now();
        for (i = 0; i < runs; i++) compile();
        e = Date.now() - t;
    } while (e < 1000 && isRun && (runs *= 2));
    
    // compile = function(){}; // TODO: ???
    // t = Date.now();
    // for (i = 0; i < runs; i++) compile();
    // e -= Date.now() - t;
    
    m__msg.out.write();
    m__msg.out.write(m__get_at_line(m__get_msg_tag(), '[ CYCLE ESTIMATION - REAL TIME ]'));
    m__msg.out.write('script: ' + script);
    m__msg.out.write('runs: ' + runs + '   elasped ms: ' + e + '   '
        + (Math.round(runs / e * 1e6) / 1e6) + ' (runs/ms)   '
        + Math.round(e / runs * 1e6) + ' (ns/run)');
    m__msg.out.write(m__get_at_line());
    m__msg.out.write();
    m__msg.out.flush();
    
    return runs;
}
// global.__r = global.__runs = tud__runs;

function tud__runsSafe(script /* , sandbox */ /* , runs */) {
    
    var runs, compile, i, e, t
        , isRun = true
        , context = vm.createContext(typeof arguments[1] === 'object' && arguments[1] ? arguments[1] : {})
    ;
    runs = 3 === arguments.length ? arguments[2] : arguments[1];
    if (typeof runs === 'number' && runs) isRun = false;
    else runs = 1;
    
    compile = new vm.Script(script);
    
    m__msg.out.write();
    m__msg.out.write(m__get_at_line(m__get_msg_tag(), '[ CYCLE ESTIMATION - SAFE CONTEXT ]'));
    m__msg.out.write('script: ' + script);
    m__msg.out.write('context: ' + m__inspect_row(context));
    
    do {
        t = Date.now();
        for (i = 0; i < runs; i++) compile.runInContext(context);
        e = Date.now() - t;
    } while (e < 1000 && isRun && (runs *= 2));
    
    m__msg.out.write('context-after: ' + m__inspect_row(context));
    
    context = vm.createContext({}); // TODO: ???
    compile = new vm.Script('');
    t = Date.now();
    for (i = 0; i < runs; i++) compile.runInContext(context);
    e -= Date.now() - t;
    
    m__msg.out.write('runs: ' + runs + '   elasped ms: ' + e + '   '
        + (Math.round(runs / e * 1e6) / 1e6) + ' (runs/ms)   '
        + Math.round(e / runs * 1e6) + ' (ns/run)');
    m__msg.out.write(m__get_at_line());
    m__msg.out.write();
    m__msg.out.flush();
    
    return runs;
}
// global.__rs = global.__runsSafe = tud__runsSafe;







// TODO: statistics -> stack stat , v8 module and process.memoryUsage() @@@

var m__show_process_init_log = function(          ){}
  , m__show_process_exit_log = function(/* code */){}
;
(function(){
    var getDateString = m__get_date_formatter('Y-M-D H:I:S:C'), connected = process.connected;
    
    function getStdIOE(stdio) {
        var i = 0, s = '';
        do {
            switch (stdio[i].type) { // TODO: UNKNOWN ?
                case 'fd'   :
                    s += (tty.isatty(stdio[i].fd) ? '<TTY> ' : '<FD> ') + stdio[i].fd;
                    break;
                case 'pipe' :
                    s += stdio[i].ipc ? '<PIPE> IPC'
                        : stdio[i].readable ? '<PIPE> R'
                            : stdio[i].writable ? '<PIPE> W' : '<PIPE> UNKNOWN';
                    break;
                default : s += '<UNKNOWN> ' + stdio[i].type;
            }
        } while (++i < stdio.length && (s += ' / '));
        return s;
    }
    
    function formatPid(pid) {
        return '     '.slice(Math.ceil(Math.log(pid) / Math.LN10)) + pid;
    }
    
    function getProcessInfo(endTime, exitCode) { /* [ endTime, exitCode ] */
        m__msg.out.write('logtime : ' + (endTime
            ? getDateString(M__GLOBAL_PTM) + ' ~ ' + getDateString(endTime)
                + ' , logTime( ' + ((endTime - M__GLOBAL_PTM) / 1000) + ' )'
                + ' , upTime( ' + (Math.round(process.uptime() * 1000) / 1000) + ' )'
            : getDateString(M__GLOBAL_PTM))
        );
        m__msg.out.write();
        
        endTime && (function(){
            function getLoggers(list) {
                for (var i = 0; i < list.length; i++)
                    list[i] = '[' + (list[i].fd ? (list[i].fd < 10 ? ' ' + list[i].fd : list[i].fd) : '  ')
                        + '] \'' + (list[i].nm ? path.relative(M__WORK_PATH, list[i].nm) : '') + '\''
                        + (list[i].ws ? '  ( ' + list[i].ws.tud_target_id + ' )' : '')
                    ;
                return list.join('\n                     ');
            }
            var k, s = '', map = {
                OutFiles: getLoggers(m__msg.out.getLogFileList()),
                ErrFiles: getLoggers(m__msg.err.getLogFileList()),
                OutPipes: getLoggers(m__msg.out.getLogPipeList()),
                ErrPipes: getLoggers(m__msg.err.getLogPipeList())
            };
            for (k in map) {
                if (map[k]) s += (s ? '          ' : 'logfile - ') + k + ' : ' + map[k] + '\n';
            }
            s && m__msg.out.write(s);
        })();
        
        m__msg.out.write('    cmd : '
            + process.execPath + (process.execArgv.length ? ' ' + process.execArgv.join(' ') : '')
            + '\n          ' + require.main.filename + ' ' + process.argv.slice(2).join(' ')
        );
        m__msg.out.write('    cwd : ' + M__WORK_PATH);
        m__msg.out.write();
        m__msg.out.write('process : '
            + M__GLOBAL_PSN_VIEW + ' ' + formatPid(process.pid) + ' , '
            + [path.basename(process.execPath, '.exe')]
                .concat(process.execArgv)
                .concat(path.relative(M__WORK_PATH, require.main.filename))
                .concat(process.argv.slice(2))
                .join(' ')
            + ' , ' // TODO: getStdIOE([process.stdin, process.stdout, process.stderr]) ?
            + (m__cfg.untouchableStdin
                ? '<UNTOUCHABLE>'
                : (tty.isatty(process.stdin.fd) ? '<TTY> ' : '<FD> ') + process.stdin.fd
            ) + ' / '
            + (tty.isatty(process.stdout.fd) ? '<TTY> ' : '<FD> ') + process.stdout.fd + ' / '
            + (tty.isatty(process.stderr.fd) ? '<TTY> ' : '<FD> ') + process.stderr.fd
            + (connected ? ' (connected)' : '')
            + (arguments.length > 1 ? '  =>  ' + (exitCode ? exitCode + ' (error)' : exitCode) : '')
        );
        m__msg.out.write();
    }
    
    
    m__show_process_init_log = function() {
        m__msg.out.write();
        m__msg.out.write(m__get_at_line(m__get_msg_tag(), '[ PROCESS INIT ]'));
        
        getProcessInfo();
        
        m__msg.out.write(m__get_at_line());
        m__msg.out.write();
        m__msg.out.flush();
    };
    
    m__show_process_exit_log = function(code) {
        
        var s, p, i = 0;
        
        m__msg.out.write();
        m__msg.out.write(m__get_at_line(m__get_msg_tag(), '[ PROCESS EXIT ]'));
        
        getProcessInfo(new Date(), code);
        
        while (p = m__child_proc_list[i++]) {
            // __('m__child_proc_list[' + (i - 1) + ']', p, 1);
            s = (i > 1 ? '          ' : '  child : ')
                + '[' + M__GLOBAL_OBJ_PREF + p.sid + '] ' + formatPid(p.process.pid) + ' , '
            ;
            if (path.basename(p.options.args[0], '.exe') === 'node') {
                s += 'node ' + p.options.args.slice(1).join(' ');
            } else {
                s += p.options.args.join(' ');
            }
            s += ' , ' + getStdIOE(p.options.stdio)
                + (p.options.detached ? ' (detached)' : '')
                + '  =>  ' + (p.process.killed ? '(killed)'
                    : p.process.exitCode ? p.process.exitCode + ' (error)' : p.process.exitCode)
            ;
            m__msg.out.write(s);
        }
        m__msg.out.write(m__get_at_line());
        m__msg.out.write();
        m__msg.out.flush();
    };
})();







var m__cfg = {
    
    stdioSyncMode : false,
    
    redirectStderrToStdout : process.platform === 'win32',
    untouchableStdin : // use 'ignore' or 'pipe' for childProcess.stdin
        !tty.isatty(0) && process.platform === 'win32' && semver.lt(NODE_SAMVER, NODE_SAMVER_STABLE_STDIN),
    
    // logger [
    //     {      type : 'file' | <default> 'pipe'
    //          , data : 'out'  | 'err' | <default> 'all'
    //          , path : {string} filePath | {number} fileDescriptor | {stream.Writable} writableStream
    //     },,,
    // ]
    logger : [],
    showLoggerEventLog : false,
    
    nodeAsyncCallLog : {
        // ntick : { add: false, run: false },
        // timer : { add: false, run: false, del: false },
        // event : { add: false, run: false, del: false, init: false, emit: false }
        
        ntick : { add: false, run: false },
        timer : { add: false, run: false },
        event : { add: false, run: false, init: false, emit: false }
    },
    userAsyncCallLog : {
        // ntick : { add: true, run: true },
        // timer : { add: true, run: true, del: false },
        // event : { add: true, run: true, del: false, init: true, emit: true }
        
        ntick : { add: true, run: true },
        timer : { add: true, run: true },
        event : { add: true, run: true, init: true, emit: true }
    },
    
    nodeStackViewLvl : {
        asyncCall : M__TRACE_LEVEL[M__TRACE_LEVEL.OFF], // OFF | APP | MOD | SYS | ALL
        debugCall : M__TRACE_LEVEL[M__TRACE_LEVEL.OFF]
    },
    userStackViewLvl : {
        asyncCall : M__TRACE_LEVEL[M__TRACE_LEVEL.OFF],
        debugCall : M__TRACE_LEVEL[M__TRACE_LEVEL.APP]
    },
    
    // excludedModulesInStack : [],
    excludedModulesInStack : [ 'events.js', 'console.js' ], // TODO: only sys level ? path resolve ?
    // excludedModulesInStack : [
    //     'events.js', 'console.js', 'internal/process/next_tick.js',
    //     'bootstrap_node.js', 'node.js', 'module.js', 'internal/module.js' ],
    // excludedModulesInStack : [
    //     'events.js', 'console.js', 'internal/process/next_tick.js', 'bootstrap_node.js', 'node.js',
    //     'module.js', 'internal/module.js', '_stream_duplex.js', '_stream_passthrough.js',
    //     '_stream_readable.js', '_stream_transform.js', '_stream_writable.js',
    //     'cluster.js', 'child_process.js', 'internal/child_process.js'
    // ],
    
    // webstormPlatform : process.platform, // TODO: 'linux' or 'win32'
    
    webstormConsoleSrcPath : '', // project app root
    // webstormConsoleSrcPath : 'D:\\workspace\\ws\\tud' + path.sep,
    // webstormConsoleSrcPath : '.' + path.sep,
    webstormConsoleLibPath : '', // node source's lib directory
    // webstormConsoleLibPath : 'D:\\tools\\nodejs\\node-current-src\\lib' + path.sep,
    // webstormConsoleLibPath : 'D:\\workspace\\ws\\tud\\core-modules\\core-modules' + path.sep,
    
    defaultConsoleColumns : process.stdout._type === 'pipe' ? M__GLOBAL_COL : process.stdout.columns,
    // defaultConsoleColumns : 132,
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
    
    showConfigurationLog : false,
    
    showProcessInitExitLog : {
        init : true,
        exit : true
    },
    showProcessEventLog : true,
    
    showSpawnLog : true,
    
    useGlobalTwoUnderscoreAPIs : true,
    
    showSucceededCheckLog : false,
    bypassFailedCheck : true,
    
    handleProcessUncaughtException : true
    
};



function m__show_all_async_log(asyncLog) {
    for(var i in asyncLog) for(var j in asyncLog[i]) asyncLog[i][j] = true;
}
function m__hide_all_async_log(asyncLog) {
    for(var i in asyncLog) for(var j in asyncLog[i]) asyncLog[i][j] = false;
}



var m__initiated = false;

(module.exports = exports = tud__debug).init = function tud__init(cfg) { /* [ cfg ] ::= module.exports */
    
    // delete exports.init; // TODO: ?
    if (m__initiated) return this;
    
    (function(){
        var k, kSub, tmp, i, j;
        
        for (k in cfg) {
            switch (k) {
                
                case 'logger' :
                    if (cfg[k] && typeof cfg[k] === 'object') {
                        m__cfg[k] = cfg[k] instanceof Array ? cfg[k] : [cfg[k]];
                    } else {
                        throw new Error('The value of "' + k + '" is invalid !');
                    }
                    break;
                    
                case 'nodeAsyncCallLog' :
                case 'userAsyncCallLog' :
                    if (cfg[k] && typeof cfg[k] === 'object') {
                        for (i in cfg[k]) {
                            if (i in m__cfg[k]) {
                                if (cfg[k][i] && typeof cfg[k][i] === 'object') {
                                    for (j in cfg[k][i]) {
                                        if (j in m__cfg[k][i]) m__cfg[k][i][j] = !!cfg[k][i][j];
                                        else throw new Error(
                                            '"' + k + '.' + i + '.' + j + '" is invalid tud configuration !');
                                    }
                                } else {
                                    tmp = !!cfg[k][i];
                                    for (j in m__cfg[k][i]) m__cfg[k][i][j] = tmp;
                                }
                            } else {
                                throw new Error('"' + k + '.' + i + '" is invalid tud configuration !');
                            }
                        }
                    } else {
                        cfg[k] ? m__show_all_async_log(m__cfg[k]) : m__hide_all_async_log(m__cfg[k]);
                    }
                    break;
                    
                case 'nodeStackViewLvl' :
                case 'userStackViewLvl' :
                    if (cfg[k] && typeof cfg[k] === 'object') {
                        for (kSub in cfg[k]) {
                            if (kSub in m__cfg[k]) {
                                if (!isNaN(M__TRACE_LEVEL[tmp = ('' + cfg[k][kSub]).toUpperCase()])) {
                                    m__cfg[k][kSub] = tmp;
                                } else {
                                    throw new Error('The value of "' + k + '.' + kSub + '" is invalid !');
                                }
                            } else {
                                throw new Error('"' + k + '.' + kSub + '" is invalid tud configuration key !');
                            }
                        }
                    } else {
                        if (!isNaN(M__TRACE_LEVEL[tmp = ('' + cfg[k]).toUpperCase()])) {
                            for(kSub in m__cfg[k]) m__cfg[k][kSub] = tmp;
                        } else {
                            throw new Error('The value of "' + k + '" is invalid !');
                        }
                    }
                    break;
                    
                case 'excludedModulesInStack' : // TODO: module name filtering
                    if (cfg[k] instanceof Array) {
                        m__cfg[k] = cfg[k];
                    } else {
                        throw new Error('The value of "' + k + '" is invalid !');
                    }
                    break;
                    
                case 'webstormConsoleSrcPath' :
                case 'webstormConsoleLibPath' :
                    if (cfg[k]) {
                        m__cfg[k] = path.normalize(
                            cfg[k].search(/[\\\/]$/) !== -1 ? cfg[k] : cfg[k] + path.sep
                        );
                    } else {
                        throw new Error('The value of "' + k + '" is invalid !');
                    }
                    break;
                    
                case 'defaultConsoleColumns' :
                    if (+cfg[k]) {
                        m__cfg[k] = +cfg[k];
                    } else {
                        throw new Error('The value of "' + k + '" is invalid !');
                    }
                    break;
                    
                case 'defaultInspectOptions' :
                    if (cfg[k] && typeof cfg[k] === 'object') {
                        m__copy_map(cfg[k], m__cfg[k]);
                    } else {
                        throw new Error('The value of "' + k + '" is invalid !');
                    }
                    break;
                    
                case 'showProcessInitExitLog' :
                    if (cfg[k] && typeof cfg[k] === 'object') {
                        for (kSub in cfg[k]) {
                            if (kSub in m__cfg[k]) {
                                m__cfg[k][kSub] = !!cfg[k][kSub];
                            } else {
                                throw new Error('"' + k + '.' + kSub + '" is invalid tud configuration key !');
                            }
                        }
                    } else {
                        for(kSub in m__cfg[k]) m__cfg[k][kSub] = !!cfg[k];
                    }
                    break;
                    
                default :
                    if (k in m__cfg) m__cfg[k] = !!cfg[k];
                    else throw new Error('"' + k + '" is invalid tud configuration key !');
            }
        }
        // __d('m__cfg', m__cfg, null);
    })();
    __s = m__cfg.stdioSyncMode; // TODO: debug code
    
    m__mark_instance(process, 'process');
    m__cfg.untouchableStdin || m__mark_instance(process.stdin , 'process.stdin' );
    m__mark_instance(process.stdout, 'process.stdout');
    m__mark_instance(process.stderr, 'process.stderr');
    
    m__msg = new TudMessage();
    m__msg.cork();
    
    m__init_variable_inspectors();
    m__init_msg_line_formatters();
    
    M__VIEW_MSGPART_SDLINE = '\n' + m__get_sd_line_r().slice(M__VIEW_MSGPART_LPDLEN) + '\n'; // TODO: ?
    
    ASYNC_STACK_LVL[M__STACK_TYPE_NODE] = M__TRACE_LEVEL[m__cfg.nodeStackViewLvl.asyncCall];
    ASYNC_STACK_LVL[M__STACK_TYPE_USER] = M__TRACE_LEVEL[m__cfg.userStackViewLvl.asyncCall];
    DEBUG_STACK_LVL[M__STACK_TYPE_NODE] = M__TRACE_LEVEL[m__cfg.nodeStackViewLvl.debugCall];
    DEBUG_STACK_LVL[M__STACK_TYPE_USER] = M__TRACE_LEVEL[m__cfg.userStackViewLvl.debugCall];
    
    m__excluded_modules = m__cfg.excludedModulesInStack;
    
    m__init_stack_trace_generator();
    
    m__init_async_hook();
    m__init_spawn_hook();
    
    // process.on('beforeExit', tudProcessBeforeExitHandler); // TODO: NODE_SAMVER_PROCESS_BEFOREEXIT
    events.EventEmitter.prototype.showTudEventLog();
    m__attach_async_hook();
    
    m__cfg.showProcessEventLog || process.hideTudEventLog();
    
    // m__msg = new TudMessage();
    // m__msg.cork();
    
    m__hook_event_object(process);
    m__cfg.untouchableStdin || m__hook_event_object(process.stdin);
    m__hook_event_object(process.stdout);
    m__hook_event_object(process.stderr);
    
    // TODO: (dest, type, data) + (dest) of dest{ type, data, dest } ?
    exports.removeLogger = function(dest, type, data) { /* dest [ , type [ , data ] ] ::= {boolean} passFail */
        var ret = true;
        switch (data) {
            default    :
            case 'out' :
                if (type === 'file') ret &= m__msg.out.delLogFile(dest);
                else                 ret &= m__msg.out.delLogPipe(dest);
                if (data === 'out') break;
            case 'err' :
                if (type === 'file') ret &= m__msg.err.delLogFile(dest);
                else                 ret &= m__msg.err.delLogPipe(dest);
        }
        return !!ret;
    };
    (function(){
        var i, list = m__cfg.logger
            , err = function(){ throw new Error('The value of "logger.dest" is invalid !') }
        ;
        for (i = 0; i < list.length; i++) {
            switch (list[i].data) {
                default    :
                case 'out' :
                    if (list[i].type === 'file') m__msg.out.addLogFile(list[i].dest) || err();
                    else                         m__msg.out.addLogPipe(list[i].dest) || err();
                    if (list[i].data === 'out') break;
                case 'err' :
                    if (list[i].type === 'file') m__msg.err.addLogFile(list[i].dest) || err();
                    else                         m__msg.err.addLogPipe(list[i].dest) || err();
            }
        }
    })();
    
    if (m__cfg.useGlobalTwoUnderscoreAPIs) {
        global.__                   = tud__debug;
        global.__d = global.__debug = tud__debug;
        global.__m = global.__messg = tud__messg;
        global.__v = global.__value = tud__value;
        global.__p = global.__proto = tud__proto;
        global.__c = global.__check = tud__check;
        global.__e = global.__error = tud__error;
    }
    exports.d = exports.debug = tud__debug;
    exports.m = exports.messg = tud__messg;
    exports.v = exports.value = tud__value;
    exports.p = exports.proto = tud__proto;
    exports.c = exports.check = tud__check;
    exports.e = exports.error = tud__error;
    // exports.runs       = tud__runs; // TODO: deprecated
    // exports.runsSafe   = tud__runsSafe; // TODO: deprecated
    exports.injectTest = tud__injectTest; // TODO: debug code
    
    m__cfg.handleProcessUncaughtException && process.on('uncaughtException', tudProcessUncaughtExceptionHandler);
    process.removeListener('uncaughtException', tudInitiationExceptionHandler);
    
    // if (m__cfg.showProcessInitExitLog.exit) {
    //     process.on('exit'   , tudProcessExitHandler);
    //     process.on('SIGINT' , tudProcessExitHandler);
    //     process.on('SIGHUP' , tudProcessExitHandler);
    //     process.on('SIGQUIT', tudProcessExitHandler);
    //     process.on('SIGTERM', tudProcessExitHandler);
    // }
    // m__cfg.showProcessInitExitLog.exit && process.on('exit', tudProcessExitHandler);
    process.on('exit', tudProcessExitHandler);
    m__cfg.showConfigurationLog || m__msg.truncate();
    m__msg.uncork().flush();
    m__cfg.showProcessInitExitLog.init && m__show_process_init_log();
    
    m__initiated = true;
    
    
    
    // __m(
    //     'process.pid      : ' + process.pid,
    //     'process.execPath : ' + process.execPath,
    //     'process.execArgv : ' + process.execArgv.join(', '),
    //     'process.argv     : ' + process.argv.join(', '),
    //     'process.argv0    : ' + process.argv.join(', '),
    //     'process.cwd()    : ' + process.cwd(),
    //     '      require.main.filename : ' + require.main.filename,
    //     'process.mainModule.filename : ' + process.mainModule.filename,
    //     'process.platform : ' + process.platform,
    //     'process.version  : ' + process.version
    // );
    // __('process.versions', process.versions);
    // __('process.config', process.config, 1);
    // __('process.env', process.env);
    
    
    
    // exports.showAllAsyncLog = m__show_all_async_log;
    // exports.hideAllAsyncLog = m__hide_all_async_log;
    
    // exports.getChildProcessEnv = m__get_child_process_env;
    // exports.getRootProcessTime = function(){ return M__GLOBAL_PTM };
    
    exports.getDateFormatter = m__get_date_formatter;
    
    exports.copyMap = m__copy_map;
    
    exports.inspect = m__inspect;
    // exports.inspectAll = m__inspect_all;
    // exports.inspectRow = m__inspect_row;
    
    return this;
};



function tudProcessBeforeExitHandler() {
    // m__hide_all_async_log();
    // m__detach_async_hook();
}

function tudProcessExitHandler(code) {
    // m__hide_all_async_log();
    // m__detach_async_hook();
    m__cfg.showProcessInitExitLog.exit && m__show_process_exit_log(code);
    m__msg.uncork(true).merge().flush(); // from m__msg.cork(true) on process'exit' emit hook
}



function tudInitiationExceptionHandler(error) {
    // m__hide_all_async_log();
    // m__detach_async_hook();
    // m__msg && m__msg.uncork(true).flush();
    
    __m(error.stack.replace(____dbg_basepath_regex1, '.' + path.sep).replace(____dbg_basepath_regex2, '..' + path.sep));
    
    debugger;
    process.exit(1);
}

function tudProcessUncaughtExceptionHandler(error) {
    try {
        // m__hide_all_async_log();
        // m__detach_async_hook();
        // m__msg && m__msg.uncork(true).flush();
        
        m__log_error_msg('<EXCEPTION>', m__mark_instance(error), 'process "uncaughtException"');
    } catch (followedError) {
        __m('inner exception of process "uncaughtException" >>> ' + m__mark_instance(followedError).stack
                .replace(____dbg_basepath_regex1, '.' + path.sep).replace(____dbg_basepath_regex2, '..' + path.sep)
            , 'preceding exception >>> ' + error.stack
                .replace(____dbg_basepath_regex1, '.' + path.sep).replace(____dbg_basepath_regex2, '..' + path.sep)
        );
    } finally {
        debugger;
        process.exit(1);
    }
}








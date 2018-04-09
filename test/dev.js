var tud = require('../index.js')(require('./tudConfig.js'));



var EventEmitter = require('events').EventEmitter;
var path = require('path');
var stream = require('stream');



global.zxcv0123 = Object.create({'p0':'0p0'}, {'h0':{value:'0h0'}});
global.zxcv0123.a0 = '0a0';
global.zxcv0123.b0 = '0b0';
global.zxcv0123.o0 = Object.create({'p1':'1p1'}, {'h1':{value:'1h1'}});
global.zxcv0123.o0.a1 = '1a1';
global.zxcv0123.o0.b1 = '1b1';
global.zxcv0123.o0.o1 = Object.create({'p2':'2p2'}, {'h2':{value:'2h2'}});
global.zxcv0123.o0.o1.a2 = '2a2';
global.zxcv0123.o0.o1.b2 = '2b2';
global.zxcv0123.o0.o1.o2 = Object.create({'p3':'3p3'}, {'h3':{value:'3h3'}});
global.zxcv0123.o0.o1.o2.a3 = '3a3';
global.zxcv0123.o0.o1.o2.b3 = '3b3';
global.zxcv0123.o0.o1.o2.o3 = null;







////////////////////////////////////////////////////////////////////////////////
//// 0: inner debug interface test
////////////////////////////////////////////////////////////////////////////////


tud.injectTest(function(){
    process.stdout.write('1\n', undefined, undefined, true);
    tud__injectTest(function(){
        process.stdout.write('2\n', undefined, undefined, true);
        tud__injectTest(function(){
            process.stdout.write('3\n', undefined, undefined, true);
        });
    });
});

tud.injectTest(function(){
    __();
    __('__');
    __(123);
});

tud.injectTest(function(){
    ____();
    ____('____');
    ____(123);
    ____(123,-1);
    ____(123, 0);
    ____(123, 1);
});

tud.injectTest(function(){
    // __ass();
    // __ass(false, '__ass__ass__ass');
    try { __ass()                         } catch(e) { __(e) }
    try { __ass(true)                     } catch(e) { __(e) }
    try { __ass(false)                    } catch(e) { __(e) }
    try { __ass(false, '__ass__ass__ass') } catch(e) { __(e) }
    try { __ass(false, '__ass__ass__ass') } catch(e) { __(__ins(e)) }
});

tud.injectTest(function(){
    var o1234 = function(){};
    o1234.a = 1;
    o1234.b = 2;
    o1234.o = { aa:11, bb:22 };
    
    __(__ins());
    __(__ins(1));
    __(__ins(o1234));
    __(__ins(o1234, null));
});

tud.injectTest(function(){
    __(__ins(require('assert')(1)));
    __(__ins(   console.assert(1)));
    
    try { require('assert')(0) } catch (e) { __(__ins(e)) }
    try {    console.assert(0) } catch (e) { __(__ins(e)) }
});

tud.injectTest(function(){
    __ ();
    __m();
    __m(1);
    __m(1, 2, 3);
    __m({a:1}, {a:2}, {a:3});
    
    __v();
    __v(1);
    __v(1, 2, 3);
    __v({a:1}, {a:2}, {a:3});
    
    __d();
    __d('zxcv0123');
    __d('zxcv0123', zxcv0123);
    __d('zxcv0123', zxcv0123, 1);
});







////////////////////////////////////////////////////////////////////////////////
// inner state test
////////////////////////////////////////////////////////////////////////////////


tud.injectTest(function(){
    __(__ins(process.env, null));
    __(__ins(process.config, null));
    __(__ins(process.execArgv, null));
});

tud.injectTest(function(){
    __(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
    __(path.relative('/home/prj/tud/build', '/home/prj/tud/build/index.js'));
    __(path.relative('/home/prj/tud/build/', '/home/prj/tud/build/index.js'));
    __(path.relative('/home/prj/tud/build/', '/home/prj/tud/zzz/index.js'));
    __(path.relative('/home/prj/tud/build/', './index.js'));
});

tud.injectTest(function(){
    __( path.normalize('/home/prj/tud/build'),
        path.normalize('/home/prj/tud/build/'),
        path.normalize('/home/prj/tud\\build/'),
        path.normalize('/home/prj/tud/./build/'),
        path.normalize('/home/prj/tud/zxc/../build/'),
        path.normalize('/home/prj/tud/zxc\\../build/')
    );

    __( path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'),
        path.relative('/home/prj/tud/build', '/home/prj/tud/build/index.js'),
        path.relative('/home/prj/tud/build/', '/home/prj/tud/build/index.js'),
        path.relative('/home/prj/tud/build/', '/home/prj/tud/zzz/index.js'),
        path.relative('/home/prj/tud/build/', './index.js')
    );

    __( process.cwd(), path.normalize(process.cwd()), path.normalize(process.cwd() + path.sep));

    __( path.isAbsolute('module.js'),
        path.isAbsolute('internal/module.js'),
        path.isAbsolute('/home/prj/tud/build/index.js'),
        path.isAbsolute('./index.js'),
        path.isAbsolute('D:\\workspace\\ws\\tud\\index.js'),
        path.isAbsolute('.\\index.js')
    );
});

tud.injectTest(function(){
    var s, g = M__BASE_PATH;

    __('g = ' + g);

    __( (s=     'npn/nfn.js') + '\t' + path.normalize(s) + '\t' + path.relative(g, s),
        (s=    'npn\\nfn.js') + '\t' + path.normalize(s) + '\t' + path.relative(g, s)
    );
    __( (s=    '/npn/nfn.js') + '\t' + path.normalize(s) + '\t' + path.relative(g, s),
        (s='C:\\npn\\nfn.js') + '\t' + path.normalize(s) + '\t' + path.relative(g, s)
    );
    __( (s= g + 'npn/nfn.js') + '\t' + path.normalize(s) + '\t' + path.relative(g, s),
        (s= g +'npn\\nfn.js') + '\t' + path.normalize(s) + '\t' + path.relative(g, s)
    );
});

tud.injectTest(function(){
    __( 'M__WEBSTORM_SRC_PATH = ' + m__cfg.webstormConsoleSrcPath,
        'M__WEBSTORM_LIB_PATH = ' + m__cfg.webstormConsoleLibPath
    );

    __( 'M__MAIN_FILE = ' + M__MAIN_FILE,
        'M__MAIN_PATH = ' + M__MAIN_PATH,
        'M__BASE_FILE = ' + M__BASE_FILE,
        'M__BASE_PATH = ' + M__BASE_PATH,
        'M__WORK_PATH = ' + M__WORK_PATH
    );

    __( 'M__GLOBAL_PTM      = ' + M__GLOBAL_PTM,
        'M__GLOBAL_PSN      = ' + M__GLOBAL_PSN,
        'M__GLOBAL_PID      = ' + M__GLOBAL_PID,
        'm__global_psn_list = ' + m__global_psn_list,
        'm__global_pid_list = ' + m__global_pid_list,
        'M__GLOBAL_PSN_VIEW = ' + M__GLOBAL_PSN_VIEW,
        'M__GLOBAL_OBJ_PREF = ' + M__GLOBAL_OBJ_PREF
    );
}, true);

tud.injectTest(function(){

    process.stdout.write(`
    at <top> Object.<anonymous> (./tud_test.js:171:23)
    at       Module._compile (module.js:570:32)
    at       Object.Module._extensions..js (module.js:579:10)
    at       Module.load (module.js:487:32)
    at       tryModuleLoad (module.js:446:12)
    at       Function.Module._load (module.js:438:3)
    at       Module.require (module.js:497:17)
    at       require (internal/module.js:20:19)
    at       Object.<anonymous> (./zxc.js:2:1)
    at       Module._compile (module.js:570:32)
    at <pre> Object.Module._extensions..js (module.js:579:10)
    at       Module.load (module.js:487:32)
    at       tryModuleLoad (module.js:446:12)
    at       Function.Module._load (module.js:438:3)
    at       Module.runMain (module.js:604:10)
    at       run (bootstrap_node.js:389:7)
    at       startup (bootstrap_node.js:149:9)
    at       bootstrap_node.js:502:3`
    );

    process.stdout.write('');
    process.stdout.write('\n');
    process.stdout.write('\n\n');
    process.stdout.write('\n\n\n');
    process.stdout.write('a');
    process.stdout.write('\na');
    process.stdout.write('\n\na');
    process.stdout.write('a\n');
    process.stdout.write('a\n\n');
    process.stdout.write('\n\n\na\n\n\n');

    process.stdout.write('process.stdout.write');
    process.stderr.write('process.stderr.write');

    console.log('console.log');
    console.info('console.info');
    console.trace('console.trace');
    console.warn('console.warn');
    console.error('console.error');
    console.dir({m:'console.dir'});
    console.time('console.time');
    console.timeEnd('console.time');
});







////////////////////////////////////////////////////////////////////////////////
//// inner interface test
////////////////////////////////////////////////////////////////////////////////


tud.injectTest(function(){
    __(__ins(process.stdout));
    __(__ins(m__copy_map(process.stdout, null)));
    __(__ins(process.stderr));
    __(__ins(m__copy_map(process.stderr, null)));
});

tud.injectTest(function(){
    var src = {a:123}; // TODO: native inherited enumerable getter/setter
    src.__proto__ = {p:123123123};

    __(__ins(m__copy_map()));
    __(__ins(m__copy_map(null)));
    __(__ins(m__copy_map(null, null)));
    __(__ins(m__copy_map(null, {a:111})));

    __(__ins(m__copy_map(src)));
    __(__ins(m__copy_map(src, null)));
    __(__ins(m__copy_map(src, null, true)));
    __(__ins(m__copy_map(src, null).__proto__));

    __(__ins(m__copy_map(src, {})));
    __(__ins(m__copy_map(src, {}, true)));
    __(__ins(m__copy_map(src, {}).__proto__));

    __(__ins(m__copy_map(src, {a:111,b:222,p:333})));
    __(__ins(m__copy_map(src, {a:111,b:222,p:333}, true)));
});

tud.injectTest(function(){
    __(m__inspect());
    __(m__inspect(null));
    __(m__inspect(undefined));
    __(m__inspect(true));
    __(m__inspect(123));
    __(m__inspect('123'));
    __(m__inspect([1,2,3]));
    __(m__inspect([1,2,3], { maxArrayLength:2 }));

    __(m__inspect(1));
    __(m__inspect(1, -1));
    __(m__inspect(1, 0));
    __(m__inspect(1, 1));
    __(m__inspect(1, { showHidden:true, depth:null, breakLength:0 }));

    __(m__inspect(zxcv0123));
    __(m__inspect(zxcv0123, -1));
    __(m__inspect(zxcv0123, 0));
    __(m__inspect(zxcv0123, 1));
    __(m__inspect(zxcv0123, null));
    __(m__inspect(zxcv0123, { showHidden:true, depth:null, breakLength:0 }));

    __(m__inspect_row(zxcv0123));
    __(m__inspect_row(zxcv0123, 1));
    __(m__inspect_row(zxcv0123, null));
    __(m__inspect_all(zxcv0123));
    __(m__inspect_all(zxcv0123, 1));
    __(m__inspect_all(zxcv0123, null));
});

tud.injectTest(function(){

    __d('m__msg', m__msg, 1);

    m__msg.out.write();
    m__msg.out.write('out-1');
    m__msg.out.write('out-2');

    // m__msg.cork();

    m__msg.err.write();
    m__msg.err.write('err-1');
    m__msg.err.write('err-2');
    m__msg.err.write('err-3');
    m__msg.err.write();
    m__msg.err.flush();

    __('dbg-1', 'dbg-2', 'dbg-3');

    // m__msg.uncork();

    m__msg.out.write('out-3');
    m__msg.out.write();
    m__msg.out.flush();
});

tud.injectTest(function(){
    
    process.on('beforeExit', ()=>{                     });
    // process.on('beforeExit', ()=>{ console.log('beforeExit test'); });
    // process.on('beforeExit', ()=>{ console.log('bbb'); console.log('ccc'); });
    // process.on('beforeExit', ()=>{ __('xxx'); });
}, false, true);







////////////////////////////////////////////////////////////////////////////////
//// async trace logic test
////////////////////////////////////////////////////////////////////////////////


(function(){
    (function(){
        tud.debug('2-1');
    })();
    tud.debug('1');
    (function(){
        tud.debug('2-2');
        (function(){
            tud.debug('3');
        })();
    })();
})();



(function(){
    tud.debug('func test 1-s');
    (function(){
        tud.debug('func test 2-s');
        (function(){
            tud.debug('func test 3-s');
            tud.debug('func test 3-e');
        })();
        tud.debug('func test 2-e');
    })();
    tud.debug('func test 1-e');
})();



(function(){
    eval(`
(function(){
    tud.debug('func test 1-s');
    (function(){
        tud.debug('func test 2-s');
        (function(){
            tud.debug('func test 3-s');
            tud.debug('func test 3-e');
        })();
        tud.debug('func test 2-e');
    })();
    tud.debug('func test 1-e');
})();`);
})();



(function(){
    process.nextTick(function(){
        eval(`
(function(){
    tud.debug('func test 1-s');
    (function(){
        tud.debug('func test 2-s');
        (function(){
            tud.debug('func test 3-s');
            tud.debug('func test 3-e');
        })();
        tud.debug('func test 2-e');
    })();
    tud.debug('func test 1-e');
})();`);
    })
})();



process.nextTick((v)=>{
        process.stdout.write(v);
    }, 'nextTick test: no afterWrite'
);

process.nextTick((v,f)=>{
        process.stdout.write(v + '\n' + v);
        process.stdout.write(v,f);
    // }, 'nextTick test: afterWrite', ()=>{ process.stdout.write('afterWrite') }
    }, 'nextTick test: afterWrite', ()=>{
        process.stdout.write('afterWrite');
        try {
            '123'.abc();
        } catch (e) { tud.error(e); }
    }
);



for (i = 0; i < 3; i++) process.nextTick((msg, value)=>{ tud.debug(msg, value) }, 'nextTick test', 'iteration #' + i);



i = 0; v = 'nextTick test: relayed call';
process.nextTick((v)=>{
    process.nextTick((v)=>{
        process.nextTick((v)=>{
            tud.debug(v)
        },  v + ' -> #' + i++)
    },  v + ' -> #' + i++)
}, v + ' -> #' + i++);



clearImmediate(setImmediate((s)=>{ tud.debug(s) }, 'clearImmediate test'));
clearTimeout(setTimeout((s)=>{ tud.debug(s) }, 1000, 'clearTimeout test'));
clearInterval(setInterval((s)=>{ tud.debug(s) }, 1000, 'clearInterval test'));



v1234 = setImmediate((s)=>{ tud.debug(s) }, 'clearImmediate test');
v2345 = setTimeout((s)=>{ tud.debug(s) }, 1000, 'clearTimeout test');
v3456 = setInterval((s)=>{ tud.debug(s) }, 1000, 'clearInterval test');

setTimeout((v)=>{ clearImmediate(v) }, 3000, v1234);
setTimeout((v)=>{ clearImmediate(v) }, 3000, v1234);
setTimeout((v)=>{ clearTimeout(v) }, 3000, v2345);
setTimeout((v)=>{ clearTimeout(v) }, 3000, v2345);
setTimeout((v)=>{ clearInterval(v) }, 3000, v3456);
setTimeout((v)=>{ clearInterval(v) }, 3000, v3456);



setImmediate((s)=>{ tud.debug(s) }, 'setImmediate test');
setTimeout((s)=>{ tud.debug(s) }, 0, 'setTimeout test');
o1234 = setInterval((s)=>{ tud.debug(s) }, 1000, 'setInterval test');
setTimeout((v)=>{ clearInterval(v) }, 5000, o1234);



e1234 = new EventEmitter();
e1234.once('newListener', (e,l)=>{ tud.debug('once newListener', {e:e,l:l}, null) });
e1234.on('newListener', (e,l)=>{ tud.debug('on newListener', {e:e,l:l}, null) });
tud.value(e1234.listeners('newListener'));
e1234.once('removeListener', (e,l)=>{ tud.debug('once removeListener', {e:e,l:l}, null) });
e1234.on('removeListener', (e,l)=>{ tud.debug('on removeListener', {e:e,l:l}, null) });
tud.value(e1234.listeners('removeListener'));
e1234.once('onOrOnceEvent', ()=>{ tud.debug('once onOrOnceEvent') });
e1234.on('onOrOnceEvent', ()=>{ tud.debug('on onOrOnceEvent') });
tud.value(e1234.listeners('onOrOnceEvent'));
e1234.removeAllListeners();
tud.value(e1234.eventNames());



f1234 = (x)=>{ tud.debug('f1234', x) };
e1234 = new EventEmitter();

e1234.once('event__once_remove_test', f1234);
tud.value(e1234.listeners('event__once_remove_test'));
e1234.emit('event__once_remove_test', 'MessageMessageMessage...');
tud.value(e1234.listeners('event__once_remove_test'));

e1234.once('event__once_remove_test', f1234);
tud.value(e1234.listeners('event__once_remove_test'));
e1234.removeListener('event__once_remove_test', f1234);
tud.value(e1234.listeners('event__once_remove_test'));

e1234.on  ('event__once_remove_test', f1234);
e1234.once('event__once_remove_test', f1234);
tud.value(e1234.listeners('event__once_remove_test'));
e1234.removeAllListeners('event__once_remove_test');
tud.value(e1234.listeners('event__once_remove_test'));

e1234.on  ('removeListener', (e,l)=>{ tud.debug('on removeListener', {e:e,l:l}, null) });
e1234.on  ('event__once_remove_test', f1234);
e1234.once('event__once_remove_test', f1234);
tud.value(e1234.listeners('removeListener'));
tud.value(e1234.listeners('event__once_remove_test'));
e1234.removeAllListeners();
tud.value(e1234.listeners('removeListener'));
tud.value(e1234.listeners('event__once_remove_test'));



var z=new EventEmitter();
// function f1(s){ process.stdout.write('received in f1 : ' + s) }
// function f1(s){ console.log('received in f1 : ' + s) }
// function f2(s){ console.log('received in f2 : ' + s) }
// function f1(s){ tud.debug('received in f1 : ' + s) }
// function f2(s){ tud.debug('received in f2 : ' + s) }
function f(s) { console.log(s) }
// function f(s) { console.log(s); debugger }
function f11(s){ process.nextTick(f, 'received in f11 : ' + s) }
function f22(s){ process.nextTick((s)=>{ console.log(s) }, 'received in f22 : ' + s) }
function f33(s){ setTimeout((s)=>{ console.log(s) }, 0, 'received in f33 : ' + s) }
function f1(s){ s = 'received in f1 : ' + s; process.nextTick(f, s); process.nextTick(f11, s) }
function f3(s){ s = 'received in f3 : ' + s; setTimeout(f, 0, s); setTimeout(f33, 0, s) }
z.on('zzz', f1);
z.on('zzz', (s)=>{ s = 'received in f2 : ' + s; process.nextTick(f, s); process.nextTick(f22, s) });
z.on('zzz', f3);
z.emit('zzz', 'for ffffffffffff~');
// z.removeListener('zzz', f1);
// z.removeListener('zzz', f2);
z.removeAllListeners('zzz');



tud.getReadableFromString = function(s, e) {
    var rs = new stream.Readable({ highWaterMark: s.length, encoding: e ? e : 'utf8' });
    rs.push(s);
    rs.push(null);
    return rs;
};
tud.getWritableToString = function(f) {
    return f && new stream.Writable({
        write: function(chunk, encoding, callback) {
            callback();
            f(chunk.toString());
        }
    });
};
// tud.debug(tud.getReadableFromString('r1', 'utf8').read());
// tud.debug(tud.getReadableFromString('r2').read());
// tud.getWritableToString(function(s){ tud.debug(s) }).write('w');
// tud.getReadableFromString('p').pipe(tud.getWritableToString(function(s){ tud.debug(s) }));

r1=tud.getReadableFromString('r1', 'utf8').showTudEventLog();
tud.debug(r1.read());
r2=tud.getReadableFromString('r2').showTudEventLog();
tud.debug(r2.read());
w =tud.getWritableToString((s)=>{ tud.debug(s) }).showTudEventLog();
w.write('w');
pr=tud.getReadableFromString('p').showTudEventLog();
pw=tud.getWritableToString((s)=>{ tud.debug(s) }).showTudEventLog();
pr.pipe(pw);







////////////////////////////////////////////////////////////////////////////////
//// user interface test
////////////////////////////////////////////////////////////////////////////////


tud.debug();
tud.debug('zxcv0123');
tud.debug(zxcv0123);

(function f1234() { tud.debug() })();
(function f1234() { tud.debug() }).call(new require('events')());
process.nextTick(function(){ tud.debug() });

tud.debug('');
tud.debug('', '');
tud.debug('message', 'value');
tud.debug('return of where', tud.debug());
tud.debug('zxcv0123', zxcv0123);
tud.debug(zxcv0123, zxcv0123);

tud.debug('zxcv0123\n1', zxcv0123, 1);
tud.debug('zxcv0123\nshowHidden:true', zxcv0123, { showHidden:true });
tud.debug('zxcv0123\ndepth:null', zxcv0123, null);
tud.debug('zxcv0123\nshowHidden:true\ndepth:null', zxcv0123, { showHidden:true, depth:null });

qwer1234 = tud.injectTest(function(){ return m__copy_map(zxcv0123, {}) }, true);
tud.debug('zxcv0123\nwith inherited', qwer1234);
tud.debug('zxcv0123\nwith inherited\nshowHidden:true\ndepth:null', qwer1234, { showHidden:true, depth:null });

tud.debug('process.stdout\n-1', process.stdout, -1);
tud.debug('process.stdout\n0', process.stdout, 0);

tud.debug(  '123456789a123456789b\nc\n\n\nd'   ,   '123456789a123456789b\nc\n\n\nd'   );
tud.debug('\n123456789a123456789b\nc\n\n\nd\n' , '\n123456789a123456789b\nc\n\n\nd\n' );
tud.debug(      '56789a123456789\t\t\tb'       ,       '56789a123456789\t\t\tb'       );
tud.debug(  '123456789a123456789\n1\t\t\t\t89b',   '123456789a123456789\n1\t\t\t\t89b');

tud.debug('0000000000000000000', [0], { breakLength:0 });
tud.debug('00000000000000000001', [0], { breakLength:0 });
tud.debug('00000000000000000001\n2', [0], { breakLength:0 });

tud.debug('0000000000000000000\n1', [0,1], { breakLength:0 });
tud.debug('00000000000000000001\n2', [0,1], { breakLength:0 });
tud.debug('00000000000000000001\n2\n3', [0,1], { breakLength:0 });

tud.debug('0000000000000000000', [0,1], { breakLength:0 });
tud.debug('00000000000000000001', [0,1], { breakLength:0 });
tud.debug('00000000000000000001\n2', [0,1], { breakLength:0 });

tud.debug('0000000000000000000\n1', [0], { breakLength:0 });
tud.debug('00000000000000000001\n2', [0], { breakLength:0 });
tud.debug('00000000000000000001\n2\n3', [0], { breakLength:0 });

tud.debug('long string', '0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9');
tud.debug('long array', '0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9'.split(' '), { maxArrayLength:10 });



tud.messg();
tud.messg(tud.messg('0\t\t1\n2'));
tud.messg(
    undefined,
    null,
    NaN,
    0,
    false,
    '',
    '0\t\t1\n2',
    '3',
    [4,44,444],
    {4:4,44:44,444:444}
);

f1234 = function(){ tud.messg(arguments) };
f1234(5,55,555);
tud.messg(f1234);
f1234.qweasdzxc = 'qweasdzxc';
tud.messg(f1234);



tud.value();
tud.value(tud.value('0\t\t1\n2'));
tud.value(
    undefined,
    null,
    NaN,
    0,
    false,
    '',
    '0\t\t1\n2',
    '3',
    [4,44,444],
    {4:4,44:44,444:444}
);

f1234 = function(){ tud.value(arguments) };
f1234(5,55,555);
tud.value(f1234);
f1234.qweasdzxc = 'qweasdzxc';
tud.value(f1234);



tud.proto(1, { showHidden:true });
tud.proto(null, { showHidden:true });
tud.proto({}, { showHidden:true });
tud.proto(zxcv0123);
tud.proto(zxcv0123, { showHidden:true });
f1234 = function(){ tud.debug(arguments) };
tud.proto(f1234);
tud.proto(f1234, { showHidden:true });
f1234.qweasdzxc = 'qweasdzxc';
tud.proto(f1234);
a = {a:123};
tud.proto(a);
a.__proto__ = f1234.__proto__;
f1234.__proto__ = a;
tud.proto(a);
tud.proto(f1234);
tud.proto(process.stdout, -1);
// tud.proto(process.stdout, 0);



// tud.check(); // X => exit
tud.check(true); // O
// tud.check(false); // X => exit
tud.check(false, true); // X
tud.check('', true); // X
tud.check(!tud.check(0, true), true); // X -> O
tud.check({}, true); // O

tud.check(undefined, 'u', true); // O
tud.check(undefined, 'nu', true); // X
tud.check(null, 'nu', true); // O
tud.check(null, 'u', true); // X
tud.check({length:0}, 'u', true); // X

tud.check({}, '', true); // E
tud.check({}, 'zzz', true); // E
tud.check(true, 'b', true); // O
tud.check(1, 'b', true); // X
tud.check(NaN, 'n', true); // O
tud.check(true, 'n', true); // X
tud.check('', 's', true); // O
tud.check('zzz', 's', true); // O
tud.check(String, 's', true); // X
tud.check(new String(), 's', true); // X
tud.check(function(){}, 'f', true); // O
tud.check(new function(){}, 'f', true); // X
tud.check({}, 'o', true); // O
tud.check([123], 'o', true); // O
tud.check({'0':123, length:1}, 'o', true); // O
tud.check(function(){}, 'o', true); // O !!!
tud.check(null, 'o', true); // X !!!

tud.check([], 'a', true); // O
tud.check([123], 'a', true); // O
tud.check({length:0}, 'a', true); // X
tud.check({}, 'a', true); // X
tud.check({length:0}, 'al', true); // O
tud.check([], 'al', true); // O
tud.check({length:undefined}, 'al', true); // X !!!
(function()  { tud.check(arguments, 'al', true) })(); // O
(        ()=>{ tud.check(arguments, 'al', true) })(); // O , not arrow functions' but module's arguments
( (...args)=>{ tud.check(args     , 'al', true) })(); // O
tud.check(function(){}, 'al', true); // X !!!
tud.check((((z1234=function(a){})[0]=123),z1234), 'al', true); // X !!!
tud.check({'0':123, length:1}, 'al', true); // O
tud.check([123], 'al', true); // O
tud.check({length:1}, 'al', true); // X !!!

process.nextTick(function(){ tud.check(true) });
// process.nextTick(function(){ tud.check(false) });
process.nextTick(function(){ tud.check(false, true) });



try { throw '123'; } catch (e) { tud.error(e
    , 'in case of no error object\nin case of no error object\nin case of no error object'); }
try { throw Error('123'); } catch (e) { tud.error(e); }
try { '123'.abc(); } catch (e) { tud.error(e); }

// throw '123';
// throw Error('123');
// '123'.abc();



// tud.runs("");
// tud.runs(           "'zxc'.repeat(  1).split('x')");
// tud.runs(           "'zxc'.repeat( 10).split('x')");
// tud.runs(           "'zxc'.repeat(100).split('x')");
//
// tud.runs(function(){ 'zxc'.repeat(100).split('x') }
//     , tud.runs("'zxc'.repeat(100).split('x')")
// );
//
// tud.runsSafe("");
// tud.runsSafe(           "'zxc'.repeat(  1).split('x')");
// tud.runsSafe(           "'zxc'.repeat( 10).split('x')");
// tud.runsSafe(           "'zxc'.repeat(100).split('x')");
//
// tud.runsSafe("if (this.a && this.b) b = a;", {a:1,b:2}
//     , tud.runsSafe("if ('a' in this && 'b' in this) b = a;", {a:1,b:2})
// );
//
// aaa = 111;
// bbb = 222;
// tud.runsSafe("bbb = aaa", global);



__('__');
__d('__d');
__debug('__debug');
__m('__m');
__messg('__messg');
__v(new (function __v(){}));
__value(new (function __value(){}));
__p(function __p(){});
__proto(function __proto(){});
__c(__c, 'f', true);
__check(__check, 'f', true);
__e(new Error('__e'));
__error(new Error('__error'));













delete global.zxcv0123;











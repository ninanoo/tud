var tudConfig = require('./tudConfig.js');

tudConfig.defaultInspectOptions = {
    showHidden      : false,
    depth           : 0,
    colors          : true,
    customInspect   : true,
    showProxy       : false,
    maxArrayLength  : 32,
    breakLength     : 60
};
tudConfig.useConsoleAnsiColor = true;

var tud = require('../index.js')(tudConfig);



var tmp;

tmp = Object.create({'p0': '0p0'}, {'h0': {value: '0h0'}});
tmp.a0 = '0a0';
tmp.b0 = '0b0';
tmp.o0 = Object.create({'p1': '1p1'}, {'h1': {value: '1h1'}});
tmp.o0.a1 = '1a1';
tmp.o0.b1 = '1b1';
tmp.o0.o1 = Object.create({'p2': '2p2'}, {'h2': {value: '2h2'}});
tmp.o0.o1.a2 = '2a2';
tmp.o0.o1.b2 = '2b2';
tmp.o0.o1.o2 = Object.create({'p3': '3p3'}, {'h3': {value: '3h3'}});
tmp.o0.o1.o2.a3 = '3a3';
tmp.o0.o1.o2.b3 = '3b3';
tmp.o0.o1.o2.o3 = null;

__('check inspect', tmp);

debugger;

__('check inspect\nshowHidden : true\ndepth : null', tmp, {showHidden: true, depth: null});




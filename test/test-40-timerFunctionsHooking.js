var tudConfig = require('./tudConfig.js');

tudConfig.nodeAsyncCallLog = true;
tudConfig.userAsyncCallLog = true;

// tudConfig.nodeStackViewLvl = 'off';
// tudConfig.nodeStackViewLvl = 'app';
// tudConfig.nodeStackViewLvl = 'sys';
// tudConfig.userStackViewLvl = 'off';
// tudConfig.userStackViewLvl = 'app';
// tudConfig.userStackViewLvl = 'sys';

var tud = require('../index.js')(tudConfig);



// clearImmediate(setImmediate(function(s){ tud.debug(s) },    'timers - Immediate'));
// clearTimeout  (setTimeout  (function(s){ tud.debug(s) }, 0, 'timers - Timeout'  ));
// clearInterval (setInterval (function(s){ tud.debug(s) }, 0, 'timers - Interval' ));



var tmp1, tmp2, tmp3;

tmp1 = setImmediate(function (s) {
    tud.debug(s);
    clearImmediate(tmp1);
}, 'timers - Immediate');
tmp2 = setTimeout(function (s) {
    tud.debug(s);
    clearTimeout(tmp2);
}, 0, 'timers - Timeout');
tmp3 = setInterval(function (s) {
    tud.debug(s);
    clearInterval(tmp3);
}, 0, 'timers - Interval');




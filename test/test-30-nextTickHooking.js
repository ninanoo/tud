var tudConfig = require('./tudConfig.js');

// tudConfig.nodeAsyncCallLog = {
//     // ntick : { add: true, run: true },
//     ntick : false,
//     timer : false,
//     event : false
// };
tudConfig.nodeAsyncCallLog = true;

// tudConfig.userAsyncCallLog = {
//     ntick : { add: true, run: true },
//     timer : { add: true, run: true },
//     event : { add: true, run: true, init: true, emit: true }
// };
tudConfig.userAsyncCallLog = true;

tudConfig.nodeStackViewLvl = 'off';
// tudConfig.nodeStackViewLvl = 'app';
// tudConfig.nodeStackViewLvl = 'sys';
tudConfig.userStackViewLvl = 'off';
// tudConfig.userStackViewLvl = 'app';
// tudConfig.userStackViewLvl = 'sys';

// tudConfig.excludedModulesInStack = [];
// tudConfig.excludedModulesInStack = [ 'events.js', 'console.js' ];
// tudConfig.excludedModulesInStack = [
//     // 'events.js', 'console.js', 'internal/process/next_tick.js', 'bootstrap_node.js', 'node.js',
//     'events.js', 'console.js',
//     'module.js', 'internal/module.js', '_stream_duplex.js', '_stream_passthrough.js',
//     '_stream_readable.js', '_stream_transform.js', '_stream_writable.js',
//     'cluster.js', 'child_process.js', 'internal/child_process.js'
// ];

var tud = require('../index.js').init(tudConfig);



process.nextTick(function test_1_CBF_1(v){
    __('test 1\'s 1st callback');
    process.nextTick(function test_1_CBF_2(){
        __('test 1\'s 2st callback');
        process.nextTick(function test_1_CBF_3(){
            __('test 1\'s 3st callback');
        });
    })
});



process.nextTick(function test_2_CBF(){
        process.stdout.write('called by nextTick'
            , function test_2_CBF_afterWrite(){
                try {
                    throw new Error('check nextTick stack');
                } catch (e) {
                    __e(e);
                }
            }
        );
    }
);




var tud = require('../index.js')(require('./spawnTudConfig.js'));



var child_process = require('child_process');
var path = require('path');



var child = child_process.spawn('node', [path.resolve(__dirname, 'spawnTarget.js')]
    // var child = child_process.fork(path.resolve(__dirname, 'spawnTarget.js')
    // , {stdio: [0, 1, 2]}
    // , { stdio: ['ignore', 1, 2] }
    // , { stdio: ['pipe', 1, 2] }
    // , { stdio: [0, 1, 2, 'ipc'] }
    // , { stdio: ['ignore', 1, 2, 'ipc'] }
    // , { stdio: ['pipe', 1, 2, 'ipc'] }
    // , { stdio: ['ignore', 'ignore', 'ignore', 'ipc'] }
    , { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] }
    // , { stdio: [tty.isatty(0) ? 0 : 'pipe', 1, 2, 'ipc'] }
    // , { silent : true }
);
child.stdout.on('data', function(chunk){ process.stdout.writeNative(chunk) });
child.stderr.on('data', function(chunk){ process.stderr.writeNative(chunk) });

// __('child', child);
if (child.connected) {
    child.on('message', function (m) {
        __('child -> parent', m);
        child.send('hi child ~');
        
        // child.disconnect();
        // throw new Error(tud.getDateFormatter('Y-M-D H:I:S:C', Date.now()));
    });
}




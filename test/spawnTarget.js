var tud = require('../index.js').init(require('./spawnTudConfig.js'));



if (process.connected) {
    process.on('message', function(message) {
        __('parent -> child', message);
        
        process.disconnect();
        // throw new Error(tud.getDateFormatter('Y-M-D H:I:S:C', Date.now()));
    });
    process.send('hi parent ~');
}




// var tudConfig = require('../tudConfig.js');
// var tud = require('../../index.js')(tudConfig);
var tud = require('../../index.js'); // TODO: removed init call bug in submodules



module.exports = exports = function() {
    try {
        throw new Error('check user module stack');
    } catch (e) {
        __e(e);
    }
};




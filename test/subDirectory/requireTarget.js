var tudConfig = require('../tudConfig.js');
var tud = require('../../index.js').init(tudConfig);



module.exports = exports = function() {
    try {
        throw new Error('check user module stack');
    } catch (e) {
        __e(e);
    }
};




var tudConfig = require('./tudConfig.js');
var tud = require('../index.js')(tudConfig);



(function(){
    tud.debug('stack call 1-s');
    (function(){
        tud.debug('stack call 2-s');
        (function(){
            tud.debug('stack call 3-s');
            tud.debug('stack call 3-e');
        })();
        tud.debug('stack call 2-e');
    })();
    tud.debug('stack call 1-e');
})();



try {
    throw new Error('check stack')
} catch (e) {
    __e(e)
}



eval('(' + function () {
    (function () {
        try {
            throw new Error('check eval stack')
        } catch (e) {
            __e(e)
        }
    })()
} + ')()');

require('./subDirectory/requireTarget.js')();
    



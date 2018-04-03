var tud = require('../').init({
    showProcessInitExitLog: false,
    userStackViewLvl: 'app'
});

__e(new Error('I am a error'), 'Here is optional debugging message.');

var url = 'http://www.example.co';

require('http').get(url, function(res) {
    res.on('data', function(data) {
        __m(data);
    });
}).on('error', function(err) {
    __e(err);
});
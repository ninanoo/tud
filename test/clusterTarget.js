var tud = require('../index.js').init(require('./spawnTudConfig.js'));



var http = require('http');



var requestOptions = {
    hostname : 'localhost',
    port     : process.env['TEST_SERVER_PORT'],
    path     : '/',
    method   : 'POST'
};
__('requestOptions', requestOptions);

var req = http
    .request(requestOptions, function(res) {
        __m('on http.ClientRequest"response"',
            'res.statusCode : ' + res.statusCode,
            'res.statusMessage : ' + res.statusMessage,
            'res.headers : ' + tud.inspect(res.headers),
            'res.trailers : ' + tud.inspect(res.trailers)
        );
        res.on('data', function(chunk){ __('from server', chunk.toString()) });
        
    }).on('error', function(err) {
        __e(err, 'on http.ClientRequest"error"');
        
    }).end('hi server ~')
;




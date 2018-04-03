var tud = require('../index.js').init(require('./spawnTudConfig.js'));



var cluster = require('cluster');
var http = require('http');
var path = require('path');
var child_process = require('child_process');



var worker, args, i
  
  , PORT = 8080
  , SERVER_LISTENING_MSG = 'serverListening'
  , CLIENT_EXIT_MSG = 'clientExit'
;

if (cluster.isMaster) {
    __('cluster - master : ' + process.pid);
    
    // args = process.execArgv;
    // i = args.length;
    // while (i-- && args[i].indexOf('--debug-brk=')) {}
    // if (i < 0) {
    //     cluster.setupMaster({
    //         // exec: path.resolve(__dirname, 'spawnTarget.js'),
    //         silent: true
    //     });
    // } else {
    //     cluster.setupMaster({
    //         // exec: path.resolve(__dirname, 'spawnTarget.js'),
    //         silent: true,
    //         execArgv: [ '--debug-brk=' + (+args[i].slice('--debug-brk='.length) + 1) ]
    //         // execArgv: []
    //     });
    // }
    cluster.setupMaster({
        // exec: path.resolve(__dirname, 'spawnTarget.js'),
        silent: true
    });
    worker = cluster.fork();
    
    // worker.process.stdout.pipe(process.stdout);
    // worker.process.stderr.pipe(process.stderr);
    worker.process.stdout.on('data', function(chunk){ process.stdout.writeNative(chunk) });
    worker.process.stderr.on('data', function(chunk){ process.stderr.writeNative(chunk) });
    // worker.process.stdout.on('data', function(chunk){ fs.writeSync(process.stdout.fd, chunk) });
    // worker.process.stderr.on('data', function(chunk){ fs.writeSync(process.stderr.fd, chunk) });
    
    worker.on('message', function(msg) {
        if (__('from worker', msg) === SERVER_LISTENING_MSG) {
            process.env['TEST_SERVER_PORT'] = PORT;
            child_process
                // .spawn('node', [path.resolve(__dirname, 'clusterTarget.js')]
                //     , { env: process.env, stdio: [0, 1, 2] })
                .spawn('node', [path.resolve(__dirname, 'clusterTarget.js')]
                    , { env: process.env, stdio: ['ignore', 1, 2] })
                .once('exit', function(code, signal){
                    worker.send(CLIENT_EXIT_MSG);
                });
        }
    });
    
} else {
    
    process.connected
        ? __('cluster - worker : ' + process.pid + ' (connected)')
        : __('cluster - worker : ' + process.pid)
    ;
    
    process.on('message', function(msg) {
        if (__('from master', msg) === CLIENT_EXIT_MSG) svr.close();
    });
    var svr = http
        .createServer(function(req, res) {
            __m('on http.Server"request"',
                'req.method : ' + req.method,
                'req.url : ' + req.url,
                'req.connection.localAddress : ' + req.connection.localAddress,
                'req.connection.localPort : ' + req.connection.localPort,
                'req.connection.remoteAddress : ' + req.connection.remoteAddress,
                'req.connection.remotePort : ' + req.connection.remotePort,
                'req.headers : ' + tud.inspect(req.headers),
                'req.trailers : ' + tud.inspect(req.trailers)
            );
            req.on('data', function(chunk){ __('from client', chunk.toString()) });
            
            res.writeHead(200);
            res.end('hi client ~');
        })
        .on('close', function() {
            process.disconnect();
        })
        .on('error', function(err) {
            __e(err, 'on http.Server"error"');
            svr.close();
        })
        .on('clientError', function(err, socket) {
            __m('on http.Server"clientError"',
                'err : ' + tud.inspect(err),
                'socket : ' + tud.inspect(socket)
            );
            socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
            svr.close();
        })
        .listen(PORT, function(){
            process.send(SERVER_LISTENING_MSG);
        })
    ;
    
    // process.disconnect();
    // process.exit();
    // setTimeout(function(){ process.disconnect() }, 1000);
    // throw new Error(tud.getDateFormatter('Y-M-D H:I:S:C', Date.now()));
}




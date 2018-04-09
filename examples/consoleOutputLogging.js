var pipeStream = new require('stream').PassThrough();

var tud = require('../')({
    showProcessInitExitLog: false,
    userAsyncCallLog:  false,
    userStackViewLvl: 'off',
    logger : [
        { type: 'file', data: 'out', dest: 'stdout.log' },
        { type: 'file', data: 'err', dest: 'stderr.log' },
        { type: 'file', dest: 'stdall.log' },
        { dest: pipeStream }
    ]
});

process.on('exit', function() {
    require('fs').writeFileSync('stdallPipe.log', pipeStream.read());
});
console.log('stdout message');
console.error('stderr message');
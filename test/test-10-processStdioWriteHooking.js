var tudConfig = require('./tudConfig.js');
var tud = require('../index.js')(tudConfig);



process.stdout.write('');
process.stdout.write('\n');
process.stdout.write('\n\n');
process.stdout.write('\n\n\n');
process.stdout.write('message');
process.stdout.write('\nmessage');
process.stdout.write('\n\nmessage');
process.stdout.write('message\n');
process.stdout.write('message\n\n');
process.stdout.write('\n\n\nmessage\n\n\n');

// process.stdout.write('base64 encoded stdout message\n');
process.stdout.write('YmFzZTY0IGVuY29kZWQgc3Rkb3V0IG1lc3NhZ2U=', 'base64');

// process.stdout.write('base64 encoded stderr message\n');
process.stderr.write('YmFzZTY0IGVuY29kZWQgc3RkZXJyIG1lc3NhZ2U=', 'base64');



console.log('console.log()');
console.info('console.info()');
console.trace('console.trace()');
console.warn('console.warn()');
console.error('console.error()');
console.dir({m:'console.dir()'});
console.time('console.time()');
console.timeEnd('console.time()');




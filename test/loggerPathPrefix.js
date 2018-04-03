var fs = require('fs');
var path = require('path');



fs.existsSync(path.resolve(__dirname, 'log')) || fs.mkdirSync(path.resolve(__dirname, 'log'));

module.exports = exports = path.resolve(path.resolve(__dirname, 'log'), path.basename(require.main.filename)) + '.';




var tud = require('../').init({
    showProcessInitExitLog: false,
    userStackViewLvl: 'off',
    showSucceededCheckLog: true
});

(function truthCheck(arg1, arg2) {
    __c(arg1);
    __c(arg2);
})('a');

(function arrayLikeCheck(arg) {
    __c(arg, 'a');
    __c(arg, 'al');
    __c(arguments, 'a');
    __c(arguments, 'al');
})(['a','b','c']);

process.nextTick(function objectCheck() {
    __c({}, 'o');
    __c(null, 'o');
    __c(null, 'nu');
});
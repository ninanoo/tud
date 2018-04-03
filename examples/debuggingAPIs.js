var tud = require('../').init({
    showProcessInitExitLog: false,
    userStackViewLvl: 'off'
});

var map = {
    key: 'message 0', obj: {
        key: 'message 1', obj: {
            key: 'message 2', obj: {
                key: 'message 3'
}}}};

process.nextTick(function whereIsHere(){
    __();
});
__('message');
__('default depth', map   );
__(      '2 depth', map, 2);

__m(   'message a' ,    'message b' ,    'message c');
__v({a:'message a'}, {b:'message b'}, {c:'message c'}, map);

function A(){ this.a = 123 }
A.prototype = { a: 999 };
__p(new A());
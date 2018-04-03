var tud = require('../').init({
    showProcessInitExitLog: false,
    nodeStackViewLvl: 'off',
    userStackViewLvl: { asyncCall: 'app', debugCall: 'sys' }
});

setTimeout(
    function helloWorld(){ console.log('Hello World') }, 3000
);
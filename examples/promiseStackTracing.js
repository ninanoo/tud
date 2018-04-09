var tud = require('../')({
    showProcessInitExitLog: false,
    showProcessEventLog: false,
    nodeAsyncCallLog: true,
    userAsyncCallLog: true,
    nodeStackViewLvl: 'off',
    userStackViewLvl: 'app'
});

if (process.version[1] < 8) Promise = require("bluebird");

function lookupUrl(url) {
    return new Promise(
        function(resolve, reject) {
            require('dns').lookup(url,
                function dnsLookupCallback(error, addresses) {
                    if (error) reject(error);
                    else resolve(addresses);
                }
            );
        }
    ).then(
        function(addresses) {
            console.log(url, addresses);
        }
    );
}
lookupUrl('example.co').catch(
    function(error) {
        return lookupUrl('example.com');
    }
).catch(
    function(error) {
        console.error('There is no available url.');
    }
);
'use strict';
console.log('hello');
var getAvailPort = require('./utils/getAvailPort');
console.log(getAvailPort);
var port = getAvailPort(9999);
console.log(port);

module.exports = function (grunt, options) {
    return {
        options: {
            base: ''
        },
        webserver: {
            options: {
                port: port,
                keepalive: true
            }
        },
        devserver: {
            options: {
                port: 9999
            }
        },
        testserver: {
            options: {
                port: 9999
            }
        },
        coverage: {
            options: {
                base: 'coverage/',
                directory: 'coverage/',
                port: 5555,
                keepalive: true
            }
        }
    };
};

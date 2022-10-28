// EcmaScript-6 Support
require('@babel/register')({
    extensions: ['.js']
});

module.exports = require('./server.js');

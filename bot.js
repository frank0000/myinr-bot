var botBuilder = require('claudia-bot-builder');
var RequestHandler = require('./lib/request-handler');

module.exports = botBuilder(function(request) {
    return new RequestHandler().handle(request);
});
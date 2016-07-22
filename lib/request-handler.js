'use strict';

var RequestHandler = function(config) {
};

RequestHandler.prototype.handle = function(request) {
    var personId = (request.sender ? request.sender : "[unknown]");
    return 'Thanks Person #' + personId + ' for sending ' + request.text  +  '. Way to go!';
};

module.exports = RequestHandler;
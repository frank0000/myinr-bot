'use strict';

var RequestHandler = function(config) {
    this.inrResultPattern = new RegExp("[0-9].[0-9]");
    this.confusedResponse = "Hmmm, I'm confused! Try again but say it in a different way.";
};

RequestHandler.prototype.handle = function(request) {
    if (this.inrResultPattern.test(request.text)) {
        return this.logInrResult(request.text);
    }
    var personId = (request.sender ? request.sender : "[unknown]");
    return 'Thanks Person #' + personId + ' for sending request "' + request.text  +  '". Way to go!';
};

RequestHandler.prototype.logInrResult = function(inrResultRequest) {
    var inrResult = this.inrResultPattern.exec(inrResultRequest);
    if (!inrResult) {
        return this.confusedResponse;
    }
    var inrResultFloat = parseFloat(inrResult);
    var inrResponse = "good";
    if (inrResultFloat < 2.0) {
        inrResponse = "low";
    } else if (inrResultFloat > 3.0) {
        inrResponse = "high";
    }
    return 'Logged new INR result for you: ' + inrResultFloat.toString() + ' (' + inrResponse + ')';
};

module.exports = RequestHandler;
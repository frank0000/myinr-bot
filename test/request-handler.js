'use strict';

var should = require('should');

// import the bot
var RequestHandler = require('../lib/request-handler');

describe('RequestHandler', function () {
    describe('handle', function() {
        context('non-empty request', function() {
            it('should echo nicely', function(done) {
                var request = {
                    text: "result is 5.4",
                    sender: "8675309"
                };
            
                try {
                    var response = new RequestHandler().handle(request);
                    response.should.be.ok();
                    response.includes(request.text).should.be.true();
                    response.includes(request.sender).should.be.true();
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
    });
});
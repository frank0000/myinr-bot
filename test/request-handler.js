'use strict';

var should = require('should');

// import the bot
var RequestHandler = require('../lib/request-handler');
var handlerUnderTest;
describe('RequestHandler', function () {

    beforeEach(function(done) {
        // new handler before each test to ensure no state
        handlerUnderTest = new RequestHandler(); 
        done();
    });

    describe('handle', function() {
        context('non-empty request', function() {
            it('should echo nicely', function(done) {
                var request = {
                    text: "how is it going?",
                    sender: "8675309"
                };
            
                try {
                    var response = handlerUnderTest.handle(request);
                    response.should.be.ok();
                    response.includes(request.text).should.be.true();
                    response.includes(request.sender).should.be.true();
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
        context('INR value request', function() {
            it('should echo INR value with correct status', function(done) {
                var request = {
                    text: "result is 5.4",
                    sender: "8675309"
                };
            
                try {
                    var response = handlerUnderTest.handle(request);
                    response.should.be.ok();
                    response.includes("5.4").should.be.true();
                    response.includes("high").should.be.true();
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
    });
    describe('logInrResult', function() {
        context('good INR value', function() {
            it('should echo the INR result with a good status', function(done) {
                var inrValue = '2.3';
                try {
                    var response = handlerUnderTest.logInrResult(inrValue);
                    response.should.be.ok();
                    response.includes(inrValue).should.be.true();
                    response.includes('good').should.be.true();
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
        context('low INR value', function() {
            it('should echo the INR result with a low status', function(done) {
                var inrValue = '1.8';
                try {
                    var response = handlerUnderTest.logInrResult(inrValue);
                    response.should.be.ok();
                    response.includes(inrValue).should.be.true();
                    response.includes('low').should.be.true();
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
        context('high INR value', function() {
            it('should echo the INR result with a high status', function(done) {
                var inrValue = '3.5';
                try {
                    var response = handlerUnderTest.logInrResult(inrValue);
                    response.should.be.ok();
                    response.includes(inrValue).should.be.true();
                    response.includes('high').should.be.true();
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
        context('not a format expected', function() {
            it('should give a confused answer', function(done) {
                var inrValue = 'aaa';
                try {
                    var response = handlerUnderTest.logInrResult(inrValue);
                    response.should.equal(handlerUnderTest.confusedResponse);
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
    });
});
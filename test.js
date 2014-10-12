'use strict';
var assert = require('assert');
var fs = require('fs');
var getPdfUrls = require('./');

it('should get unique cleaned-up urls from the pdf file', function () {
		getPdfUrls('./fixture.pdf', function(err, urls){
       assert.deepEqual(urls,
        ["http://h3manth.com",
        "http://yeoman.io",
        "http://nmotw.in"]);
    });
});

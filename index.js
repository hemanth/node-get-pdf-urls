module.exports = function (filePath, cb){
  "use strict";
  var pdfUtil = require('pdf-to-text')
  ,getUrls = require('get-urls');
  pdfUtil.pdfToText(filePath, function(err, data) {
    if (err) cb(err,null);
    cb(null,getUrls(data));    
  });
};

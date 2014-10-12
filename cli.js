#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var getPdfUrls = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    get-pdf-urls <file>'
	].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}
	getPdfUrls(input,function(err,data){
     if(err){
        console.log(err);
     } else {
        console.log(data.join('\n'));
     }
  });
}
# get-pdf-urls [![Build Status](https://travis-ci.org/hemanth/get-pdf-urls.svg?branch=master)](https://travis-ci.org/hemanth/get-pdf-urls)

> Get all uniq and normalized urls from a pdf file.

## Dependencies:

On `osx`: `brew install xpdf`

On `debian`: `apt-get install poppler-utils`

Any other please install the similar ones.

## Install

```sh
$ npm install --save get-pdf-urls
```

## Usage

```js
var getPdfUrls = require('get-pdf-urls');
getPdfUrls('your.pdf', function(err, urls){
	if(!err){
		console.log(urls);
	}
});
```

## CLI

```sh
$ npm install --global get-pdf-urls
```

```sh
$ get-pdf-urls -h

  Usage
    get-urls <file>
```

## License

MIT © [Hemanth.HM](http://h3manth.com)

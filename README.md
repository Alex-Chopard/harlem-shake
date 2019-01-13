
# Harlem Shake
[![Build Status](https://travis-ci.com/Alex-Chopard/harlem-shake.svg?branch=master)](https://travis-ci.com/Alex-Chopard/harlem-shake) [![version](https://img.shields.io/npm/v/harlem-shake.svg)](https://www.npmjs.com/package/harlem-shake) [![license: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![downloads](https://img.shields.io/npm/dt/harlem-shake.svg)](http://npm-stat.com/charts.html?package=harlem-shake)


## Installation
``` 
npm install harlem-shake
```
##  Usage

``` javascript
const HarlemShake = require("harlem-shake");

const  url = require("harlem-shake/assets/harlem-shake.mp3");
new  HarlemShake({
	singleDancer: "#main",
	allDancer = ["p", "img", "a", "label"]
}, url).start();
```

If you are using webpack, add the following lines to your webpack config :
``` javascript
module: {
	rules: [
		{
			test: /\.mp3$/,
			loader: 'file-loader'
		}
	]
}
```
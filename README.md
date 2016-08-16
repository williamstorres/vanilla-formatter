# vanilla-formatter

[![Travis build status](http://img.shields.io/travis/babel/generator-babel-boilerplate.svg?style=flat)](https://travis-ci.org/williamstorres/vanilla-formatter)

Javascript Vanilla Formatter based on https://igorescobar.github.io/jQuery-Mask-Plugin/

## How to use

### Format

For format you need to call the 'format' method, this method have the next params:

String Value
String Format
Boolean Reverse

Example:

vanillaFormatter.format('19', '00.000.000-A', true);

### Clean value

For get the clean value, you need to call the 'getClean' method, this method have the next params:

String Value
String Format
Boolean Reverse

Example:

vanillaFormatter.getClean('1-9', '00.000.000-A', true)

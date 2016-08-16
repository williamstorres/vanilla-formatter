# vanilla-formatter

[![Travis build status](http://img.shields.io/travis/williamstorres/vanilla-formatter.svg?style=flat)](https://travis-ci.org/williamstorres/vanilla-formatter)
[![Dependency Status](https://david-dm.org/williamstorres/vanilla-formatter.svg)](https://david-dm.org/williamstorres/vanilla-formatter)
[![devDependency Status](https://david-dm.org/williamstorres/vanilla-formatter/dev-status.svg)](https://david-dm.org/williamstorres/vanilla-formatter#info=devDependencies)

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

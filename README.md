# WAD GENMIDI handler

Converts GENMIDI lump extracted from a WAD file to JSON format

## Using from command line

Install as ```npm install -g wad-genmidi```.

```
genmidi2json v0.1.0
Usage: genmidi2json <input>

Options:
  -h, --help    Show this
  -p, --pretty  Prettify the output

Examples:
  genmidi2json GENMIDI.OP2 > genmidi.json

Copyright (c) 2016 IDDQD@doom.js
```

Result JSON written to ```stdout``` so redirect the output to a file if you want to save the result.

## Using from JavaScript

```javascript
var GENMIDI = require('wad-genmidi');
var fs = require('fs');

var instruments = new GENMIDI(fs.readFileSync('./GENMIDI.OP2')).instruments;
```
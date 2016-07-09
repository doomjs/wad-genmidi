#!/usr/bin/env node

var fs = require('fs');
var yargs = require('yargs');
var chalk = require('chalk');
var GENMIDI = require('./genmidi');
var package = require('./package');

var title = chalk.cyan('\ngenmidi2json v' + package.version);
var copyright = chalk.cyan('Copyright (c) 2016 IDDQD@doom.js');

var argv = yargs
    .usage(title + '\n\u001b[97mUsage:\u001b[39m\u001b[49m genmidi2json <input>')
    .example('genmidi2json GENMIDI.OP2 > genmidi.json')
    .describe('pretty', 'Prettify the output')
    .describe('help', 'Show this')
    .alias('h', 'help')
    .alias('p', 'pretty')
    .updateStrings({
        'Options:': '\u001b[97mOptions:\u001b[39m\u001b[49m',
        'Examples:': '\u001b[97mExamples:\u001b[39m\u001b[49m'
	})
    .epilog(copyright)
    .argv;

if (argv.help || !argv._[0]){
    yargs.showHelp();
    process.exit(1);
}

if (!fs.existsSync(argv._[0])){
    console.log(title);
    console.error(chalk.red('File not found!'));
    process.exit(1);
}

if (argv.pretty) console.log(JSON.stringify(new GENMIDI(fs.readFileSync(argv._[0])), null, 4));
else console.log(JSON.stringify(new GENMIDI(fs.readFileSync(argv._[0]))));
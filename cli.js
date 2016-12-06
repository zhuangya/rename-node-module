#!/usr/bin/env node
'use strict';

const meow = require('meow');

const rnm = require('./');

const cli = meow(`
    Usage

      $ rnm <new-name> [project-dir]

    Examples

      $ rnm zepto $HOME/Developer/jQuery

      >> zepto@3.1.1
`);

const [n, d=process.cwd()] = cli.input;
const {name, version} = rnm(n, d);

console.log(`${name}@${version}`);
process.exit(0);


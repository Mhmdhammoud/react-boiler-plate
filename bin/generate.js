#! /usr/bin/env node

const appName = process.argv[3];
const { spawnSync } = require('child_process');
const url = 'https://github.com/Mhmdhammoud/react-boiler-plate.git';

spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
spawnSync('cd', [`${appName}`]);
spawnSync('npm', ['install']);
console.log('Your app has been successfully installed');
console.log('$ npm start');

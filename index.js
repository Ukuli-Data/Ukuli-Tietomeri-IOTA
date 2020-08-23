var Config = require('config-js');
var config = new Config('./config.js');

const seed = config.get('iota.seed');
const provider = config.get('iota.provider');
const depth = config.get('iota.depth')
const minWeightMagnitude = config.get('iota.minWeightMagnitude');
const delay = config.get('iota.delay');
const maxDepth = config.get('iota.maxDepth');
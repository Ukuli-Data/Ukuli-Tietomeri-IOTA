"use strict";

var Config = require('config-js');

var config = new Config('./config.js');
var seed = config.get('iota.seed');
var provider = config.get('iota.provider');
var depth = config.get('iota.depth');
var minWeightMagnitude = config.get('iota.minWeightMagnitude');
var delay = config.get('iota.delay');
var maxDepth = config.get('iota.maxDepth');
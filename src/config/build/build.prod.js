'use strict';

const build = require('swanky').build;

// Retrieve webpack build configuration
module.exports = build({ configPath: 'swanky.config.js' });

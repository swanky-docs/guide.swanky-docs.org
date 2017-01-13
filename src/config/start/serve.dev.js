const devServer = require('swanky').devServer;

// Start swanky dev server
module.exports = devServer({
  configPath: 'swanky.config.js',
  debug: false
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const environment = require('./environment')

module.exports = environment.toWebpackConfig()

// Stylelint Webpack Integration ------------
const StylelintPlugin = require('stylelint-webpack-plugin');
module.exports.plugins.push(new StylelintPlugin({ configFile: '.stylelintrc.json' }));
// ------------------------------------------

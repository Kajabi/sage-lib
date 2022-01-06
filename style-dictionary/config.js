const format = require('./bin/formats');
const transform = require('./bin/transforms');
const transformGroup = require('./bin/transform-groups');
const platforms = require('./bin/platforms');

//
// Configuraiton export
//
module.exports = {
  format,
  platforms,
  source: [`style-dictionary/tokens/**/*.json`],
  transform,
  transformGroup,
};

const format = require('./bin/formats');
const transform = require('./bin/transforms');
const transformGroup = require('./bin/transform-groups');
// const platforms = require('../../bin/platforms');

//
// Configuraiton export
//
module.exports = {
  format,
  platforms: {
    sassTokens: {
      transformGroup: 'sage/scss/tokens',
      buildPath: 'packages/sage-assets/lib/stylesheets/dictionary/',
      files: [{
        destination: '_tokens.scss',
        format: 'sage/scss/tokens',
        options: {
          outputReferences: false,
        }
      }]
    },
    railsTokens: {
      transformGroup: 'sage/rails/tokens',
      buildPath: 'docs/lib/sage_rails/app/sage_tokens/',
      files: [{
        destination: 'sage_dictionary.rb',
        format: 'sage/rails/tokens',
        options: {
          outputReferences: false,
        }
      }],
    },
    reactTokens: {
      transformGroup: 'sage/jsx/tokens',
      buildPath: 'packages/sage-react/lib/configs/dictionary/',
      files: [{
        destination: 'tokens.js',
        format: 'sage/jsx/tokens',
        options: {
          outputReferences: false,
        }
      }]
    },
  },
  source: [`style-dictionary/tokens/**/*.json`],
  transform,
  transformGroup,
};

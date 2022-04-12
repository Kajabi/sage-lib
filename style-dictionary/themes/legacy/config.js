const format = require('../../bin/formats');
const transform = require('../../bin/transforms');
const transformGroup = require('../../bin/transform-groups');
// const platforms = require('../../bin/platforms');

//
// Configuraiton export
//
module.exports = {
  format,
  platforms: {
    sassTokens: {
      transformGroup: 'sage/scss/tokens',
      buildPath: 'packages/sage-assets/lib/stylesheets/themes/legacy/dictionary/',
      files: [{
        destination: '_tokens.scss',
        format: 'sage/scss/tokens',
        options: {
          outputReferences: false,
          sageTheme: 'Legacy',
        }
      }]
    },
    railsTokens: {
      transformGroup: 'sage/rails/tokens',
      buildPath: 'docs/lib/sage_rails/app/sage_components/',
      files: [{
        destination: 'sage_dictionary_legacy.rb',
        format: 'sage/rails/tokens',
        options: {
          outputReferences: false,
          sageTheme: 'Legacy',
        }
      }],
    },
    reactTokens: {
      transformGroup: 'sage/jsx/tokens',
      buildPath: 'packages/sage-react/lib/configs/dictionary/',
      files: [{
        destination: 'tokens-legacy.js',
        format: 'sage/jsx/tokens',
        options: {
          outputReferences: false,
          sageTheme: 'Legacy',
        }
      }]
    },
  },
  source: [`style-dictionary/themes/legacy/tokens/**/*.json`],
  transform,
  transformGroup,
};

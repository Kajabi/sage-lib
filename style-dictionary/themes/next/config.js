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
      buildPath: 'packages/sage-assets/lib/stylesheets/themes/next/dictionary/',
      files: [{
        destination: '_tokens.scss',
        format: 'sage/scss/tokens',
        options: {
          outputReferences: false,
          sageTheme: 'Next',
        }
      }]
    },
    railsTokens: {
      transformGroup: 'sage/rails/tokens',
      buildPath: 'docs/lib/sage_rails/app/sage_components/',
      files: [{
        destination: 'sage_dictionary_next.rb',
        format: 'sage/rails/tokens',
        options: {
          outputReferences: false,
          sageTheme: 'Next',
        }
      }],
    },
    reactTokens: {
      transformGroup: 'sage/jsx/tokens',
      buildPath: 'packages/sage-react/lib/configs/dictionary/',
      files: [{
        destination: 'tokens-next.js',
        format: 'sage/jsx/tokens',
        options: {
          outputReferences: false,
          sageTheme: 'Next',
        }
      }]
    },
  },
  source: [`style-dictionary/themes/next/tokens/**/*.json`],
  transform,
  transformGroup,
};

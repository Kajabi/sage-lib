
//
// Platforms
//
// Platforms are sets of configurations for parsing and compiling tokens for a particular contexts
// such as a language context (Sass, Rails, React, etc.).
//
module.exports = {
  sassTokens: {
    transformGroup: 'sage/scss/tokens',
    buildPath: 'packages/sage-assets/lib/stylesheets/dictionary/',
    files: [{
      destination: '_tokens.scss',
      format: 'sage/scss/tokens',
      options: {
        outputReferences: false
      }
    }]
  },
  railsTokens: {
    transformGroup: 'sage/rails/tokens',
    buildPath: 'docs/lib/sage_rails/app/sage_components/',
    files: [{
      destination: 'sage_dictionary.rb',
      format: 'sage/rails/tokens',
      options: {
        outputReferences: true
      }
    }],
  },
  // TODO: In development
  //
  // cssCustomProps: {
  //   transformGroup: 'scss',
  //   buildPath: 'packages/sage-assets/lib/stylesheets/dictionary/',
  //   files: [{
  //     destination: '_custom-props.scss',
  //     format: 'css/variables',
  //     options: {
  //       outputReferences: true
  //     }
  //   }]
  // },
  // reactTokens: {
  //   transformGroup: 'sage/js',
  //   buildPath: 'packages/sage-react/lib/dictionary/',
  //   files: [{
  //     destination: 'tokens.js',
  //     format: 'sage/js',
  //     options: {
  //       outputReferences: false
  //     }
  //   }]
  // },
  // railsComponents: {
  //   transformGroup: 'sage/rails/schema',
  //   buildPath: 'docs/lib/sage_rails/app/sage_components/',
  //   files: [{
  //     destination: 'sage_configs.rb',
  //     format: 'sage/rails/schema',
  //     options: {
  //       outputReferences: true
  //     },
  //     filter: (token) => token.attributes && token.attributes.category === 'component',
  //   }]
  // },
  // reactComponents: {
  //   transformGroup: 'sage/react/schema',
  //   buildPath: 'packages/sage-react/lib/configs/types/',
  //   files: [{
  //     destination: 'prop-types.js',
  //     format: 'sage/react/schema',
  //     options: {
  //       outputReferences: true
  //     },
  //     filter: (token) => token.attributes && token.attributes.category === 'component',
  //   }]
  // }
};

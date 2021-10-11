
//
// Platforms
//
module.exports = {
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
  // sassTokens: {
  //   transformGroup: 'sage/scss/tokens',
  //   buildPath: 'packages/sage-assets/lib/stylesheets/dictionary/',
  //   files: [{
  //     destination: '_tokens.scss',
  //     format: 'sage/scss/tokens',
  //     options: {
  //       outputReferences: false
  //     }
  //   }]
  // },
  // testFormatter: {
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
  // railsTokens: {
  //   transformGroup: 'sage/rails/tokens',
  //   buildPath: 'docs/lib/sage_rails/app/dictionary/',
  //   files: [{
  //     destination: 'sage_tokens.rb',
  //     format: 'sage/rails/tokens',
  //     options: {
  //       outputReferences: false
  //     }
  //   }],
  // },
  railsComponents: {
    transformGroup: 'sage/rails/schema',
    buildPath: 'docs/lib/sage_rails/app/sage_components/',
    files: [{
      destination: 'sage_configs.rb',
      format: 'sage/rails/schema',
      options: {
        outputReferences: true
      },
      filter: (token) => token.attributes && token.attributes.category === 'component',
    }]
  }
};

//
// Platforms
//
// Platforms are the primary sets of configurations
// for parsing and compiling tokens for a particular context
// such as a language context (Sass, Rails, React, etc.).
// They pull together a set of transformations into a formatter,
// and determine where to output the result.
//
// NOTE: Platforms are moved to themes contexts in order to allow separate token libraries
//
module.exports = {
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

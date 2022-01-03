//
// Transform Groups
//
// Transform groups are combinations of transforms intended to apply to all the tokens in a given platform.
// Following convention, name these using `sage/` followed by the general context such as `scss/`, `rails/`, `react/`, etc.
// Then provide a move specific name for the group.
// Note that Style dictionary provides a number of presets found here: 
// We've also built some of our own in `,/style-dictionary/bin/transforms.js`.
//
module.exports = {
  'sage/scss/tokens': [
    'attribute/cti',
    'name/cti/kebab',
    'sage/value/sassSafe'
  ],
  'sage/rails/tokens': [
    'attribute/cti',
    'name/cti/constant',
  ],
  'sage/jsx/tokens': [
    'attribute/cti',
    'name/cti/constant',
  ],
  // TODO: In development
  //
  // 'sage/rails/schema': [
  //   'attribute/cti',
  // ],
  // 'sage/react/schema': [
  //   'attribute/cti',
  // ],
};

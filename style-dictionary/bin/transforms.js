//
// Transforms
//
// Transforms are configurations that convert particular aspects
// of the raw JSON data in some fashion such as converting a property name to snake case.
// 
// Style Dictionary comes with a number of presets.
// See https://amzn.github.io/style-dictionary/#/transforms
// 
// These are custom transformations for Sage specifically.
//
// In keeping with CTI format, names should all start with `sage/`
// followed by the `type` being transformed: `value/`, `attribute/`, or `name/`.
// Specific names for the transformation can follow.
//
module.exports = {
  //
  // Ensures that a string value from the JSON
  // gets sent to the Formatter with CSS-safe values
  //
  'sage/value/sassSafe': {
    type: 'value',
    transitive: false,
    transformer: (token) => {
      let { name, value } = token;
      if (typeof value !== 'string') {
        return value;
      }

      if (value.charAt(0) === '#') {
        return value;
      }
      
      return `"${value}"`;
    }
  },
  //
  // Ensures that a string value from the JSON
  // gets sent to the Formatter with string markers
  // such as for use in Rails or JS contexts.
  //
  // 'sage/value/globalTypes': {
  //   type: 'value',
  //   transitive: false,
  //   transformer: (token) => {
  //     let { name, value } = token;
  //     if (typeof value === 'string') {
  //       value = `'${value}'`;
  //     }
  //     return value;
  //   }
  // },
  //
  // Similar to `sage/value/globalTypes` but works with transitive values
  //
  // 'sage/value/globalTypes/transitive': {
  //   type: 'value',
  //   transitive: true,
  //   transformer: (token) => {
  //     let { name, value } = token;
  //     if (typeof value === 'string') {
  //       value = `'${value}'`;
  //     } else if (typeof value === 'object') {
  //       value = value.value;
  //     }
  //     return value;
  //   }
  // },
  //
  // Ensures that Type and Item are exported as the name
  // and that any snake_case is output as kebab-case.
  //
  // 'sage/name/ti/kebab': {
  //   type: 'name',
  //   transformer: (token, options) => {
  //     return token.path.slice(1, token.path.length).join('-').replace('_', '-');
  //   },
  // },
  //
  // Ensures that Item only is exported as the name
  // and that any snake_case is output as kebab-case.
  //
  // 'sage/name/kebab': {
  //   type: 'name',
  //   transformer: (token, options) => {
  //     return token.path.slice(2, token.path.length).join('-').replace('_', '-').toLowerCase();
  //   },
  // },
  //
  // Ensures that Item only is exported as the name
  // and that any snake_case is output as kebab-case.
  //
  // 'sage/name/constant': {
  //   type: 'name',
  //   transformer: (token, options) => {
  //     return token.path.slice(2, token.path.length).join('-').replace('-', '_').toUpperCase();
  //   },
  // }
};

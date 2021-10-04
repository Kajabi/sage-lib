const { templates } = require('./templating');
const { getCTICollection } = require('./utilities');

//
// Formats
//
module.exports = {
  'sage/js': ({ dictionary, platform }) => {
    return dictionary.allTokens.map(token => `export const ${token.name} = ${token.value};`).join('\n');
  },
  'sage/scss/tokens': ({ dictionary, platform }) => {
    const categories = getCTICollection(dictionary.allTokens);
    return templates.scssTokens({ categories });
  },
  'sage/rails/tokens': ({ dictionary, platform }) => {
    const categories = getCTICollection(dictionary.allTokens, { categoriesAsConstants: true, typesAsConstants: true });
    return templates.railsTokens({ categories });
  }
};

const { templates } = require('./templating');
const { getCTCollection, getComponentSchemas } = require('./utilities');

//
// Formats
//
module.exports = {
  'sage/js': ({ dictionary, platform }) => {
    return dictionary.allTokens.map(token => `export const ${token.name} = ${token.value};`).join('\n');
  },
  'sage/scss/tokens': ({ dictionary, platform }) => {
    const categories = getCategoryCollection(dictionary.allTokens);
    return templates.scssTokens({ categories });
  },
  'sage/rails/tokens': ({ dictionary, platform }) => {
    const categories = getCategoryCollection(
      dictionary.allTokens,
      {
        categoryFormat: 'constant',
        typeFormat: 'constant'
      }
    );

    return templates.railsTokens({ categories });
  },
  'sage/rails/schema': ({ dictionary, platform }) => {
    // TODO: Parse CTISS to X > component > props > [options | default | schema] > 
    const components = getComponentSchemas(dictionary.allTokens);
    console.log(components);

    return templates.railsSchema({ components });
  },
};

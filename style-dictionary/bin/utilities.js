const _ = require('lodash');

const getCategoryCollection = (tokens, options) => {
  const tokensGrouped = _.groupBy(tokens, (token) => token.attributes.category);

  const categories = [];
  Object.keys(tokensGrouped).forEach(key => {
    if (options && options.categoriesAsConstants) {
      console.log(key, key.toUpperCase().replace('-', '_'), tokensGrouped[key]);
    }
    return categories.push({
      category: options && options.categoriesAsConstants
        ? key.toUpperCase().replace('-', '_')
        : key,
      tokens: tokensGrouped[key],
    });
  });

  return categories;
};

const getTypeCollection = (tokens, options) => {
  const tokensGrouped = _.groupBy(tokens, (token) => token.attributes.type);

  const types = [];
  Object.keys(tokensGrouped).forEach(key => {
    types.push({
      type: options && options.typesAsConstants
        ? key.toUpperCase().replace('-', '_')
        : key,
      tokens: tokensGrouped[key],
    });
  });

  return types;
};

const getCTICollection = (tokens, options) => {
  const categories = getCategoryCollection(tokens, options);
  const collection = categories.map(category => {
    return {
      ...category,
      types: getTypeCollection(category.tokens, options),
    }
  });
  return collection;
};

module.exports = {
  getCategoryCollection,
  getCTICollection,
  getTypeCollection,
};

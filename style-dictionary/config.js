const Handlebars = require('Handlebars');
const fs = require('fs');
const _ = require('lodash');

//
// Templates
//
const templatePath = 'style-dictionary/templates';

const templateFiles = {
  jsVars: 'js-vars',
  scssTokens: 'scss-tokens',
};

const compileHbsTemplates = () => {
  const templates = {};
  Object.keys(templateFiles).forEach(key => {
    templates[key] = Handlebars.compile(fs.readFileSync(`${templatePath}/${templateFiles[key]}.hbs`).toString());
  });
  return templates;
};
const templates = compileHbsTemplates();

//
// Tranforms
//

const transform = {
  'sage/value/globalTypes': {
    type: 'value',
    transformer: (token) => {
      let { name, value } = token;
      if (typeof value === 'string') {
        value = `'${value}'`;
      }

      return value;
    }
  },
  'sage/name/ti/kebab': {
    type: 'name',
    transformer: (token, options) => token.path.slice(1, token.path.length).join('-'),
  }
};

const transformGroup = {
  'sage/js': [
    'attribute/cti',
    'name/cti/camel',
    'sage/value/globalTypes'
  ],
  'sage/scss/tokens': [
    'attribute/cti',
    'sage/name/ti/kebab'
  ],
};

//
// Formats
//
const format = {
  sageJs: ({ dictionary, platform }) => {
    return dictionary.allTokens.map(token => `const ${token.name} = ${token.value};`).join('\n');
  },
  sageJsFromTemplate: ({ dictionary, platform }) => {
    return templates.jsVars({ tokens: dictionary.allTokens });
  },
  sageScssTokens: ({ dictionary, platform }) => {
    // console.log(dictionary);
    const tokensGroupedByCategory = _.groupBy(dictionary.allTokens, (token) => token.attributes.category);
    const categories = [];
    Object.keys(tokensGroupedByCategory).forEach(key => {
      categories.push({
        category: key,
        tokens: tokensGroupedByCategory[key],
      });
    });
    return templates.scssTokens({ categories });
  }
}

//
// Platforms
//
const platforms = {
  cssCustomProps: {
    transformGroup: 'scss',
    buildPath: 'packages/sage-assets/lib/stylesheets/dictionary/',
    files: [{
      destination: '_custom-props.scss',
      format: 'css/variables',
      options: {
        outputReferences: true
      }
    }]
  },
  sassTokens: {
    transformGroup: 'sage/scss/tokens',
    buildPath: 'packages/sage-assets/lib/stylesheets/dictionary/',
    files: [{
      destination: '_tokens.scss',
      format: 'sageScssTokens',
      options: {
        outputReferences: true
      }
    }]
  },
  testFormatter: {
    transformGroup: 'sage/js',
    buildPath: 'packages/sage-assets/lib/stylesheets/dictionary/',
    files: [{
      destination: '_variables.js',
      format: 'sageJsFromTemplate',
    }]
  }
};

//
// Configuraiton export
//
module.exports = {
  format,
  platforms,
  source: [`style-dictionary/tokens/**/*.json`],
  transform,
  transformGroup,
};

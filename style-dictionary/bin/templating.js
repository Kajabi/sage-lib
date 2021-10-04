const Handlebars = require('Handlebars');
const fs = require('fs');

Handlebars.registerHelper('isBaseType', function (value) {
  return value.toLowerCase() === "base";
});
//
// Templates
//
const templatePath = 'style-dictionary/templates';

const templateFiles = {
  scssTokens: 'scss-tokens',
  railsTokens: 'rails-tokens',
};

const compileHbsTemplates = () => {
  const templates = {};
  Object.keys(templateFiles).forEach(key => {
    templates[key] = Handlebars.compile(fs.readFileSync(`${templatePath}/${templateFiles[key]}.hbs`).toString());
  });
  return templates;
};
const templates = compileHbsTemplates();

module.exports = {
  templates,
};

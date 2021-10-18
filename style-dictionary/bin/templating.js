const Handlebars = require('Handlebars');
const fs = require('fs');


Handlebars.registerHelper('asRubyPrimitive', function (value) {
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (value === null) return 'nil';
  return value;
});

Handlebars.registerHelper('asJSPrimitive', function (value) {
  if (typeof value === 'string') return `'${value}'`;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (value === null) return 'null';
  return value;
});

Handlebars.registerHelper('constantCase', function (value) {
  return value.toUpperCase().replace('-', '_');
});

Handlebars.registerHelper('isBaseType', function (value) {
  return value.toLowerCase() === "base";
});

Handlebars.registerHelper('isPresent', function (value) {
  return value !== undefined;
});

Handlebars.registerHelper('lowercase', function (value) {
  return value.toLowerCase();
});

//
// Templates
//
const templatePath = 'style-dictionary/templates';

const templateFiles = {
  scssTokens: 'presets/scss/tokens',
  railsSchema: 'presets/rb/schema',
  railsTokens: 'presets/rb/tokens',
  reactSchema: 'presets/jsx/schema',
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

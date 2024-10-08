//
// Templating
//
// Our implementation of Style Dictionary uses Handlebars templates
// in order to afford a customized output for each of our system's contexts.
// This file contains the library of utilities, helpers, and complied templates
// that are consumed by our Formatters.
//

const Handlebars = require('handlebars');
const fs = require('fs');


//
// Utilities
//

const hasAny = (val) => {
  if (!val) {
    return false;
  }

  if (val.length === 0) {
    return false;
  }

  return true;
};

const getPrimitiveValue = (value, useDbQuotes = false) => {
  if (typeof value === 'string') return useDbQuotes ? `"${value}"` : `'${value}'`;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (value === null) return 'nil';
  console.log(value);
  return value;
}


//
// Helpers
//

Handlebars.registerHelper('stripCTFromName', function (name) {
  return name.split('_').slice(2).join('_');
});

Handlebars.registerHelper('asRubyPrimitive', function (value) {
  if (value && value.value) {
    return getPrimitiveValue(value.value, true);
  }

  return getPrimitiveValue(value, true);
});

Handlebars.registerHelper('asJSPrimitive', function (value) {
  if (value.value) {
    return getPrimitiveValue(value.value);
  }

  return getPrimitiveValue(value);
});

Handlebars.registerHelper('constantCase', function (value) {
  const transformed = value.toUpperCase().replace(/-/g, '_');
  return transformed;
});

Handlebars.registerHelper('isBaseType', function (value) {
  return value.toLowerCase() === "base";
});

Handlebars.registerHelper('notBaseType', function (value) {
  return value.toLowerCase() !== "base";
});

Handlebars.registerHelper('isPresent', function (value) {
  return value !== undefined;
});

Handlebars.registerHelper('hasAny', function (value) {
  return hasAny(value);
});

Handlebars.registerHelper('hasAnySubitems', function (items) {
  if (!hasAny(items)) {
    return false;
  }

  return items.some((item) => hasAny(item.subitems));
});

Handlebars.registerHelper('hasAnyStates', function (items) {
  if (!hasAny(items)) {
    return false;
  }

  if (!items.some((item) => hasAny(item.subitems))) {
    return false;
  }

  return items.some((item) => {
    if (item.subitems) {
      return item.subitems.some((subitem) => hasAny(subitem.states))
    }

    return false;
  });
});

Handlebars.registerHelper('lowercase', function (value) {
  return value.toLowerCase();
});


Handlebars.registerHelper('startsWithZero', function(value, options) {
  if (value && value.toString().startsWith('0')) {
      return "'" + value.toString() + "'";
  }
  return value;
});

//
// Templates compilation
//

const templatePath = 'style-dictionary/templates';

const templateFiles = {
  scssTokens: 'presets/scss/tokens',
  railsTokens: 'presets/rb/tokens',
  jsxTokens: 'presets/jsx/tokens',
  // railsSchema: 'presets/rb/schema',
  // reactSchema: 'presets/jsx/schema',
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

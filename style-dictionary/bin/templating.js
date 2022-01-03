const Handlebars = require('Handlebars');
const fs = require('fs');

const hasAny = (val) => {
  if (!val) {
    return false;
  }

  if (val.length === 0) {
    return false;
  }

  return true;
};

const getPrimitiveValue = (value) => {
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (value === null) return 'nil';
  console.log(value);
  return value;
}

Handlebars.registerHelper('stripCTFromName', function (name) {
  return name.split('_').slice(2).join('_');
});

Handlebars.registerHelper('asRubyPrimitive', function (value) {
  if (value && value.value) {
    return getPrimitiveValue(value.value);
  }

  return getPrimitiveValue(value);
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

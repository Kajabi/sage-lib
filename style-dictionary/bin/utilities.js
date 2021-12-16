const _ = require('lodash');

const formatName = (key, format) => {
  if (!key) {
    return;
  }

  let name = key;
  switch (format) {
    case 'constant':
      name = key.toUpperCase().replace('-', '_');
      break;
    case 'snake':
      name = key.toLowerCase().replace('-', '_');
      break;
    case 'pascal':
      name = key.replace(/(\w)(\w*)/g, (g0, g1, g2) => `${g1.toUpperCase()}${g2.toLowerCase()}`);
      break;
    default: 
      name = key;
      break;
  }

  return name;
};

const parseCollection = (tokens, parentKey, options) => {
  const results = [];
  const tokensGrouped = _.groupBy(tokens, (token) => token.attributes[parentKey]);

  Object.keys(tokensGrouped).forEach(key => {
    let obj = {};

    if (tokensGrouped[key].length <= 1) {
      obj = tokensGrouped[key][0];
      obj.tokens = [];
    } else {
      obj.tokens = tokensGrouped[key];
    }

    if (parentKey) {
      obj[parentKey] = formatName(key, options && options[`${parentKey}Format`]);
    }

    return results.push(obj);
  });

  return results;
};

const getCategoryCollection = (tokens, options) => {
  return parseCollection(tokens, 'category', options).map(res => {
    return {
      ...res,
      types: getTypeCollection(res.tokens, options),
    };
  });
};

const getTypeCollection = (tokens, options) => {
  return parseCollection(tokens, 'type', options).map(res => {
    return {
      ...res,
      items: getItemCollection(res.tokens, options),
    };
  });
};

const getItemCollection = (tokens, options) => {
  return parseCollection(tokens, 'item', options).map(res => {
    return {
      ...res,
      subitems: getSubitemCollection(res.tokens, options),
    };
  });
};

const getSubitemCollection = (tokens, options) => {
  return parseCollection(tokens, 'subitem', options).map(res => {
    return {
      ...res,
      states: getStateCollection(res.tokens, options),
    };
  });
};

const getStateCollection = (tokens, options) => {
  return parseCollection(tokens, 'state', options);
};

const getValue = (value) => {
  if (!value) {
    return value;
  }
  
  let val;
  switch (typeof value) {
    case 'object':
      val = value.value;
      break;
    default:
      val = value;
    break;
  }

  return val;
};

const getComponentSchemas = (tokens) => {
  const ctiCollection = getCategoryCollection(
    tokens,
    {
      categoryFormat: 'pascal',
      typeFormat: 'pascal',
      itemFormat: 'snake',
      subitemFormat: 'snake',
      stateFormat: 'constant',
    }
  );

  const allComponents = [];
  
  ctiCollection.map(({ category, types: _components }) => {
    _components.map(({ type: _component, items: _props }) => {
      if (_component === 'Schema') return null;

      const component = {
        name: _component,
        props: []
      };

      _props.map(({ item: _prop, subitems: _attrs }) => {
        const prop = {
          name: _prop,
        };

        // console.log(_prop, _attrs);

        _attrs.map(({ subitem: _attr, states, value }) => {
          // console.log('--- --- prop:', _prop, value);
          switch (_attr) {
            case 'default':
              // console.log('--- --- --- default:', getValue(value));
              prop.default = getValue(value);
              break;
            case 'schema':
              // TODO: Determine how to handle schema
              // console.log('--- --- --- schema:', value);
              prop.schema = value;
              if (value.original.value === 'html') {
                if (!component.sections) component.sections = []; 
                component.sections.push(_prop);
              }
              break;
            case 'options':
              // console.log('--- --- --- options:', states);
              prop.options = states.map(({ state, value }) => {
                return {
                  name: state,
                  value,
                };
              });
              break;
            default:
              // console.log('--- --- --- UNKNOWN', _attr);
            break;
          }
        });

        component.props.push(prop);
      });

      allComponents.push(component);
    });

    return true;
  });

  return allComponents;
};

const hasAny = (val) => val && val.length > 0;

module.exports = {
  getCategoryCollection,
  getComponentSchemas,
  getTypeCollection,
  getItemCollection,
  getSubitemCollection,
  getStateCollection,
};

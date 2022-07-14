import PropTypes from 'prop-types';
import { SageTokens } from '../../configs';

export const responsiveSchema = (baseSchema) => {
  const rangeSchema = {};
  Object.keys(SageTokens.BREAKPOINT_RANGES).forEach((rangeKey) => {
    rangeSchema[rangeKey] = baseSchema;
  });

  return PropTypes.oneOfType(baseSchema, rangeSchema);
};

/**
 * Generates a set of responsive configurations such as classnames or CSS properties
 * Provide a value and additional options to be formatted into a provided template
 * along with any applicable breakpoints.
 *
 * @param {
 *   value: object, Contains breakpoint keys assigned string values
 *   valueCondition: bool, Contains an alternative condition for evaluating the value provided
 *   valueFallback: string, Provides a fallback value to use if valueCondition
 *     or default evaluation is falsy
 *   template: string, a template string where {0} is the breakpoint placeholder
 *     and {1} is the value placeholder
 *   type: null | 'object', sets whether this function should return a single string
 *     versus an object where the template becomes a key to which the value is assigned.
 * } options A set of configurations for generating responsive settings output
 */
export const responsiveSettings = ({
  value = null,
  valueCondition = null,
  valueFallback = null,
  template = '',
  type = null,
}) => {
  let _value = value || valueFallback;
  if (valueCondition !== null) {
    _value = valueCondition ? value : valueFallback;
  }

  const hash = typeof _value === 'object' ? _value : { default: _value };

  let returnValue = null;

  switch (type) {
    case 'object': {
      const object = {};
      Object.keys(hash).forEach((key) => {
        const objectKey = template.format(
          key,
          hash[key],
        );
        object[objectKey] = value;
      });
      break;
    }
    default: {
      const classnames = Object.keys(hash).map((key) => template.format(
        key,
        hash[key],
      ));

      returnValue = classnames.join(' ').replace(/\s/g, ' ').trim();
      break;
    }
  }

  return returnValue;
};

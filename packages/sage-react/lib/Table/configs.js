import PropTypes from 'prop-types';

// Basic data value types
export const dataPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
]);

// Cell structure
export const cellPropTypes = {
  attributes: PropTypes.shape({}),
  className: PropTypes.string,
  dataType: PropTypes.string,
  field: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.shape({}),
  value: dataPropTypes,
};

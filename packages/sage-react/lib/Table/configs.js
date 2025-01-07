import PropTypes from 'prop-types';

export const CAPTION_SIDE = {
  BOTTOM: 'bottom',
  TOP: 'top',
};

// Basic data value types
export const dataPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({}),
]);

// Cell structure
export const cellPropTypes = {
  attributes: PropTypes.shape({}),
  className: PropTypes.string,
  dataType: PropTypes.string,
  field: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.shape({}),
  testId: PropTypes.string,
  value: dataPropTypes,
};

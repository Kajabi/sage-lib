import PropTypes from 'prop-types';

export const cellPropTypes = {
  attributes: PropTypes.shape({}),
  className: PropTypes.string,
  dataType: PropTypes.string,
  field: PropTypes.string,
  id: PropTypes.string,
  value: dataPropTypes,
};

export const dataPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
]);

export const headerPropTypes = {
  attributes: PropTypes.shape({}),
  className: PropTypes.string,
  dataType: PropTypes.string,
  label: PropTypes.string,
};

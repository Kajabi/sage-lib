import PropTypes from 'prop-types';

export const selectStructuredItemPropTypes = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
});

export const selectItemPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  selectStructuredItemPropTypes,
]);

import PropTypes from 'prop-types';

export const breadcrumbItemPropTypes = PropTypes.shape({
  label: PropTypes.string,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
});

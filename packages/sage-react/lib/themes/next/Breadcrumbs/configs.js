import PropTypes from 'prop-types';
import { Link } from '../Link';

export const breadcrumbItemPropTypes = PropTypes.shape({
  current: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  linkTag: Link.tagPropTypes,
});

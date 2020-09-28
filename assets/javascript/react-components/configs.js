import PropTypes from 'prop-types';

export const hyperlinkAttributePropTypes = {
  href: PropTypes.string.isRequired,
  referrer: PropTypes.string,
  target: PropTypes.string,
};

export const htmlAttributePropTypes = {
  role: PropTypes.string,
  title: PropTypes.string,
};

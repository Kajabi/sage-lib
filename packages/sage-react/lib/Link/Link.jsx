import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({
  children,
  to,
  ...rest
}) => (to ? (
  <ReactLink to={to} {...rest}>
    {children}
  </ReactLink>
) : (
  <a {...rest}>
    {children}
  </a>
));

Link.defaultProps = {
  children: null,
  to: null,
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape
  ]),
};

export default Link;

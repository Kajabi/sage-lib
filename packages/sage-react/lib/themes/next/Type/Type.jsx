import React from 'react';
import PropTypes from 'prop-types';
import { SageClassnames } from '../configs';

export const Type = ({ children, className, ...rest }) => (
  <div className={`${SageClassnames.TYPE_BLOCK} ${className || ''}`} {...rest}>
    {children}
  </div>
);

Type.defaultProps = {
  children: null,
  className: '',
};

Type.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

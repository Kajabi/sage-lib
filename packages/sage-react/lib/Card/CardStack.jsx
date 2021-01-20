import React from 'react';
import PropTypes from 'prop-types';

export const CardStack = ({
  children,
  className,
  ...rest
}) => (
  <div
    className={`sage-card__stack ${className || ''}`}
    {...rest}
  >
    {children}
  </div>
);

CardStack.defaultProps = {
  children: null,
  className: '',
};

CardStack.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

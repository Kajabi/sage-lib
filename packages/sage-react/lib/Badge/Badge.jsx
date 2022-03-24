import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Badge = ({
  // className,
  children,
  ...rest
}) => {
  const classNames = classnames(
    'sage-badge',
    // className
  );
  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

Badge.defaultProps = {
  children: null,
};

Badge.propTypes = {
  children: PropTypes.node,
};

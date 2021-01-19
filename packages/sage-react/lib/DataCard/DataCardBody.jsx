import React from 'react';
import PropTypes from 'prop-types';

export const DataCardBody = ({
  children,
  className,
  ...rest
}) => (
  <div
    className={`sage-data-card__body ${className || ''}`}
    {...rest}
  >
    {children}
  </div>
);

DataCardBody.defaultProps = {
  children: null,
  className: '',
};

DataCardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

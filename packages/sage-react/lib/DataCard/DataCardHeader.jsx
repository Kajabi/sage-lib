import React from 'react';
import PropTypes from 'prop-types';

const DataCardHeader = ({
  children,
  className,
  title,
  ...rest
}) => (
  <div
    className={`sage-data-card__header ${className || ''}`}
    {...rest}
  >
    {title && (
      <h4 className="sage-data-card__title t-sage--truncate">{title}</h4>
    )}
    {children}
  </div>
);

DataCardHeader.defaultProps = {
  children: null,
  className: '',
  title: null,
};

DataCardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default DataCardHeader;

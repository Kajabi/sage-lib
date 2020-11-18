import React from 'react';
import PropTypes from 'prop-types';

const DataCard = ({
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

DataCard.defaultProps = {
  children: null,
  className: '',
};

DataCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DataCard;

import React from 'react';
import PropTypes from 'prop-types';
import { KjbElementIds } from '../configs';

export const DataCardHeader = ({
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
      <h4 className="sage-data-card__title t-sage--truncate" data-kjb-element={KjbElementIds.dataCardHeader}>{title}</h4>
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

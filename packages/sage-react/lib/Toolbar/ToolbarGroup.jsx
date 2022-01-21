import React from 'react';
import PropTypes from 'prop-types';

export const ToolbarGroup = ({
  children,
  className,
  ...rest
}) => (
  <div className={`sage-toolbar__group ${className || ''}`} {...rest}>
    {children}
  </div>
);

ToolbarGroup.defaultProps = {
  children: null,
  className: null,
};

ToolbarGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

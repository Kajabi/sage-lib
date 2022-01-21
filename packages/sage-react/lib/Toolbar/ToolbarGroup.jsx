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

ToolbarButtonGroup.defaultProps = {
  children: null,
  className: null,
};

ToolbarButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

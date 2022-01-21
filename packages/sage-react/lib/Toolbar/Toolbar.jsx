import React from 'react';
import PropTypes from 'prop-types';
import { ToolbarGroup } from './ToolbarGroup';

export const Toolbar = ({ children, className, ...rest }) => (
  <div className={`sage-toolbar ${className || ''}`} {...rest}>
    {children}
  </div>
);

Toolbar.Group = ToolbarGroup;

Toolbar.defaultProps = {
  children: null,
  className: null,
};

Toolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

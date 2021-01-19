import React from 'react';
import PropTypes from 'prop-types';

export const PanelControlsToolbar = ({ children, className, ...rest }) => (
  <div className={`sage-panel-controls__toolbar ${className || ''}`} {...rest}>
    {children}
  </div>
);

PanelControlsToolbar.defaultProps = {
  children: null,
  className: null,
};

PanelControlsToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

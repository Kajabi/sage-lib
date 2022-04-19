import React from 'react';
import PropTypes from 'prop-types';

export const PanelControlsToolbarButtonGroup = ({
  children,
  className,
  ...rest
}) => (
  <div className={`sage-panel-controls__toolbar-btn-group ${className || ''}`} {...rest}>
    {children}
  </div>
);

PanelControlsToolbarButtonGroup.defaultProps = {
  children: null,
  className: null,
};

PanelControlsToolbarButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

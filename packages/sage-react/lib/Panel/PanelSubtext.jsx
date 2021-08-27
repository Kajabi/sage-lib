import React from 'react';
import PropTypes from 'prop-types';

export const PanelSubtext = ({ children, ...rest }) => (
  <div className="sage-panel__subtext" {...rest}>
    {children}
  </div>
);

PanelSubtext.defaultProps = {
  children: null,
};

PanelSubtext.propTypes = {
  children: PropTypes.node,
};

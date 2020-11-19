import React from 'react';
import PropTypes from 'prop-types';

const PanelStack = ({
  children,
  className,
  ...rest
}) => (
  <div
    className={`sage-panel__stack ${className || ''}`}
    {...rest}
  >
    {children}
  </div>
);

PanelStack.defaultProps = {
  children: null,
  className: '',
};

PanelStack.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PanelStack;

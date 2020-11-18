import React from 'react';
import PropTypes from 'prop-types';

const PanelTile = ({
  children,
  className,
  ...rest
}) => (
  <div
    className={`sage-panel__tile ${className || ''}`}
    {...rest}
  >
    {children}
  </div>
);

PanelTile.defaultProps = {
  children: null,
  className: '',
};

PanelTile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PanelTile;

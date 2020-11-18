import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PANEL_FIGURE_BLEED_OPTIONS } from './configs';

const PanelFigure = ({
  children,
  className,
  bleed,
  isWistia,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__figure',
    className,
    {
      'sage-panel__figure--wistia': isWistia,
      [`sage-panel__figure--${bleed}`]: bleed,
    }
  );

  return (
    <div
      className={classNames}
      {...rest}
    >
      {children}
    </div>
  );
};

PanelFigure.BLEED_OPTIONS = PANEL_FIGURE_BLEED_OPTIONS;

PanelFigure.defaultProps = {
  bleed: PANEL_FIGURE_BLEED_OPTIONS.NONE,
  children: null,
  className: null,
  isWistia: false,
};

PanelFigure.propTypes = {
  bleed: PropTypes.oneOf(Object.values(PANEL_FIGURE_BLEED_OPTIONS)),
  children: PropTypes.node,
  className: PropTypes.string,
  isWistia: PropTypes.bool,
};

export default PanelFigure;

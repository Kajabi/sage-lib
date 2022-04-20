import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PANEL_FIGURE_BLEED_OPTIONS } from './configs';

export const PanelFigure = ({
  aspectRatio,
  backgroundColor,
  bleed,
  children,
  className,
  isWistia,
  padded,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__figure',
    className,
    {
      'sage-panel__figure--aspect-ratio': aspectRatio,
      [`sage-panel__figure--${bleed}`]: bleed,
      'sage-panel__figure--padded': padded,
      'sage-panel__figure--wistia': isWistia,
    }
  );

  const customStyles = {};
  if (aspectRatio) {
    customStyles['--sage-figure-aspect-ratio'] = aspectRatio;
  }

  if (backgroundColor) {
    customStyles['--sage-figure-background-color'] = backgroundColor;
  }

  return (
    <div
      className={classNames}
      {...rest}
      style={{ ...customStyles, ...rest.styles }}
    >
      {children}
    </div>
  );
};

PanelFigure.BLEED_OPTIONS = PANEL_FIGURE_BLEED_OPTIONS;

PanelFigure.defaultProps = {
  aspectRatio: null,
  backgroundColor: null,
  bleed: PANEL_FIGURE_BLEED_OPTIONS.NONE,
  children: null,
  className: null,
  isWistia: false,
  padded: false,
};

PanelFigure.propTypes = {
  aspectRatio: PropTypes.number,
  backgroundColor: PropTypes.string,
  bleed: PropTypes.oneOf(Object.values(PANEL_FIGURE_BLEED_OPTIONS)),
  children: PropTypes.node,
  className: PropTypes.string,
  isWistia: PropTypes.bool,
  padded: PropTypes.bool,
};

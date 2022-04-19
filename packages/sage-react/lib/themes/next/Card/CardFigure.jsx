import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CARD_FIGURE_BLEED_OPTIONS } from './configs';

export const CardFigure = ({
  children,
  className,
  bleed,
  isWistia,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card__figure',
    className,
    {
      'sage-card__figure--wistia': isWistia,
      [`sage-card__figure--${bleed}`]: bleed,
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

CardFigure.BLEED_OPTIONS = CARD_FIGURE_BLEED_OPTIONS;

CardFigure.defaultProps = {
  bleed: CARD_FIGURE_BLEED_OPTIONS.NONE,
  children: null,
  className: null,
  isWistia: false,
};

CardFigure.propTypes = {
  bleed: PropTypes.oneOf(Object.values(CARD_FIGURE_BLEED_OPTIONS)),
  children: PropTypes.node,
  className: PropTypes.string,
  isWistia: PropTypes.bool,
};

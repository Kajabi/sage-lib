import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CARD_HIGHLIGHT_COLORS, CARD_HIGHLIGHT_POSITIONS } from './configs';

const CardHighlight = ({
  children,
  className,
  color,
  customColor,
  position,
  value
}) => {
  const hasContent = value || children ? true : false;
  const classNames = classnames(
    'sage-card-highlight',
    className,
    {
      [`sage-card-highlight--${color}`]: color && !customColor,
      [`sage-card-highlight--${position}`]: position,
    }
  );

  return (
    <span
      className={classNames}
      aria-hidden={!hasContent}
      aria-label={value}
      style={(customColor && customColor !== '') && ({
        '--color': customColor,
      })}
    >
      {children && (
        <span className="visually-hidden">{children}</span>
      )}
    </span>
  );
};

CardHighlight.COLORS = CARD_HIGHLIGHT_COLORS;
CardHighlight.POSITIONS = CARD_HIGHLIGHT_POSITIONS;

CardHighlight.defaultProps = {
  children: null,
  className: null,
  color: CARD_HIGHLIGHT_COLORS.PRIMARY,
  customColor: null,
  position: CARD_HIGHLIGHT_POSITIONS.LEFT,
  value: null,
};

CardHighlight.propTypes = {
  position: PropTypes.string,
  color: PropTypes.oneOf(Object.values(CARD_HIGHLIGHT_COLORS)),
  customColor: PropTypes.string,
  position: PropTypes.oneOf(Object.values(CARD_HIGHLIGHT_POSITIONS)),
};

export default CardHighlight;

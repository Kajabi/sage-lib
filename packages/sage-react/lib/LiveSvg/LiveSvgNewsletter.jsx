import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { LIVESVG_COLORS } from './configs';

export const LiveSvgNewsletter = ({
    className,
    color,
    ...rest
}) => {
  const classNames = classnames(
    'sage-live-svg--newletter',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <svg width="456" height="377" viewBox="0 0 456 377" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="224" width="124" height="12" rx="6" fill="#BBCAD8"/>
        <rect x="224" y="72" width="80" height="28" rx="6" fill={color}/>
        <rect x="224" y="28" width="232" height="8" rx="4" fill="#E0E7F1"/>
        <rect x="224" y="44" width="170" height="8" rx="4" fill="#E0E7F1"/>
        <rect width="200" height="113" rx="6" fill="#E0E7F1"/>
        <rect x="224" y="161" width="124" height="12" rx="6" fill="#BBCAD8"/>
        <rect x="224" y="233" width="80" height="28" rx="6" fill={color}/>
        <rect x="224" y="189" width="232" height="8" rx="4" fill="#E0E7F1"/>
        <rect x="224" y="205" width="170" height="8" rx="4" fill="#E0E7F1"/>
        <rect y="161" width="200" height="113" rx="6" fill="#E0E7F1"/>
        <rect x="224" y="322" width="124" height="12" rx="6" fill="#BBCAD8"/>
        <rect x="224" y="350" width="232" height="8" rx="4" fill="#E0E7F1"/>
        <rect y="322" width="200" height="113" rx="6" fill="#E0E7F1"/>
      </svg>
    </div>
  )
};

LiveSvgNewsletter.COLORS = LIVESVG_COLORS;

LiveSvgNewsletter.defaultProps = {
  className: '',
  color: null,
};

LiveSvgNewsletter.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(SageTokens.COLOR_PALETTE)),
};

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { LIVESVG_COLORS } from './configs';

export const LiveSvgCommunity = ({
  className,
  color,
  ...rest
}) => {
  const classNames = classnames(
    'sage-live-svg--community',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <svg width="477" height="389" viewBox="0 0 477 389" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="10" rx="5" fill={color} />
        <rect x="91" width="64" height="10" rx="5" fill="#BBCAD8" />
        <rect x="398" width="79" height="10" rx="5" fill="#BBCAD8" />
        <rect x="339" y="26" width="135" height="112" rx="6" fill="#E0E7F1" />
        <rect x="339" y="162" width="135" height="112" rx="6" fill="#E0E7F1" />
        <rect x="26" y="38" width="88" height="10" rx="5" fill="#BBCAD8" />
        <circle cx="10" cy="44" r="10" fill={color} fillOpacity="0.45" />
        <rect y="62" width="268" height="175.586" rx="8" fill="#E0E7F1" />
        <rect y="245.586" width="190" height="10" rx="5" fill="#DFE7F0" />
        <rect y="264.586" width="130" height="10" rx="5" fill="#DFE7F0" />
        <rect x="26" y="303" width="88" height="10" rx="5" fill="#BBCAD8" />
        <circle cx="10" cy="309" r="10" fill={color} fillOpacity="0.45" />
        <rect y="327" width="268" height="175.586" rx="8" fill="#DFE7F0" />
      </svg>
    </div>
  );
};

LiveSvgCommunity.COLORS = LIVESVG_COLORS;

LiveSvgCommunity.defaultProps = {
  className: '',
  color: null,
};

LiveSvgCommunity.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(SageTokens.COLOR_PALETTE)),
};

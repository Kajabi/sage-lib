import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { LIVESVG_COLORS } from './configs';

export const LiveSvgTop = ({
  className,
  color,
  ...rest
}) => {
  const classNames = classnames(
    'sage-live-svg--top',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <svg width="832" height="103" viewBox="0 0 832 103" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="832" height="42" fill="#E0E7F1" />
        <rect x="16" y="16" width="10" height="10" rx="5" fill="#94A6B8" />
        <rect x="34" y="16" width="10" height="10" rx="5" fill="#94A6B8" />
        <rect x="52" y="16" width="10" height="10" rx="5" fill="#94A6B8" />
        <rect x="-0.5" y="41.5" width="833" height="61" fill="white" />
        <rect x="374" y="68" width="48" height="8" rx="4" fill="#E0E7F1" />
        <rect x="454" y="68" width="48" height="8" rx="4" fill="#E0E7F1" />
        <rect x="534" y="68" width="48" height="8" rx="4" fill="#E0E7F1" />
        <rect x="614" y="68" width="48" height="8" rx="4" fill="#E0E7F1" />
        <rect x="694" y="68" width="48" height="8" rx="4" fill="#E0E7F1" />
        <rect x="90" y="66" width="87" height="12" rx="6" fill="#BBCAD8" />
        <rect x="-0.5" y="41.5" width="833" height="61" stroke="#E0E7F1" />
      </svg>
    </div>
  );
};

LiveSvgTop.COLORS = LIVESVG_COLORS;

LiveSvgTop.defaultProps = {
  className: '',
  color: null,
};

LiveSvgTop.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(SageTokens.COLOR_PALETTE)),
};

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { LIVESVG_COLORS } from './configs';

export const LiveSvgPodcast = ({
  className,
  color,
  ...rest
}) => {
  const classNames = classnames(
    'sage-live-svg--podcast',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <svg width="456" height="226" viewBox="0 0 456 226" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="456" height="157" fill={color} />
        <rect x="26" y="18" width="80" height="80" fill="#E0E7F1" />
        <rect x="122" y="34" width="124" height="12" rx="6" fill="#E0E7F1" />
        <rect x="122" y="18" width="49" height="8" rx="4" fill="white" />
        <rect x="122" y="54" width="102" height="8" rx="4" fill="white" />
        <rect x="182" y="105" width="96" height="30" rx="15" fill="white" />
        <path d="M236.37 119.445L226.37 112.779C226.165 112.643 225.902 112.629 225.686 112.745C225.468 112.861 225.333 113.087 225.333 113.333V126.667C225.333 126.913 225.468 127.139 225.685 127.255C225.784 127.307 225.892 127.333 226 127.333C226.129 127.333 226.258 127.295 226.37 127.221L236.37 120.555C236.555 120.431 236.666 120.223 236.666 120C236.666 119.777 236.555 119.569 236.37 119.445Z" fill={color} />
        <rect y="170" width="236" height="8" rx="4" fill="#E0E7F1" />
        <rect y="186" width="139" height="8" rx="4" fill="#E0E7F1" />
        <rect y="218" width="79" height="8" rx="4" fill={color} />
      </svg>
    </div>
  );
};

LiveSvgPodcast.COLORS = LIVESVG_COLORS;

LiveSvgPodcast.defaultProps = {
  className: '',
  color: null,
};

LiveSvgPodcast.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(SageTokens.COLOR_PALETTE)),
};

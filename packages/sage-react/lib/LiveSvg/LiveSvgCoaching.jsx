import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { LIVESVG_COLORS } from './configs';

export const LiveSvgCoaching = ({
  className,
  color,
  ...rest
}) => {
  const classNames = classnames(
    'sage-live-svg--coaching',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <svg width="448" height="296" viewBox="0 0 448 296" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_3269_6969)">
          <rect x="4" y="2" width="440" height="288" rx="16" fill="white" />
          <rect x="28.5" y="26.5" width="391" height="47" rx="11.5" fill="white" />
          <rect x="44" y="42" width="16" height="16" rx="8" fill="white" />
          <path d="M60 50C60 54.4183 56.4183 58 52 58C47.5817 58 44 54.4183 44 50C44 45.5817 47.5817 42 52 42C56.4183 42 60 45.5817 60 50ZM51.0746 54.2359L57.0101 48.3005C57.2117 48.0989 57.2117 47.7721 57.0101 47.5705L56.2802 46.8406C56.0787 46.6391 55.7519 46.6391 55.5503 46.8406L50.7097 51.6812L48.4497 49.4213C48.2482 49.2197 47.9214 49.2197 47.7198 49.4213L46.9899 50.1512C46.7883 50.3527 46.7883 50.6795 46.9899 50.8811L50.3447 54.2359C50.5463 54.4375 50.8731 54.4375 51.0746 54.2359Z" fill="#23856D" />
          <rect x="68" y="46" width="74" height="8" rx="4" fill="#BBCAD8" />
          <rect x="322" y="46" width="82" height="8" rx="4" fill="#E0E7F1" />
          <rect x="28.5" y="26.5" width="391" height="47" rx="11.5" stroke="#E0E7F1" />
          <rect x="28.5" y="90.5" width="391" height="47" rx="11.5" fill="white" />
          <path d="M44.4286 112H59.5714C59.8071 112 60 112.169 60 112.375V120.5C60 121.328 59.2321 122 58.2857 122H45.7143C44.7679 122 44 121.328 44 120.5V112.375C44 112.169 44.1929 112 44.4286 112ZM60 110.625V109.5C60 108.672 59.2321 108 58.2857 108H56.5714V106.375C56.5714 106.169 56.3786 106 56.1429 106H54.7143C54.4786 106 54.2857 106.169 54.2857 106.375V108H49.7143V106.375C49.7143 106.169 49.5214 106 49.2857 106H47.8571C47.6214 106 47.4286 106.169 47.4286 106.375V108H45.7143C44.7679 108 44 108.672 44 109.5V110.625C44 110.831 44.1929 111 44.4286 111H59.5714C59.8071 111 60 110.831 60 110.625Z" fill={color} />
          <rect x="68" y="110" width="74" height="8" rx="4" fill="#BBCAD8" />
          <rect x="322" y="110" width="82" height="8" rx="4" fill="#E0E7F1" />
          <rect x="28.5" y="90.5" width="391" height="47" rx="11.5" stroke="#E0E7F1" />
          <rect x="28.5" y="154.5" width="391" height="47" rx="11.5" fill="white" />
          <path d="M44.4286 176H59.5714C59.8071 176 60 176.169 60 176.375V184.5C60 185.328 59.2321 186 58.2857 186H45.7143C44.7679 186 44 185.328 44 184.5V176.375C44 176.169 44.1929 176 44.4286 176ZM60 174.625V173.5C60 172.672 59.2321 172 58.2857 172H56.5714V170.375C56.5714 170.169 56.3786 170 56.1429 170H54.7143C54.4786 170 54.2857 170.169 54.2857 170.375V172H49.7143V170.375C49.7143 170.169 49.5214 170 49.2857 170H47.8571C47.6214 170 47.4286 170.169 47.4286 170.375V172H45.7143C44.7679 172 44 172.672 44 173.5V174.625C44 174.831 44.1929 175 44.4286 175H59.5714C59.8071 175 60 174.831 60 174.625Z" fill={color} />
          <rect x="68" y="174" width="74" height="8" rx="4" fill="#BBCAD8" />
          <rect x="322" y="174" width="82" height="8" rx="4" fill="#E0E7F1" />
          <rect x="28.5" y="154.5" width="391" height="47" rx="11.5" stroke="#E0E7F1" />
          <rect x="28.5" y="218.5" width="391" height="47" rx="11.5" fill="white" />
          <path d="M44.4286 240H59.5714C59.8071 240 60 240.169 60 240.375V248.5C60 249.328 59.2321 250 58.2857 250H45.7143C44.7679 250 44 249.328 44 248.5V240.375C44 240.169 44.1929 240 44.4286 240ZM60 238.625V237.5C60 236.672 59.2321 236 58.2857 236H56.5714V234.375C56.5714 234.169 56.3786 234 56.1429 234H54.7143C54.4786 234 54.2857 234.169 54.2857 234.375V236H49.7143V234.375C49.7143 234.169 49.5214 234 49.2857 234H47.8571C47.6214 234 47.4286 234.169 47.4286 234.375V236H45.7143C44.7679 236 44 236.672 44 237.5V238.625C44 238.831 44.1929 239 44.4286 239H59.5714C59.8071 239 60 238.831 60 238.625Z" fill={color} />
          <rect x="68" y="238" width="74" height="8" rx="4" fill="#BBCAD8" />
          <rect x="322" y="238" width="82" height="8" rx="4" fill="#E0E7F1" />
          <rect x="28.5" y="218.5" width="391" height="47" rx="11.5" stroke="#E0E7F1" />
        </g>
        <defs>
          <filter id="filter0_dd_3269_6969" x="0" y="0" width="448" height="296" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3269_6969" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_3269_6969" result="effect2_dropShadow_3269_6969" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3269_6969" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

LiveSvgCoaching.COLORS = LIVESVG_COLORS;

LiveSvgCoaching.defaultProps = {
  className: '',
  color: null,
};

LiveSvgCoaching.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(SageTokens.COLOR_PALETTE)),
};

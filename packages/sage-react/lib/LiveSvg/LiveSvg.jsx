import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { LiveSvgTop } from './LiveSvgTop';
import { LiveSvgCoaching } from './LiveSvgCoaching';
import { LiveSvgCommunity } from './LiveSvgCommunity';
import { LiveSvgNewsletter } from './LiveSvgNewsletter';
import { LiveSvgPodcast } from './LiveSvgPodcast';
import { SageTokens } from '../configs';
import { LIVESVG_COLORS } from './configs';

export const LiveSvg = ({
  className,
  color,
  content,
  ...rest
}) => {
  const classNames = classnames(
    'sage-live-svg',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <LiveSvgTop />
      <LiveSvgCommunity
        color={color}
      />
      <LiveSvgTop />
      <LiveSvgCoaching
        color={color}
      />
      <LiveSvgTop />
      <LiveSvgPodcast
        color={color}
      />
      <LiveSvgTop />
      <LiveSvgNewsletter
        color={color}
      />
    </div>
  );
};

LiveSvg.COLORS = LIVESVG_COLORS;

LiveSvg.defaultProps = {
  className: '',
  color: null,
};

LiveSvg.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(SageTokens.COLOR_PALETTE)),
  content: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Frame,
  SageClassnames,
  SageTokens,
} from '../../..';
import { Icon } from '../../../Icon';
import { ProgressBar } from '../../../ProgressBar';

export const SidebarModule = ({
  step,
  cta: {
    label,
    href,
  }
}) => (
  <Frame
    gap={Frame.GAPS.XS}
    borderRadius={Frame.BORDER_RADII.SM}
    padding={Frame.PADDINGS.SM}
    background={SageTokens.COLOR_SLIDERS.PRIMARY_300}
    tag={Link}
    href={href}
  >
    <p className={`${SageClassnames.TYPE.BODY_XSMALL} ${SageClassnames.TYPE_COLORS.WHITE}`}>
      Get started
    </p>
    <Frame
      className={`${SageClassnames.TYPE.BODY} ${SageClassnames.TYPE_COLORS.WHITE}`}
      tag="p"
      direction={Frame.DIRECTIONS.HORIZONTAL}
      gap={Frame.GAPS.XS}
    >
      {label}
      <Icon icon={Icon.ICONS.ARROW_RIGHT} />
    </Frame>

    {/*
      TODO: Need bar background to allow darker color
      https://kajabi.atlassian.net/browse/SAGE-573
    */}
    <ProgressBar
      color={SageTokens.COLOR_PALETTE.WHITE}
      percent={(step / 4) * 100}
      style={{ width: '100%' }}
    />
  </Frame>
);

SidebarModule.defaultProps = {
  cta: {
    label: 'Get started',
    url: '#',
  },
  step: 0,
};

SidebarModule.propTypes = {
  cta: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  step: PropTypes.number,
};

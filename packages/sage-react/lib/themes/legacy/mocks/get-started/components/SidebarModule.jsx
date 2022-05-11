import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Indicator,
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
  <Card>
    {/*
      TODO: replace with SageFrame component when launched,
      which will allow for background customizations
    */}
    <Card.Block>
      <p className={SageClassnames.TYPE.BODY_XSMALL}>
        Get started
      </p>

      {/*
        TODO: Need inverted button color option
        https://kajabi.atlassian.net/browse/SAGE-308
      */}
      <Button
        color={Button.COLORS.SECONDARY}
        subtle={true}
        icon={SageTokens.ICONS.ARROW_RIGHT}
        iconPosition={Button.ICON_POSITIONS.RIGHT}
        href={href}
      >
        {label}
      </Button>

      {/*
        TODO: Need bar variation for Indicator
        https://kajabi.atlassian.net/browse/SAGE-309
      */}
      <Indicator
        className={SageClassnames.SPACERS.XS_TOP}
        currentItem={step}
        numItems={4}
      />
    </Card.Block>
  </Card>
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

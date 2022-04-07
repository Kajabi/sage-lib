import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Panel,
  SageClassnames,
  SageTokens,
  Tabs,
} from '../../..';

export const DashboardTabPane = ({
  cta: {
    label,
    learnMoreUrl,
    url,
  },
  description,
  graphic,
  id,
  isActive,
  title,
}) => (
  <Tabs.Pane
    id={id}
    isActive={isActive}
  >
    {graphic}
    <Panel.Stack>
      <h5 className={SageClassnames.TYPE.HEADING_5}>
        {title}
      </h5>
      <p className={`${SageClassnames.TYPE.BODY} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
        {description}
      </p>
    </Panel.Stack>
    <Button.Group gap={Button.Group.GAP_OPTIONS.SM}>
      <Button
        color={Button.COLORS.PRIMARY}
        href={url}
      >
        {label}
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        subtle={true}
        icon={SageTokens.ICONS.LAUNCH}
        iconPosition={Button.ICON_POSITIONS.RIGHT}
        href={learnMoreUrl}
      >
        Learn more
      </Button>
    </Button.Group>
  </Tabs.Pane>
);

DashboardTabPane.defaultProps = {
  cta: {
    label: 'Get started',
    learnMoreUrl: '#',
    url: '#',
  },
  description: '',
  graphic: null,
  isActive: false,
  title: '',
};

DashboardTabPane.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  cta: PropTypes.shape({
    label: PropTypes.string,
    learnMoreUrl: PropTypes.string,
    url: PropTypes.string,
  }),
  description: PropTypes.string,
  graphic: PropTypes.node,
  title: PropTypes.string,
};

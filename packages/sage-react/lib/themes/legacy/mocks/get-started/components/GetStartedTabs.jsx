import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Panel,
  SageClassnames,
  SageTokens,
  Tabs,
} from '../../..';

export const GetStartedTabs = ({ tabsContent }) => {
  const [activeTab, setActiveTab] = React.useState(tabsContent[0].id);

  return (
    <Grid withRow={true}>
      <Grid.Col size={4} className={SageClassnames.CARD_GRID}>
        {tabsContent.map(({
          icon,
          id,
          label,
        }) => (
          <Tabs.Item
            key={`get-started-tab-${id}`}
            icon={icon}
            isActive={id === activeTab}
            type={Tabs.Item.CHOICE_TYPES.ICON}
            itemStyle={Tabs.Item.STYLES.CHOICE}
            label={label}
            panelId={id}
            onClick={() => setActiveTab(id)}
          />
        ))}
      </Grid.Col>
      <Grid.Col size={8} className={SageClassnames.PANEL_GRID}>
        {tabsContent.map(({
          cta: {
            label,
            learnMoreUrl,
            url,
          },
          description,
          graphic,
          id,
          title,
        }) => (
          <Tabs.Pane
            id={id}
            isActive={id === activeTab}
            key={`get-started-tab-pane-${id}`}
            panelSpacing={true}
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
        ))}
      </Grid.Col>
    </Grid>
  );
};

GetStartedTabs.defaultProps = {};

GetStartedTabs.propTypes = {
  tabsContent: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

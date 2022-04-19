import React from 'react';
import {
  Button,
  Grid,
  Panel,
  SageClassnames,
  SageTokens,
  Tabs,
} from '../../..';
import { getStartedTabs } from '../content';

export const DashboardPanel = () => {
  const [activeTab, setActiveTab] = React.useState(getStartedTabs[0].id);

  return (
    <Grid container={Grid.CONTAINER_SIZES.LG}>
      <Panel>
        <Panel.Stack>
          <h4 className={SageClassnames.TYPE.HEADING_5}>
            Let&rsquo;s get started
          </h4>
          <p className={`${SageClassnames.TYPE.BODY} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
            Building your business begins with these four simple steps
          </p>
        </Panel.Stack>

        <Panel.Divider bleed={true} />

        <Grid withRow={true}>
          <Grid.Col size={4} className={SageClassnames.CARD_GRID}>
            {getStartedTabs.map(({
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
            {getStartedTabs.map(({
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
      </Panel>
    </Grid>
  );
};

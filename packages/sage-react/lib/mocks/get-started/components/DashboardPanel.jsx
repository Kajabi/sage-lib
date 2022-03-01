import React from 'react';
import {
  Grid,
  SageClassnames,
  Tabs,
  Panel,
} from '../../..';
import { DashboardTabPane } from './DashboardTabPane';
import { getStartedTabs } from '../content';

export const DashboardPanel = () => (
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

      <div className={SageClassnames.GRID_PANEL}>
        <Tabs
          id="example-tabs3"
          stacked={true}
          tabs={getStartedTabs.map(({
            cta,
            description,
            graphic,
            icon,
            id,
            label,
            title,
          }) => ({
            id,
            content: (
              <DashboardTabPane
                cta={cta}
                description={description}
                graphic={graphic}
                title={title}
              />
            ),
            label,
            tabChoiceIcon: icon,
            tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
          }))}
          tabLayout={Tabs.LAYOUTS.STACKED}
          tabStyle={Tabs.STYLES.CHOICE}
        />
      </div>
    </Panel>
  </Grid>
);

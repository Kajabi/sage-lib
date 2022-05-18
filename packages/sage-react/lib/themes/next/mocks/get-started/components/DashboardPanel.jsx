import React from 'react';
import {
  Grid,
  Panel,
  SageClassnames,
  useSageBreakpoint,
} from '../../..';
import { GetStartedTabs } from './GetStartedTabs';
import { GetStartedTabsMobile } from './GetStartedTabsMobile';
import { getStartedTabs } from '../content';

export const DashboardPanel = () => {
  const breakpoints = useSageBreakpoint();

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

        {breakpoints.sm ? (
          <GetStartedTabsMobile tabsContent={getStartedTabs} />
        ) : (
          <GetStartedTabs tabsContent={getStartedTabs} />
        )}
      </Panel>
    </Grid>
  );
};

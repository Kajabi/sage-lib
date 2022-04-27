import React from 'react';
import {
  Grid,
  PageHeading,
  Panel,
  SageClassnames,
  SageTokens,
  SelectDropdown,
} from '../..';
import {
  AlertsFactory,
  PaymentStat,
  OverviewCharts,
  RecentTransactionsTable,
  UpcomingFeatures,
} from './components';
import {
  paymentStats,
  rangeDropdownItems,
} from './data-helper';

export const Main = () => (
  <>
    <PageHeading>
      Payments
    </PageHeading>
    <div className={SageClassnames.PANEL_GRID}>
      <Panel.Row>
        &nbsp;
        <SelectDropdown
          customized
          initialSelectedValue={rangeDropdownItems[1].label}
          items={rangeDropdownItems}
          triggerWidth="190px"
        />
      </Panel.Row>
      <AlertsFactory />
      <Panel.Row gridTemplate={SageTokens.GRID_TEMPLATES.O}>
        {paymentStats.map((stat) => <PaymentStat key={stat.title} {...stat} />)}
      </Panel.Row>
      <Grid withRow>
        <Grid.Col size="8" className={SageClassnames.CARD_GRID}>
          <OverviewCharts />
          <RecentTransactionsTable />
        </Grid.Col>
        <Grid.Col size="4">
          <UpcomingFeatures />
        </Grid.Col>
      </Grid>
    </div>
  </>
);

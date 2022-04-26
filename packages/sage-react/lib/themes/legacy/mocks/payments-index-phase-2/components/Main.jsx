import React from 'react';
import {
  Grid,
  Label,
  PageHeading,
  Panel,
  SageClassnames,
  SageTokens,
  SelectDropdown,
  Table,
} from '../../..';
import { AlertsFactory } from './AlertsFactory';
import { PaymentStat } from './PaymentStat';
import { PriceCell } from './PriceCell';

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
          initialSelectedValue='Month over month'
          items={[
            {
              isActive: true,
              label: 'Month over month',
              id: 'set-range-month',
            },
            {
              label: 'Week over week',
              id: 'set-range-week',
            },
            {
              label: 'Day over day',
              id: 'set-range-day',
            },
            {
              label: 'Year over year',
              id: 'set-range-year',
            },
          ]}
          triggerWidth='190px'
        />
      </Panel.Row>
      <AlertsFactory />
      <Panel.Row gridTemplate={SageTokens.GRID_TEMPLATES.O}>
        <PaymentStat
          change={{
            value: '27%',
            icon: SageTokens.ICONS.UP_SMALL,
            color: Label.COLORS.PUBLISHED,
          }}
          subtext='Sales this month'
          title='Transactions'
          tooltip='Members who pay for offers monthly up to 12 months lipsum.'
          value={842}
        />
        <PaymentStat
          change={{
            value: '27%',
            icon: SageTokens.ICONS.UP_SMALL,
            color: Label.COLORS.PUBLISHED,
          }}
          subtext='Active subscribers'
          title='Subscriptions'
          tooltip='Members who pay for offers monthly up to 12 months lipsum.'
          value={144}
        />
        <PaymentStat
          change={{
            value: '2%',
            icon: SageTokens.ICONS.UP_SMALL,
            color: Label.COLORS.PUBLISHED,
          }}
          subtext='Active multi-payments'
          title='Multi-payments'
          tooltip='Members who pay for offers monthly up to 12 months lipsum.'
          value={73}
        />
      </Panel.Row>
      <Grid withRow>
        <Grid.Col size='8' className={SageClassnames.CARD_GRID}>
          <Panel>
            <Panel.Row gridTemplate={SageTokens.GRID_TEMPLATES.TI} verticalAlign={Panel.Row.VERTICAL_ALIGNMENTS.START}>
              <Panel.Block>
                <h3 className={SageClassnames.TYPE.HEADING_5}>
                  Refunds
                </h3>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
                  See all your refunds for all payment types
                </p>
              </Panel.Block>
              <SelectDropdown
                customized
                initialSelectedValue='Refunds'
                items={[
                  {
                    label: 'Successful transactions',
                    id: 'set-chart-successful-transactions',
                  },
                  {
                    isActive: true,
                    label: 'Refunds',
                    id: 'set-chart-refunds',
                  },
                  {
                    label: 'Failed payments',
                    id: 'set-chart-failed-payments',
                  },
                ]}
                triggerWidth='120px'
              />
              <SelectDropdown
                customized
                initialSelectedValue='Last 30 days'
                items={[
                  {
                    isActive: true,
                    label: 'Last 30 days',
                    id: 'set-date-range-30-days',
                  },
                  {
                    label: 'Other ranges...',
                    id: 'set-date-range-other',
                  },
                ]}
                triggerWidth='150px'
              />
            </Panel.Row>
            {/* TODO: Need to sync with existing charting options */}
            [Chart goes here]
          </Panel>
          <Panel>
            <h3 className={SageClassnames.TYPE.HEADING_5}>
              Recent transactions
            </h3>
            {/* TODO: Add ability to hide table header row */}
            <Table
              selectable={false}
              schema={{
                price: {
                  dataType: Table.DATA_TYPES.HTML,
                  style: {
                    textAlign: 'right',
                  }
                },
                name: {
                  dataType: Table.DATA_TYPES.STRING,
                },
                when: {
                  dataType: Table.DATA_TYPES.DATE,
                  style: {
                    textAlign: 'right',
                  }
                },
              }}
              rows={[
                {
                  price: (<PriceCell price="$49.95" />),
                  currency: 'USD',
                  name: 'How To Build Your Personal Resilience',
                  when: '17 min ago',
                },
                {
                  price: (<PriceCell price="$8.95" />),
                  currency: 'USD',
                  name: 'What Is Leadership',
                  when: '44 min ago',
                },
                {
                  price: (<PriceCell price="$16.95" />),
                  currency: 'USD',
                  name: 'Planning for a Crisis',
                  when: '2 hours ago',
                },
                {
                  price: (<PriceCell price="$4.95" />),
                  currency: 'USD',
                  name: 'Vulnerable Leadership: The Power of Opening Up',
                  when: '5 hours ago',
                },
                {
                  price: (<PriceCell price="$99.95" />),
                  currency: 'USD',
                  name: 'Team Management Skills',
                  when: '17 hours ago',
                },
                {
                  price: (<PriceCell price="$2,349.95" />),
                  currency: 'USD',
                  name: 'How Good Is Your Problem Solving?',
                  when: '12 hours ago',
                },
                {
                  price: (<PriceCell price="$10.95" />),
                  currency: 'USD',
                  name: 'Analysing Potential Problems',
                  when: 'Yesterday',
                },
                {
                  price: (<PriceCell price="$2.95" />),
                  currency: 'USD',
                  name: 'The Core Skills Needed to Manage Your Team',
                  when: 'Yesterday',
                },
                {
                  price: (<PriceCell price="$5.95" />),
                  currency: 'USD',
                  name: 'Vulnerable Leadership: The Power of Opening Up',
                  when: 'Mar 14, 2022',
                },
                {
                  price: (<PriceCell price="$47.95" />),
                  currency: 'USD',
                  name: 'What Is Leadership',
                  when: 'Mar 14, 2022',
                },
              ]}
            />
          </Panel>
        </Grid.Col>
        <Grid.Col size='4'>
          <Panel>
            <Panel.Block>
              <h3 className={SageClassnames.TYPE.HEADING_5}>
                More on the way!
              </h3>
              <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
                Important features you've been asking for are on their way to Kajabi Payments.
              </p>
            </Panel.Block>
            {/* TODO: Need a plan for carousel as shown in design spec */}
            [Carousel goes here]
          </Panel>
        </Grid.Col>
      </Grid>
    </div>
  </>
);

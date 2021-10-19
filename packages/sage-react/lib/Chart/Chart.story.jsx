import React from 'react';
import * as Recharts from 'recharts';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Chart } from './Chart';

export default {
  title: 'Sage/Chart',
  component: Chart,
  args: {
    type: Chart.TYPES.BAR,
    framework: Recharts,
  },
  argTypes: {
    ...selectArgs({
      type: Chart.TYPES,
    })
  },
};

const Template = (args) => <Chart {...args} />;

export const Default = Template.bind({});

export const NoData = Template.bind({});
NoData.args = {
  loading: false,
};

export const Bar = Template.bind({});
Bar.args = {
  configs: {
    width: 420,
  },
  data: [
    {
      name: 'Healthy',
      value: 2467,
    },
    {
      name: 'Unengaged',
      value: 536,
    },
    {
      name: 'Inactive',
      value: 153,
    },
    {
      name: 'Hungry',
      value: 80,
    },
    {
      name: 'Grumpy',
      value: 53,
    },
  ],
  loading: false,
};

export const MultipleBars = Template.bind({});
MultipleBars.args = {
  configs: {
    bars: [
      {
        dataKey: 'thisYear',
        name: 'This Year',
        fill: SageTokens.COLOR_PALETTE.SAGE_200,
      },
      {
        dataKey: 'lastYear',
        name: 'Last Year',
        fill: SageTokens.COLOR_PALETTE.YELLOW_300,
      },
    ],
    showLegend: true,
  },
  data: [
    {
      name: 'Healthy',
      lastYear: 2345,
      thisYear: 2467,
    },
    {
      name: 'Unengaged',
      lastYear: 437,
      thisYear: 536,
    },
    {
      name: 'Inactive',
      lastYear: 185,
      thisYear: 153,
    },
    {
      name: 'Hungry',
      lastYear: 83,
      thisYear: 80,
    },
    {
      name: 'Grumpy',
      lastYear: 60,
      thisYear: 53,
    },
  ],
  loading: false,
};

export const Donut = Template.bind({});
Donut.args = {
  configs: {
    summary: {
      label: 'Total subscribed',
      caption: 'current',
    },
  },
  data: [
    {
      name: 'Healthy',
      value: 2467,
      fill: SageTokens.COLOR_PALETTE.SAGE_200,
    },
    {
      name: 'Unengaged',
      value: 536,
      fill: SageTokens.COLOR_PALETTE.YELLOW_300,
    },
    {
      name: 'Inactive',
      value: 153,
      fill: SageTokens.COLOR_PALETTE.RED_300,
    },
    {
      name: 'Hungry',
      value: 80,
      fill: SageTokens.COLOR_PALETTE.PRIMARY_300,
    },
    {
      name: 'Grumpy',
      value: 53,
      fill: SageTokens.COLOR_PALETTE.PURPLE_300,
    },
  ],
  loading: false,
  type: Chart.TYPES.DONUT,
};

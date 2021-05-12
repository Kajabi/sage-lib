import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Chart } from './Chart';

export default {
  title: 'Sage/Chart',
  component: Chart,
  args: {
    type: Chart.TYPES.DONUT,
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

export const Donut = Template.bind({});
Donut.args = {
  loading: false,
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
  ],
  configs: {
    summary: {
      label: 'Total subscribed',
      caption: 'current',
    },
  },
};

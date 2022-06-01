import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Topbar } from './Topbar';

export default {
  title: 'Sage/Topbar',
  component: Topbar,
  argTypes: {
    ...selectArgs({
    }),
  },
  args: {
    contentLeftDesktop: (
      <h1>LeftDesktop</h1>
    ),
    contentLeftMobile: (
      <h1>LeftMobile</h1>
    ),
    contentRight: (
      <h1>Right</h1>
    )
  }
};
const Template = (args) => <Topbar {...args} />;

export const Default = Template.bind({});

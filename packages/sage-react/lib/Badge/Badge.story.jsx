
import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Badge } from './Badge';

export default {
  title: 'Sage/Badge',
  component: Badge,
  args: {
  },
  argTypes: {
    ...selectArgs({
    })
  }
};

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});

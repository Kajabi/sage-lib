import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Link } from '../Link';
import { Description } from './Description';

export default {
  title: 'Sage/Description',
  component: Description,
  args: {
  },
  argTypes: {
    ...selectArgs({})
  }
};

const Template = (args) => <Description {...args} />;
export const Default = Template.bind({});

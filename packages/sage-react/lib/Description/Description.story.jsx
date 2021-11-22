import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Description } from './Description';

export default {
  title: 'Sage/Description',
  component: Description,
  args: {
    actionWidth: null,
    items: [
      {
        title: "Name",
        data: "John Doe",
      }
    ]
  },
  argTypes: {
    ...selectArgs({})
  }
};

const Template = (args) => <Description {...args} />;
export const Default = Template.bind({});

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: [
    {
      title: "Name",
      data: "John Doe"
    },
    {
      title: "Name",
      data: "John Doe"
    },
    {
      title: "Name",
      data: "John Doe"
    },
    {
      title: "Name",
      data: "John Doe"
    },
  ]
}

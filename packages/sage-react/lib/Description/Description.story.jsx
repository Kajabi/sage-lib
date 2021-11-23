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
    ...selectArgs({
      layout: Description.LAYOUT,
    })
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
};

export const MultipleItemsWithActionButton = Template.bind({});
MultipleItemsWithActionButton.args = {
  primaryAction: {
    value: "Button",
  }
};

export const StackedLayout = Template.bind({});
StackedLayout.args = {
  layout: Description.LAYOUT.STACKED,
  primaryAction: {
    value: "Button",
  }
};
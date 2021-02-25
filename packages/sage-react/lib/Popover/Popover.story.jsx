import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Popover } from './Popover';

export default {
  title: 'Sage/Popover',
  component: Popover,
  decorators: [(Story) => <div style={{ minHeight: 150 }}><Story /></div>],
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    label: 'Learn more',
    icon: SageTokens.ICONS.QUESTION_CIRCLE,
    iconOnly: true,
    moreLinkURL: '//example.com',
    title: 'Amazing popover'
  }
};
const Template = (args) => <Popover {...args} />;

export const Default = Template.bind({});

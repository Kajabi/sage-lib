import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Popover } from './Popover';

export default {
  title: 'Sage/Popover',
  component: Popover,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      position: Popover.POSITIONS,
    }),
  },
  args: {
    label: 'Learn more',
    icon: SageTokens.ICONS.QUESTION_CIRCLE,
    iconOnly: true,
    moreLinkURL: '//example.com',
    moreLinkText: 'Link text',
    title: 'Amazing popover',
    position: Popover.POSITIONS.BOTTOM,
  }
};

const Template = (args) => <Popover {...args} />;
export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', }}>
        <Story />
      </div>
    </>
  )
];

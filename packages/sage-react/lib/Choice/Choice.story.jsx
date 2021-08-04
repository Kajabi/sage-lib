import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Choice } from './Choice';
import { CHOICE_ICON_ALIGNMENTS, CHOICE_TYPES } from './configs';

export default {
  title: 'Sage/Choice',
  component: Choice,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      type: CHOICE_TYPES,
      verticalAlignIcon: CHOICE_ICON_ALIGNMENTS,
    }),
  },
  args: {
    icon: SageTokens.ICONS.VIDEO_ON,
    subtext: 'Description of Option 1',
    text: 'Option 1',
    verticalAlignIcon: CHOICE_ICON_ALIGNMENTS.DEFAULT,
  }
};

const Template = (args) => (
  <div style={{ maxWidth: '400px' }}>
    <Choice {...args} style={{ display: 'flex' }} />
  </div>
);
export const Default = Template.bind({});

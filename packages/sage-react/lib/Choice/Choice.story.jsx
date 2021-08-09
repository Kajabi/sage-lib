import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Choice } from './Choice';
import { ICON_ALIGNMENTS, TYPES } from './configs';

export default {
  title: 'Sage/Choice',
  component: Choice,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      type: TYPES,
      verticalAlignIcon: ICON_ALIGNMENTS,
    }),
  },
  args: {
    icon: SageTokens.ICONS.VIDEO_ON,
    radioConfigs: { name: 'alpha', id: 'bravo', value: 'charlie' },
    subtext: 'Description of Option 1',
    text: 'Option 1',
    verticalAlignIcon: ICON_ALIGNMENTS.DEFAULT,
  }
};

const Template = (args) => (
  <div style={{ maxWidth: '400px' }}>
    <Choice {...args} />
  </div>
);
export const Default = Template.bind({});

import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Upsell } from './Upsell';

export default {
  title: 'Sage/Upsell',
  component: Upsell,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    content: 'Hello, world!',
    icon: SageTokens.ICONS.INFO_CIRCLE,
  }
};

const Template = (args) => <Upsell {...args} />;
export const Default = Template.bind({});

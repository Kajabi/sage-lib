import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { LiveSvg } from './LiveSvg';

export default {
  title: 'Sage/LiveSvg',
  component: LiveSvg,
  argTypes: {
    ...selectArgs({
      color: SageTokens.COLOR_PALETTE,
    }),
  },
  args: {
    content: 'Hello, world!',
    color: SageTokens.COLOR_PALETTE.PRIMARY_400
  }
};

const Template = (args) => <LiveSvg {...args} />;
export const Default = Template.bind({});

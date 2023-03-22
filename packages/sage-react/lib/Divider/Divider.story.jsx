import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Divider } from './Divider';

export default {
  title: 'Sage/Divider',
  component: Divider,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Use the divider to separate sections of content. You can also use them to override auto-layout padding.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      offset: SageTokens.SPACERS
    })
  }
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});

export const vertical = Template.bind({});
vertical.args = {
  vertical: true,
};
vertical.decorators = [
  (Story) => (
    <>
      <div style={{ height: 250 }}>
        {Story()}
      </div>
    </>
  )
];

export const horizontalOffset = Template.bind({});
horizontalOffset.args = {
  offset: SageTokens.SPACERS.LG,
};
horizontalOffset.decorators = [
  (Story) => (
    <>
      <div style={{ height: 150 }}>
        {Story()}
      </div>
    </>
  )
];

export const verticalOffset = Template.bind({});
verticalOffset.args = {
  vertical: true,
  offset: SageTokens.SPACERS.LG,
};
verticalOffset.decorators = [
  (Story) => (
    <>
      <div style={{ height: 150 }}>
        {Story()}
      </div>
    </>
  )
];

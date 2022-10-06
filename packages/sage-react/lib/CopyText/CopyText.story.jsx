import React from 'react';
import { CopyText } from './CopyText';
import { CopyTextCard } from './CopyTextCard';

export default {
  title: 'Sage/CopyText',
  component: CopyText,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A small set of components to use in places where "copy" text is provided.'
      },
    },
  },
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Story()}</div>],
  args: {
    children: (
      <>
        Hello World!
      </>
    ),
    semibold: false,
  }
};
const Template = (args) => <CopyText {...args} />;

export const Default = Template.bind({});

export const CopyTextCardBlock = (args) => (
  <>
    <CopyTextCard semibold={args.semibold}>
      <p><b>Label:</b> Value to copy yourself!</p>
      <p><b>Label:</b> Value to copy yourself!</p>
      <p><b>Label:</b> Value to copy yourself!</p>
    </CopyTextCard>
  </>
);

CopyTextCardBlock.args = {
  semibold: false
};
CopyTextCardBlock.decorators = [
  (Story) => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {Story()}
      </div>
    </>
  )
];

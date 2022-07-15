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
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris erat urna, eleifend quis mollis ut, vehicula vitae elit.
          Quisque elementum risus congue, placerat tellus vulputate, ornare neque.
          Mauris eu quam nisi.
        </p>
        <p>
          Ut elementum, nulla sit amet viverra vulputate,
          mi risus dignissim odio, vel aliquam lorem mi nec diam.
          Donec bibendum tincidunt est, non ultricies nisi efficitur eget.
          Integer et libero aliquam, efficitur ante ac, auctor dolor.
          Vivamus aliquet vehicula sollicitudin.
        </p>
      </>
    )
  }
};

const Template = (args) => <Popover {...args} />;
export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Story />
      </div>
    </>
  )
];

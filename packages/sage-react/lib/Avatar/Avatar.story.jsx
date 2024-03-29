import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Avatar } from './Avatar';

export default {
  title: 'Sage/Avatar',
  component: Avatar,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Avatar is used for showing a thumbnail representation of an admin, customer, or business.'
      },
    },
  },
  args: {
    centered: true,
    color: Avatar.COLORS.DEFAULT,
    image: {
      alt: null,
      src: null,
      id: null,
    },
    size: '48px',
  },
  argTypes: {
    ...selectArgs({
      badgeForegroundColor: SageTokens.COLOR_SLIDERS,
      badgeIcon: SageTokens.ICONS,
      color: Avatar.COLORS,
    })
  }
};

const Template = (args) => <Avatar {...args} />;
export const Default = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  image: {
    alt: 'Kajabi image avatar',
    src: 'https://picsum.photos/64/64',
    id: 'image-avatar'
  },
  size: '64px'
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  badge: true, size: '64px'
};

export const CustomBadge = Template.bind({});
CustomBadge.args = {
  badge: true,
  badgeBackgroundColor: '#333',
  badgeForegroundColor: 'red-200',
  badgeIcon: SageTokens.ICONS.DANGER_FILLED,
  size: '64px',
};

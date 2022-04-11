import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Avatar } from './Avatar';

export default {
  title: 'Sage/Avatar',
  component: Avatar,
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
      color: Avatar.COLORS
    })
  }
};

const Template = (args) => <Avatar {...args} />;
export const Default = Template.bind({});

export const WithBadge = Template.bind({});
WithBadge.args = { badge: true, size: '64px' };

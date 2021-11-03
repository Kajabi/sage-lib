import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Avatar } from './Avatar';

export default {
  title: 'Sage/Avatar',
  component: Avatar,
  args: {
    centered: true,
    color: Avatar.COLORS.SAGE,
    image: {
      alt: null,
      src: null,
    },
    initials: 'QJ',
    lazyLoadInitials: true,
    size: null,
  },
  argTypes: {
    ...selectArgs({
      color: Avatar.COLORS
    })
  }
};

const Template = (args) => <Avatar {...args} />;
export const Default = Template.bind({});

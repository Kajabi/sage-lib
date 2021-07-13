import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Avatar } from './Avatar';

export default {
  title: 'Sage/Avatar',
  component: Avatar,
  args: {
    image: {
      alt: null,
      src: null,
    },
    initials: 'QJ',
    color: Avatar.COLORS.SAGE,
    size: null,
    centered: true,
  },
  argTypes: {
    ...selectArgs({
      color: Avatar.COLORS
    })
  }
};

const Template = (args) => <Avatar {...args} />;
export const Default = Template.bind({});

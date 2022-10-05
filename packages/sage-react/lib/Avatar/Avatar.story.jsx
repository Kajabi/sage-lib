import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Avatar } from './Avatar';
import { Icon } from '../Icon';

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
      badgeColor: SageTokens.COLOR_SLIDERS,
      badgeIcon: SageTokens.ICONS,
      color: Avatar.COLORS,
    })
  }
};

const Template = (args) => <Avatar {...args} />;
export const Default = Template.bind({});

export const WithBadge = Template.bind({});
WithBadge.args = { badge: true, size: '64px' };

export const CustomBadge = Template.bind({});
CustomBadge.args = {
  badge: true,
  badgeColor: Icon.COLORS.YELLOW_300,
  badgeIcon: Icon.ICONS.ARCHIVE,
  size: '64px',
};

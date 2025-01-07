import React from 'react';
import { SageTokens } from '../configs';
import { selectArgs } from '../story-support/helpers';
import { Link } from './Link';

export default {
  title: 'Sage/Link',
  component: Link,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'While links have default styling in the app, some links deserve a little more ❤️.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      iconPosition: Link.ICON_POSITIONS,
      style: Link.COLORS,
    })
  }
};

const Template = (args) => <Link {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Standard link',
  href: '#'
};

export const Plain = Template.bind({});
Plain.args = {
  children: 'Plain link',
  removeUnderline: true,
  style: Link.COLORS.SECONDARY,
  href: '#',
};

export const LinkIconLeft = Template.bind({});
LinkIconLeft.args = {
  children: 'Standard link',
  href: '#',
  icon: 'star',
  iconPosition: 'left',
};

export const LinkIconRight = Template.bind({});
LinkIconRight.args = {
  children: 'Standard link',
  href: '#',
  icon: 'star',
  iconPosition: 'right',
};

export const Launch = Template.bind({});
Launch.args = {
  children: 'Link to launch a new window',
  className: Link.CLASSNAMES.LAUNCH,
  rel: 'noopener',
  target: '_blank',
  href: '//example.com',
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  children: 'Link with Tooltip',
  href: '#',
  tooltip: {
    content: 'Tooltip',
    position: 'right'
  },
};

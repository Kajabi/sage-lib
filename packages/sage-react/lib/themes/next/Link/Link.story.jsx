import React from 'react';
import { Link } from './Link';

export default {
  title: 'Sage/Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Standard link',
  href: '#',
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

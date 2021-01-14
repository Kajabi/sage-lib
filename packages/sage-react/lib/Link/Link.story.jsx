import React from 'react';
import Link from './Link';

export default {
  title: 'Sage/Link',
  component: Link,
}
const Template = (args) => <Link {...args} />

// Each story then reuses that template
export const Primary = Template.bind({});
Launch.args = {
  children: 'Standard link',
  href: "#",
};

export const Launch = Template.bind({});
Launch.args = {
  children: 'Link to launch a new window',
  className: Link.CLASSNAMES.LAUNCH,
  rel: "noopener noreferrer",
  target: "_blank",
  href: "//example.com",
};

export const Subtext = Template.bind({});
Subtext.args = {
  children: 'Link in subtext contenxt',
  className: Link.CLASSNAMES.SUBTEXT,
  href: "#",
};

import React from 'react';
import { HelpLink } from '../HelpLink';
import { PageHeading } from './PageHeading';

export default {
  title: 'Sage/PageHeading',
  component: PageHeading,
  args: {
    children: (
      <>
        Page heading goes here
        <HelpLink href="//example.com" target="_blank" referrer="no-referrer" />
      </>
    ),
    breadcrumbs: [
      {
        label: 'Back somewhere',
        href: '#back'
      }
    ],
    actionItems: null,
    secondaryText: 'Secondary text here',
    toolbarItems: null
  }
};
const Template = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});

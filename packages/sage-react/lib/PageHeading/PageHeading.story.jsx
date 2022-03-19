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
        <HelpLink href="//example.com" target="_blank" rel="noopener" />
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
    toolbarItems: null,
    image: {
      src: "https://via.placeholder.com/132x74",
      alt: "Page heading demo image"
    },
  }
};
const Template = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});

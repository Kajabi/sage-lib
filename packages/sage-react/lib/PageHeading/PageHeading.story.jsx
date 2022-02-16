import React from 'react';
import { HelpLink } from '../HelpLink';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { PageHeading } from './PageHeading';

export default {
  title: 'Sage/PageHeading',
  component: PageHeading,
  args: {
    children: (
      <>
        Page heading goes here
      </>
    ),
    breadcrumbs: [
      {
        label: 'Back somewhere',
        href: '#back'
      }
    ],
    help: (
      <>
        <HelpLink href="//example.com" target="_blank" rel="noopener" />
      </>
    ),
    actionItems: null,
    secondaryText: 'Secondary text here',
    toolbarItems: null
  }
};
const Template = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});

export const AllItems = Template.bind({});
AllItems.args = {
  actionItems: [
    <Button
      color={Button.COLORS.SECONDARY}
      icon={SageTokens.ICONS.PREVIEW_ON}
      subtle={true}
    >
      Preview
    </Button>,
    <Button
      color={Button.COLORS.PRIMARY}
      icon={SageTokens.ICONS.CART}
    >
      Create
    </Button>
  ],
  toolbarItems: [
    <Button
      color={Button.COLORS.SECONDARY}
      icon={SageTokens.ICONS.CART}
      subtle={true}
    >
      Preview
    </Button>,
    <Button
      color={Button.COLORS.SECONDARY}
      icon={SageTokens.ICONS.GEAR}
      subtle={true}
    >
      Report
    </Button>,
    <Button
      color={Button.COLORS.SECONDARY}
      icon={SageTokens.ICONS.GEAR}
      subtle={true}
    >
      Settings
    </Button>
  ],
};

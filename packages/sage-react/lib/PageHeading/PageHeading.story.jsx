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
        Page heading title
      </>
    ),
    actionItems: null,
    toolbarItems: null
  }
};
const Template = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});

export const PageHeadingWithBackLink = Template.bind({});
PageHeadingWithBackLink.args = {
  breadcrumbs: [
    {
      label: 'Back somewhere',
      href: '#back'
    }
  ]
};
export const PageHeadingWithHelpLink = Template.bind({});
PageHeadingWithHelpLink.args = {
  help: (
    <>
      <HelpLink href="//example.com" target="_blank" rel="noopener" />
    </>
  )
};
export const PageHeadingWithActionButtons = Template.bind({});
PageHeadingWithActionButtons.args = {
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
};
export const PageHeadingWithToolbarAndSecondaryText = Template.bind({});
PageHeadingWithToolbarAndSecondaryText.args = {
  secondaryText: 'Secondary text here',
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
export const PageHeadingWithIntro = Template.bind({});
PageHeadingWithIntro.args = {
  intro: (
    <>
      <p>Intro - Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
};

export const AllItems = Template.bind({});
AllItems.args = {
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
  intro: (
    <>
      <p>Intro - Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
    </>
  ),
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

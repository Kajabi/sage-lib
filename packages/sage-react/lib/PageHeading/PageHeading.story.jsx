import React from 'react';
import { HelpLink } from '../HelpLink';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Icon } from '../Icon';
import { PageHeading } from './PageHeading';

export default {
  title: 'Sage/PageHeading',
  component: PageHeading,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Page headings are used at the top of pages and contain the title of the page along with optional breadcrumbs, help link, action buttons, toolbar, and intro text.'
      },
    },
  },
  args: {
    children: (
      <>
        Page heading goes here
      </>
    ),
    actions: (
      <>
        <Button
          color={Button.COLORS.SECONDARY}
          icon={SageTokens.ICONS.PREVIEW_ON}
          subtle={true}
        >
          Preview
        </Button>
        <Button
          color={Button.COLORS.PRIMARY}
          icon={SageTokens.ICONS.CART}
        >
          Create
        </Button>
      </>
    ),
    toolbar: null,
  },
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

export const PageHeadingWithIntro = Template.bind({});
PageHeadingWithIntro.args = {
  introText: 'Intro - Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
};

export const PageHeadingWithThumbnail = Template.bind({});
PageHeadingWithThumbnail.args = {
  image: {
    src: 'https://via.placeholder.com/132x74',
    alt: 'Page heading demo image',
  }
};

export const PageHeadingWithToolbarAndSecondaryText = Template.bind({});
PageHeadingWithToolbarAndSecondaryText.args = {
  secondaryText: 'Secondary text here',
  toolbar: (
    <>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.CART}
        subtle={true}
      >
        Preview
      </Button>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.GEAR}
        subtle={true}
      >
        Report
      </Button>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.GEAR}
        subtle={true}
      >
        Settings
      </Button>
    </>
  ),
};

export const PageHeadingWithRichTitleContent = Template.bind({});
PageHeadingWithRichTitleContent.args = {
  titleContent: (
    <>
      <Icon icon={SageTokens.ICONS.CART} />
      Products Dashboard
      <Badge color={Badge.COLORS.PUBLISHED}>Live</Badge>
    </>
  ),
  introText: 'Example of rich title content with icon and badge',
};

export const PageHeadingWithStyledTitleContent = Template.bind({});
PageHeadingWithStyledTitleContent.args = {
  titleContent: (
    <>
      <span style={{ color: '#6366f1' }}>Premium</span>
      <span>Course Builder</span>
      <Badge color={Badge.COLORS.DRAFT}>Beta</Badge>
    </>
  ),
  introText: 'Example with styled text segments and status badge',
};

export const PageHeadingWithIconOnly = Template.bind({});
PageHeadingWithIconOnly.args = {
  titleContent: (
    <>
      <Icon icon={SageTokens.ICONS.GEAR} />
      Settings
    </>
  ),
  introText: 'Simple example with just an icon',
};

export const AllItems = Template.bind({});
AllItems.args = {
  introText: 'Intro - Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  secondaryText: 'Secondary text here',
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
  actions: (
    <>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.PREVIEW_ON}
        subtle={true}
      >
        Preview
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        icon={SageTokens.ICONS.CART}
      >
        Create
      </Button>
    </>
  ),
  image: {
    src: 'https://via.placeholder.com/132x74',
    alt: 'Page heading demo image',
  },
  toolbar: (
    <>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.CART}
        subtle={true}
      >
        Preview
      </Button>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.GEAR}
        subtle={true}
      >
        Report
      </Button>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.GEAR}
        subtle={true}
      >
        Settings
      </Button>
    </>
  ),
};

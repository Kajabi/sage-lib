import React from 'react';
import { SageTokens } from '../configs';
import { selectArgs } from '../story-support/helpers';
import { Avatar } from '../Avatar';
import { Breadcrumbs } from '../Breadcrumbs';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Topbar } from './Topbar';

const showHideTopbar = () => {
  document.querySelector('.sage-topbar').classList.toggle('sage-topbar--hide');
};

export default {
  title: 'Sage/Topbar',
  component: Topbar,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'The Topbar sits above all page content and contains breadcrumbs and the user menu.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
    }),
  },
  args: {
    className: 'sage-topbar--hide', // For Storybook purposes only
    contentLeftDesktop: (
      <Breadcrumbs
        items={[
          {
            label: 'Page Title',
            href: 'http://example.com/1'
          },
          {
            label: 'Page Title',
            href: 'http://example.com/2'
          },
          {
            label: 'Page Title',
            href: 'http://example.com/3'
          }
        ]}
      />
    ),
    contentLeftMobile: (
      <Button
        color={Button.COLORS.SECONDARY}
        iconOnly={true}
        icon={SageTokens.ICONS.MENU}
      >
        Menu
      </Button>
    ),
    contentRight: (
      <>
        <Icon
          icon={Icon.ICONS.SEARCH}
        />
        <Avatar
          size="40px"
        />
      </>
    )
  }
};
const Template = (args) => <Topbar {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  (Story) => (
    <>
      <style>
        {`.sage-topbar--hide {
          visibility: hidden;
        }`}
      </style>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={showHideTopbar}
        data-hide-topbar="hide"
      >
        Show Topbar
      </Button>
      {Story()}
    </>
  )
];

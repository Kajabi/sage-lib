import React from 'react';
import { SageTokens } from '../configs';
import { selectArgs } from '../story-support/helpers';
import { Avatar } from '../Avatar';
import { Breadcrumbs } from '../Breadcrumbs';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Topbar } from './Topbar';

export default {
  title: 'Sage/Topbar',
  component: Topbar,
  argTypes: {
    ...selectArgs({
    }),
  },
  args: {
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

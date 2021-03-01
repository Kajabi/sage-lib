import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { EmptyState } from './EmptyState';

export default {
  title: 'Sage/EmptyState',
  component: EmptyState,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS
    })
  },
  args: {
    children: (
      <>
        <Button>Lorem ipsum</Button>
      </>
    ),
    compact: false,
    icon: SageTokens.ICONS.GEAR,
    text: 'Text Here',
    title: 'Title Here'
  }
};

const Template = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});

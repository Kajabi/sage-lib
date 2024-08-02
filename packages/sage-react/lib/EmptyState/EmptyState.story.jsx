import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { EmptyState } from './EmptyState';

export default {
  title: 'Sage/EmptyState',
  component: EmptyState,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'The Empty State is displayed for main application features that have never been interacted with before. The Empty State is also used for smaller features in the app that primarily focus on data entry and have no data to show.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      size: EmptyState.SIZES
    })
  },
  args: {
    actions: (
      <Button>Lorem ipsum</Button>
    ),
    icon: SageTokens.ICONS.GEAR,
    text: 'Text Here',
    title: 'Title Here'
  }
};

const Template = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});

export const CompactSize = Template.bind({});
CompactSize.args = {
  icon: null,
  graphic: (<img src="https://unsplash.it/2000/1100" alt="" />),
  size: EmptyState.SIZES.PAGE,
  text: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Elit arcu volutpat cursus ultricies ac, ultricies.
      Platea sed nibh molestie ut.
    </p>
  ),
  title: 'Create your first Email Campaign',
  titleTag: 'h1',
  children: null,
  actions: (
    <>
      <Button>Add Email Campaign</Button>
      <Button subtle={true} color={Button.COLORS.SECONDARY}>Link</Button>
    </>
  )
};

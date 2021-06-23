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
      icon: SageTokens.ICONS,
      scope: EmptyState.SCOPES
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

export const PageScope = Template.bind({});
PageScope.args = {
  icon: null,
  graphic: (<img src="//source.unsplash.com/random/530x500" alt="" />),
  scope: EmptyState.SCOPES.PAGE,
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
    <Button>Add Email Campaign</Button>
  )
};

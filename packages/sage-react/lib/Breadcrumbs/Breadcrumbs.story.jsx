import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Sage/Breadcrumbs',
  component: Breadcrumbs,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs provide a sense of where we are in the site structure with hyperlinks to previous areas in that structure. Our component also provides a specific "Back link" variation.',
      },
    },
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    icon: SageTokens.ICONS.CARET_LEFT,
    items: [
      {
        label: 'Back somewhere',
        href: '#back',
      }
    ]
  }
};
const Template = (args) => <Breadcrumbs {...args} />;

export const SingleItem = Template.bind({});

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: [
    {
      label: 'First place',
      href: '#first',
    },
    {
      label: 'Second place',
      href: '#second',
    },
    {
      label: 'Here',
      href: '#',
    }
  ]
};

export const ProgressStyle = Template.bind({});
ProgressStyle.args = {
  isProgressbar: true,
  items: [
    {
      label: 'First step',
      href: '#first',
    },
    {
      label: 'Second step',
      href: '#second',
      current: true,
    },
    {
      label: 'Their step',
      href: '#',
    }
  ]
};

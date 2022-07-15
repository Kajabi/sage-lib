import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Banner } from './Banner';

export default {
  title: 'Sage/Banner',
  component: Banner,
  argTypes: {
    ...selectArgs({
      type: Banner.TYPES
    }),
  },
  args: {
    active: true,
    dismissable: true,
    link: '#',
    text: 'Alert description text',
    type: Banner.TYPES.DEFAULT
  },
};

const Template = (args) => <Banner {...args} />;
export const Default = Template.bind({});

export const InlineBanner = Template.bind({});
InlineBanner.args = {
  bannerContext: 'sage-demo'
};

import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Banner } from './Banner';

export default {
  title: 'Sage/Banner',
  component: Banner,
  args: {
    active: true,
    bannerContext: "This is text",
    text: "This is text"
  },
};

const Template = (args) => <Banner {...args} />;
export const Default = Template.bind({});

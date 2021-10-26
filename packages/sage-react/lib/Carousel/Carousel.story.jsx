import React from 'react';
import { Carousel } from './Carousel';

export default {
  title: 'Sage/Carousel',
  component: Carousel,
  args: {
    options: 'Benzo',
  },
};
const Template = (args) => <Carousel {...args} />;
export const Default = Template.bind({});

import React from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Sage/Pagination',
  component: Pagination,
  argTypes: {},
  args: {
    itemsNoun: 'Cactus',
    itemsTotalCount: 505,
    currentPage: 1,
    // onClickPage: (num) => console.log('clicked', num),
    pageCount: 10,
    pageSize: 51,
    pageURLFn: (page) => `//example.com/${page}`,
  }
};
const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

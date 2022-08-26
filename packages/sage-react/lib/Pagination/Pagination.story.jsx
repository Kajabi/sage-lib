import React from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Sage/Pagination',
  component: Pagination,
  argTypes: {},
  args: {
    itemsNoun: 'Cactus',
    currentPage: 1,
    // onClickPage: (num) => console.log('clicked', num),
    pageCount: 12,
    pageURLFn: (page) => `//example.com/${page}`,
  }
};
const Template = (args) => <Pagination {...args} />;

export const FromPageCount = Template.bind({});

export const FromCalculatedPages = Template.bind({});
FromCalculatedPages.args = {
  pageSize: 50,
  itemsTotalCount: 505,
};

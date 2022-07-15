import React from 'react';
import { List } from './List';
import {
  sampleItems,
  sampleItemRenderer,
} from './story-helper';

export default {
  title: 'Sage/List',
  component: List,
  argTypes: {},
  args: {
    items: [],
  },
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
  itemRenderer: sampleItemRenderer,
};

export const SortableList = () => {
  const [items, setItems] = React.useState(sampleItems);
  return (
    <List
      items={items}
      itemRenderer={sampleItemRenderer}
      sortableConfigs={{ setList: setItems }}
    />
  );
};

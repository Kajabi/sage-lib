import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { List } from './List';
import {
  sampleItems,
  sampleItemRenderer,
} from './story-helper';

export default {
  title: 'Sage/List',
  component: List,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Set up neatly-formatted lists of content in bordered rows with some additional optional decorations.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      dragHandleType: List.DRAG_HANDLE_TYPES,
    }),
  },
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
      setList={setItems}
      sortable={true}
    />
  );
};

export const FullyDraggableSortableList = () => {
  const [items, setItems] = React.useState(sampleItems);
  return (
    <List
      dragHandleType={List.DRAG_HANDLE_TYPES.ROW}
      items={items}
      itemRenderer={sampleItemRenderer}
      setList={setItems}
      sortable={true}
    />
  );
};

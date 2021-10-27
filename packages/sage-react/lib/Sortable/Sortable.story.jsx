import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { SageTokens } from '../configs';
import { Sortable } from './Sortable';
import { SortableItemCustom } from './SortableItemCustom';

export default {
  title: 'Sage/Sortable',
  component: Sortable,
  subcomponents: {
    'Sortable.Item': Sortable.Item,
    'Sortable.ItemCustom': SortableItemCustom
  }
};

export const Default = (args) => {
  const [state, setState] = useState([
    {
      id: '1',
      title: 'Title 1',
      subtitle: 'Subtitle',
      actionItems: [
        <Button
          onClick={() => {}}
          color={Button.COLORS.SECONDARY}
          subtle={true}
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
        >
          Delete
        </Button>
      ],
    },
    {
      id: '2',
      title: 'Title 2',
      subtitle: 'Subtitle',
      actionItems: [
        <Button
          onClick={() => {}}
          color={Button.COLORS.SECONDARY}
          subtle={true}
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
        >
          Delete
        </Button>
      ],
    },
    {
      id: '3',
      title: 'Title 3',
      subtitle: 'Subtitle',
      actionItems: [
        <Button
          onClick={() => {}}
          color={Button.COLORS.SECONDARY}
          subtle={true}
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
        >
          Delete
        </Button>
      ],
    },
  ]);

  const renderItem = (item) => (
    <Sortable.Item
      key={item.id}
      title={item.title}
      subtitle={item.subtitle}
      actionItems={item.actionItems}
      type={args.type}
    />
  );

  return (
    <Grid container={Grid.CONTAINER_SIZES.MD}>
      <Sortable
        list={state}
        setList={setState}
        onEnd={() => {}}
        renderItem={renderItem}
      />
    </Grid>
  );
};
Default.args = {
  type: Sortable.Item.TYPES.CARD
};
Default.argTypes = {
  ...selectArgs({
    type: Sortable.Item.TYPES
  }),
};

const Template = (args) => <SortableItemCustom {...args} />;

export const CustomItem = Template.bind({});

CustomItem.args = {
  gridTemplate: "te",
  children: (
    <>
      <p>oh1</p>
      <p>oh2</p>
      <p>oh3</p>
    </>
  )
};

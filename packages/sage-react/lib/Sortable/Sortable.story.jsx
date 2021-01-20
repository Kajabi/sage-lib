import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { SageTokens } from '../configs';
import { Sortable } from './Sortable';

const SortableWithState = () => {
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
      type={select('Sortable Item Type', Sortable.Item.TYPES, Sortable.Item.TYPES.DEFAULT)}
    />
  );

  return (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Sortable
        list={state}
        setList={setState}
        onEnd={() => {}}
        renderItem={renderItem}
      />
    </Grid>
  );
};

storiesOf('Sage/Sortable', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Controlled Component Demo', () => <SortableWithState />);

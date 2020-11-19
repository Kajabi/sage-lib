import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Button from '../Button';
import Grid from '../Grid';
import Card from './Card';
import CardNotes from './CardNotes.md';

storiesOf('Sage/Card', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Card
        borderDashed={boolean('borderDashed', false)}
      >
        <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
        <p>
          Consectetur adipiscing elit. Etiam volutpat malesuada
          lacus nec tincidunt. Vestibulum eu massa sed nisi tempor
          pulvinar non eu libero. Proin mollis fringilla porta. Sed
          ac semper augue.
        </p>
        <Card.Footer>
          <Button color="secondary">Lorem ipsum</Button>
          <Button>Dolor sit</Button>
        </Card.Footer>
      </Card>
    </Grid>
  ), {
    notes: { markdown: CardNotes }
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Card, Loader } from 'common/components/Sage';
import { withKnobs, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';

storiesOf('Sage/Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.MODAL}>
      <Card>
        <Card.Body
          style={{
            height: '500px',
          }}
        >
          <Loader
            loading={boolean('Loading', true)}
            shape={options('Shape', Loader.SHAPES, Loader.SHAPES.BAR, { display: 'inline-radio' })}
            fillSpace={boolean('Fill space', true)}
          />
        </Card.Body>
      </Card>
    </Grid>
  ));

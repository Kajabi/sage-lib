import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Grid } from '../index';
import Loader  from './Loader';
import { withKnobs, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';

storiesOf('Sage/Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.MODAL}>
      <Card>
          <Loader
            loading={boolean('Loading', true)}
            shape={options('Shape', Loader.SHAPES, Loader.SHAPES.BAR, { display: 'inline-radio' })}
            fillSpace={boolean('Fill space', true)}
          />
      </Card>
    </Grid>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Card from '../Card';
import Grid from '../Grid';
import Loader  from './Loader';

storiesOf('Sage/Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.MODAL}>
      <Card>
          <Loader
            loading={boolean('Loading', true)}
            type={options('Type', Loader.TYPES, Loader.TYPES.BAR, { display: 'inline-radio' })}
            fillSpace={boolean('Fill space', true)}
          />
      </Card>
    </Grid>
  ));

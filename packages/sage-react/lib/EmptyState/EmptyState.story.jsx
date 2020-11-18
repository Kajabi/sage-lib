import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageTokens } from '../configs';
import Button from '../Button';
import Grid from '../Grid';
import EmptyState from './EmptyState';

storiesOf('Sage/EmptyState', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <EmptyState
        title={text('Title', 'Title Here')}
        text={text('Text', 'Text Here')}
        icon={select('Icon', Object.assign({ NONE: null }, SageTokens.ICONS), SageTokens.ICONS.GEAR)}
        compact={boolean('Compact', false)}
      >
        <Button>Lorem ipsum</Button>
      </EmptyState>
    </Grid>
  ));

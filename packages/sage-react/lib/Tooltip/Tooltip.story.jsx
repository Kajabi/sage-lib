import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Tooltip from './Tooltip';
import Button from '../Button';

storiesOf('Sage/Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{padding: 100}}>
      <Tooltip
        content={text('Content', 'Hi, I provide more context for this element!')}
        position={select('Position', Tooltip.POSITIONS, Tooltip.POSITIONS.DEFAULT)}
        theme={select('Themes', Tooltip.THEMES, Tooltip.THEMES.DEFAULT)}
        size={select('Sizes', Tooltip.SIZES, Tooltip.SIZES.DEFAULT)}
      >
        <Button>
          I inherit MouseEnter &amp; MouseLeave events 👋
        </Button>
      </Tooltip>
    </div>
  ));

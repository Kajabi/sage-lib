import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { Loader } from '../index';
import { withKnobs, boolean, optionsKnob as options } from '@storybook/addon-knobs';


storiesOf('Sage/Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div
      style={{
        width: '500px',
        height: '500px',
        border: '1px solid black',
        borderRadius: '4px',
      }}
    >
      <Loader
        loading={boolean('Loading', true)}
        shape={options('Shape', Loader.SHAPES, Loader.SHAPES.BAR, { display: 'inline-radio' })}
      />
    </div>
  ));

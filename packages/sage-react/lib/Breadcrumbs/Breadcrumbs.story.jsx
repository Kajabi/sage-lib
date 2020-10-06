import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { Breadcrumbs } from '../index';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Sage/Breadcrumbs', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Breadcrumbs
      items={[
        {
          label: 'Back somewhere',
          url: '#back',
        }
      ]}
    />
  ))
  .add('Multiple items', () => (
    <Breadcrumbs
      icon={null}
      items={[
        {
          label: 'First place',
          url: '#first',
        },
        {
          label: 'Second place',
          url: '#second',
        },
        {
          label: 'Here',
          url: '#',
        }
      ]}
    />
  ));

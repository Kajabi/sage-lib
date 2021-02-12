import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Breadcrumbs } from './Breadcrumbs';

storiesOf('Sage/Breadcrumbs', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Breadcrumbs
      items={[
        {
          label: 'Back somewhere',
          href: '#back',
        }
      ]}
    />
  ))
  .add('Multiple items', () => (
    <Breadcrumbs
      items={[
        {
          label: 'First place',
          href: '#first',
        },
        {
          label: 'Second place',
          href: '#second',
        },
        {
          label: 'Here',
          href: '#',
        }
      ]}
    />
  ))
  .add('Progressbar Style', () => (
    <Breadcrumbs
      isProgressbar={true}
      items={[
        {
          label: 'First step',
          href: '#first',
        },
        {
          label: 'Second step',
          href: '#second',
          current: true,
        },
        {
          label: 'Their step',
          href: '#',
        }
      ]}
    />
  ));

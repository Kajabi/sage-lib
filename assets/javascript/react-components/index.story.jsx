import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from './decorators';
import {
  PageHeading
} from './index';
import '../../stylesheets/system/index.scss';

storiesOf('Introduction', module)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div>
      <PageHeading breadcrumbs={[
        {
          label: 'Back',
          url: '#'
        }
      ]}>
        Hello, world!
      </PageHeading>
      <p>Hello, world</p>
    </div>
  ));

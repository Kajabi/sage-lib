import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { PageHeading, HelpLink } from '../index';
import { withKnobs, text } from '@storybook/addon-knobs';


storiesOf('Sage/PageHeading', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <PageHeading
      breadcrumbs={[
        {
          label: 'Back somewhere',
          url: '#back',
        }
      ]}
    >
      {text('Heading', 'Page heading goes here')}
      <HelpLink href="//example.com" target="_blank" referrer="no-referrer" />
    </PageHeading>
  ));

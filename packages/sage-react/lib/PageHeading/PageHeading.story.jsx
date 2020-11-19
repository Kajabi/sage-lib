import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import HelpLink from '../HelpLink';
import PageHeading from './PageHeading';

storiesOf('Sage/PageHeading', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <PageHeading
      breadcrumbs={[
        {
          label: 'Back somewhere',
          href: '#back',
        }
      ]}
    >
      {text('Heading', 'Page heading goes here')}
      <HelpLink href="//example.com" target="_blank" referrer="no-referrer" />
    </PageHeading>
  ));

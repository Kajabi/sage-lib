import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { HelpLink } from '../HelpLink';
import { centerXY } from '../story-support/decorators';
import { PageHeading } from './PageHeading';

storiesOf('Sage/PageHeading', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <PageHeading
      secondaryText={text('Secondary Text', 'Secondary text here')}
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

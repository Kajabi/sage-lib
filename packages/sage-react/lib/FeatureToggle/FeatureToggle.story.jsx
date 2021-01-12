import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import FeatureToggle  from './FeatureToggle';

storiesOf('Sage/Feature Toggle', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ width: '75%' }}>
      <FeatureToggle
        altText="Alt text here"
        description="Quickly see Segments & filter contacts with a consistent People list view."
        image=""
        linkLocation="#"
        linkText="Learn more"
        title="New People list view"
      />
    </div>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Checkbox } from '../Toggle';
import { ExpandableCard } from './ExpandableCard';

storiesOf('Sage/ExpandableCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ExpandableCard
      triggerLabel={text('Trigger Label', 'Expand')}
      bodyBordered={boolean('Body Border', false)}
    >
      <Checkbox
        checked={false}
        disabled={false}
        hasError={false}
        id="checkbox1-demo"
        label="Grant offers"
        name="checkbox1-demo"
      />
      <Checkbox
        checked={false}
        disabled={false}
        hasError={false}
        id="checkbox2-demo"
        label="Add tags"
        name="checkbox2-demo"
      />
      <Checkbox
        checked={false}
        disabled={false}
        hasError={false}
        id="checkbox3-demo"
        label="Subscribe to emails"
        name="checkbox3-demo"
      />
    </ExpandableCard>
  ));

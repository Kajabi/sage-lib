import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import IconCard from './IconCard';

storiesOf('Sage/Icon Card', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ marginTop: 50 }}>
      <IconCard
        color={select('Color', IconCard.COLORS, IconCard.COLORS.DRAFT)}
        icon={select('Icon', IconCard.ICONS, IconCard.ICONS.CHECK_CIRCLE)}
        size={select('Size', IconCard.SIZES)}
      />
    </div>
  ));

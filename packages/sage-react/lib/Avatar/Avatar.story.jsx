import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Avatar from './Avatar';

storiesOf('Sage/Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ marginTop: 50 }}>
      <Avatar
        color={select('Color', Avatar.COLORS, Avatar.COLORS.SAGE)}
        initials={text('Initials', 'QJ')}
      />
    </div>
  ));

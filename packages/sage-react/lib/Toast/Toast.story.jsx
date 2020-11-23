import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { centerX } from '../story-support/decorators';
import { SageTokens } from '../configs';
import Toast from './Toast';

storiesOf('Sage/Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(centerX)
  .add('Default', () => (
    <div style={{ marginTop: 50 }}>
      <Toast
        icon={SageTokens.ICONS.INFO_CIRCLE}
        isActive={boolean('Active', true)}
        text={text('Text', 'Hello, world')}
        color={select('Color', Toast.COLORS, Toast.COLORS.DEFAULT)}
      />
    </div>
  ));

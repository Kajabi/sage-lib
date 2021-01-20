import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Icon } from './Icon';

storiesOf('Sage/Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ marginTop: 50 }}>
      <Icon
        color={select('Color', Icon.COLORS, Icon.COLORS.CHARCOAL)}
        icon={select('Icon', Icon.ICONS, Icon.ICONS.CHECK_CIRCLE)}
        label={text('Label (not visible)', '')}
        size={select('Size', Icon.SIZES, Icon.SIZES.MD)}
      />
    </div>
  ));

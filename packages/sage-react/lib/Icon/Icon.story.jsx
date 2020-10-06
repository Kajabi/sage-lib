import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Icon } from '../index';

storiesOf('Sage/Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ marginTop: 50 }}>
      <Icon
        icon={select('Icon', Icon.ICONS, Icon.ICONS.CHECK_CIRCLE)}
        label={text('Label (not visible)', '')}
        size={select('Size', Icon.SIZES, Icon.SIZES.MD)}
      />
    </div>
  ));

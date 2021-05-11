import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean, number } from '@storybook/addon-knobs';
import { centerX } from '../story-support/decorators';
import { SageTokens } from '../configs';
import { Toast } from './Toast';

storiesOf('Sage/Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(centerX)
  .add('Default', () => (
    <div style={{ marginTop: 50 }}>
      <Toast
        icon={SageTokens.ICONS.INFO_CIRCLE}
        isActive={boolean('Active', true)}
        title={text('Title', 'Hello, world')}
        description={text('Description', 'Hello, world subtext')}
        timeout={number('Timeout', 3500)}
      />
    </div>
  ))
  .add('With Link', () => (
    <div style={{ marginTop: 50 }}>
      <Toast
        icon={SageTokens.ICONS.INFO_CIRCLE}
        isActive={boolean('Active', true)}
        title={text('Title', 'Congratulations on your success')}
        link={{ href: text('Link Href', 'http://kajabi.com'), text: text('Link Text', 'Go to next step') }}
        type={Toast.TYPES.LOADING}
        timeout={false}
      />
    </div>
  ));

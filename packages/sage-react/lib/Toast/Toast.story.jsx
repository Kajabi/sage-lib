import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
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
        color={select('Color', Toast.COLORS, Toast.COLORS.DEFAULT)}
      />
    </div>
  ))
  .add('Trigger Pattern', () => (
    <div style={{ marginTop: 50, maxWidth: 540 }}>
      <p className="t-sage-body">
        <strong>It is recommended to use the sage-system.js toast:</strong>
      </p>
      <code>Sage.toast.trigger()</code>
      <br />
      <br />
      <p className="t-sage-body">
        ...within Kajabi-Products React components. This allows flash messages triggered
        from our HTML/ERB, JSX, and non-React JS contexts to stack gracefully together.
        See the Rails toast documentation for more info on usage.
      </p>
    </div>
  ));

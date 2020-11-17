import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Search } from './Search';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';

const InputWithState = (rest) => {
  const [value, updateValue] = useState('');

  return (
    <Search
      placeholder={text('Placeholder', 'Find')}
      onChange={e => updateValue(e.target.value)}
      value={value}
      {...rest}
    />
  );
};

storiesOf('Sage/Search', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Controlled: Uncontained', () => <InputWithState contained={boolean('Contained', false)} />)
  .add('Controlled: Contained', () => <InputWithState contained={boolean('Contained', true)} />);

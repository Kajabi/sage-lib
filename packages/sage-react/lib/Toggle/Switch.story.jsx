import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Switch } from './Switch';

const SwitchWithState = () => {
  const [on, toggleOn] = useState(false);
  return (
    <div>
      <Switch
        checked={on}
        disabled={boolean('Disabled', false)}
        hasError={boolean('Has Error', false)}
        id="switch-demo"
        label={text('Label', 'Switch label')}
        message={text('Message', 'Subtext appears')}
        name="switch-demo"
        onChange={(val, isOn) => toggleOn(!isOn)}
        type={radios('Type', ['radio', 'checkbox'], 'radio')}
        value="Demo"
      />
    </div>
  );
};

const SwitchesWithState = ({ type }) => {
  const items = [
    {
      label: 'Option 1',
      value: 'option-1',
      checked: false,
    }, {
      label: 'Option 2',
      value: 'option-2',
      checked: false,
    }, {
      label: 'Option 3',
      value: 'option-3',
      checked: false,
    }, {
      label: 'Option 4',
      value: 'option-4',
      checked: false,
    }
  ];

  const [itemState, changeItemState] = useState(items);

  const onChange = (newValue) => {
    const stateItems = itemState.map(({ label, value, checked }) => {
      if (newValue === value) {
        checked = type === 'radio' ? true : !checked;
      } else if (type === 'radio') {
        checked = false;
      }

      return { label, value, checked };
    });

    changeItemState(stateItems);
  };

  return (
    <ul className="sage-list">
      {itemState.map((configs, i) => (
        <Switch
          id={`switch-${i}`}
          itemInList={true}
          key={i.toString()}
          name="group-1"
          onChange={onChange}
          type={type}
          {...configs}
        />
      ))}
    </ul>
  );
};

SwitchesWithState.propTypes = {
  type: PropTypes.string.isRequired,
};

storiesOf('Sage/Switch', module)
  .addDecorator(centerXY)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <SwitchWithState />
  ))
  .add('Multiples example', () => (
    <SwitchesWithState type={radios('Type', ['radio', 'checkbox'], 'radio')} />
  ));

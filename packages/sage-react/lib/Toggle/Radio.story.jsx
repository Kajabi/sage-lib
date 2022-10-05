import React, { useState } from 'react';
import { Radio } from './Radio';

export default {
  title: 'Sage/Radio',
  component: Radio,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Radio components provide users a way to select only one option from a list of two or more options.'
      },
    },
  },
  args: {
    label: 'Radio',
    id: 'radio-1',
    name: 'radio-1',
  },
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});

export const BorderedRadio = (args) => {
  const items = [
    {
      label: 'Option 1',
      value: 'option-1',
      checked: false,
    },
    {
      label: 'Option 2',
      value: 'option-2',
      checked: false,
    }
  ];

  const [itemState, changeItemState] = useState(items);

  const onChange = (newValue) => {
    const stateItems = itemState.map(({ label, value, checked }) => {
      checked = newValue === value;

      return { label, value, checked };
    });

    changeItemState(stateItems);
  };

  return (
    <ul className="sage-list">
      {itemState.map((configs, i) => (
        <Radio
          {...args}
          hasBorder={true}
          id={`check-${i}`}
          key={`check-${i.toString()}`}
          onChange={onChange}
          name="group-1"
          itemInList={true}
          customContent={(
            <p>hello world</p>
          )}
          {...configs}
        />
      ))}
    </ul>
  );
};

export const MultipleRadios = (args) => {
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
      checked = newValue === value;

      return { label, value, checked };
    });

    changeItemState(stateItems);
  };

  return (
    <ul className="sage-list">
      {itemState.map((configs, i) => (
        <Radio
          {...args}
          id={`check-${i}`}
          key={`check-${i.toString()}`}
          onChange={onChange}
          name="group-2"
          itemInList={true}
          customContent={(
            <p>hello world</p>
          )}
          {...configs}
        />
      ))}
    </ul>
  );
};

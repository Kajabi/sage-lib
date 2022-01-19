import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../story-support/decorators';
import { ControlList } from './ControlList';
import ControlListNotes from './ControlListNotes.md';

const CheckboxesWithState = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const onChange = (v) => {
    let newSelectedValues = [...selectedValues];
    if (selectedValues.includes(v)) {
      newSelectedValues = newSelectedValues.filter((value) => value !== v);
    } else {
      newSelectedValues.push(v);
    }
    setSelectedValues(newSelectedValues);
  };
  const items = [
    {
      id: 'checkbox-1',
      value: 'Red',
      label: 'Cras ut lectus ac dolor hendrerit venenatis.',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo est sit amet vehicula.',
    },
    {
      id: 'checkbox-2',
      value: 'Green',
      label: 'Cras ut lectus ac dolor hendrerit venenatis.',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo est sit amet vehicula.',
    },
    {
      id: 'checkbox-3',
      value: 'Blue',
      label: 'Cras ut lectus ac dolor hendrerit venenatis.',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo est sit amet vehicula.',
    },
  ];
  return (
    <ControlList>
      {items.map(({ id, value, label, subText }) => (
        <ControlList.Item
          onChangeInput={onChange}
          input={ControlList.Item.INPUT_TYPES.CHECKBOX}
          inputName="checkboxes"
          inputId={id}
          inputValue={value}
          checked={selectedValues.includes(value)}
        >
          <ControlList.ItemLabel htmlFor={id}>
            {label}
          </ControlList.ItemLabel>
          <ControlList.ItemSubtext>
            {subText}
          </ControlList.ItemSubtext>
        </ControlList.Item>
      ))}
    </ControlList>
  );
};
const RadiosWithState = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const onChange = (v) => {
    setSelectedValue(v);
  };
  const items = [
    {
      id: 'radio-1',
      value: 'Red',
      label: 'Cras ut lectus ac dolor hendrerit venenatis.',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo est sit amet vehicula.',
    },
    {
      id: 'radio-2',
      value: 'Green',
      label: 'Cras ut lectus ac dolor hendrerit venenatis.',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo est sit amet vehicula.',
    },
    {
      id: 'radio-3',
      value: 'Blue',
      label: 'Cras ut lectus ac dolor hendrerit venenatis.',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo est sit amet vehicula.',
    },
  ];
  return (
    <ControlList>
      {items.map(({ id, value, label, subText }) => (
        <ControlList.Item
          onChangeInput={onChange}
          input={ControlList.Item.INPUT_TYPES.RADIO}
          inputName="radios"
          inputId={id}
          inputValue={value}
          checked={selectedValue === value}
        >
          <ControlList.ItemLabel htmlFor={id}>
            {label}
          </ControlList.ItemLabel>
          <ControlList.ItemSubtext>
            {subText}
          </ControlList.ItemSubtext>
        </ControlList.Item>
      ))}
    </ControlList>
  );
};
storiesOf('Sage/Control List', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ maxWidth: '480px' }}>
      <ControlList>
        <ControlList.Item>
          <ControlList.ItemTitle>
            Cras ut lectus ac dolor hendrerit venenatis.
          </ControlList.ItemTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse lobortis commodo est sit amet vehicula.
          </p>
        </ControlList.Item>
        <ControlList.Item>
          <ControlList.ItemTitle>
            Cras ut lectus ac dolor hendrerit venenatis.
          </ControlList.ItemTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse lobortis commodo est sit amet vehicula.
          </p>
        </ControlList.Item>
        <ControlList.Item>
          <ControlList.ItemTitle>
            Cras ut lectus ac dolor hendrerit venenatis.
          </ControlList.ItemTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse lobortis commodo est sit amet vehicula.
          </p>
        </ControlList.Item>
      </ControlList>
    </div>
  ), {
    notes: { markdown: ControlListNotes },
  })
  .add('Radio List Example', () => (
    <div style={{ maxWidth: '480px' }}>
      <RadiosWithState />
    </div>
  ))
  .add('Checkbox List Example', () => (
    <div style={{ maxWidth: '480px' }}>
      <CheckboxesWithState />
    </div>
  ));

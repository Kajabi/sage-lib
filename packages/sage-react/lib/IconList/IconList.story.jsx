import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { IconList } from './IconList';
import IconListNotes from './IconListNotes.md';

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
    <IconList>
      {items.map(({ id, value, label, subText }) => (
        <IconList.Item
          onChangeInput={onChange}
          input={IconList.Item.INPUT_TYPES.CHECKBOX}
          inputName="checkboxes"
          inputId={id}
          inputValue={value}
          checked={selectedValues.includes(value)}
        >
          <IconList.ItemLabel htmlFor={id}>
            {label}
          </IconList.ItemLabel>
          <IconList.ItemSubtext>
            {subText}
          </IconList.ItemSubtext>
        </IconList.Item>
      ))}
    </IconList>
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
    <IconList>
      {items.map(({ id, value, label, subText }) => (
        <IconList.Item
          onChangeInput={onChange}
          input={IconList.Item.INPUT_TYPES.RADIO}
          inputName="radios"
          inputId={id}
          inputValue={value}
          checked={selectedValue === value}
        >
          <IconList.ItemLabel htmlFor={id}>
            {label}
          </IconList.ItemLabel>
          <IconList.ItemSubtext>
            {subText}
          </IconList.ItemSubtext>
        </IconList.Item>
      ))}
    </IconList>
  );
};
storiesOf('Sage/Icon List', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ maxWidth: '480px' }}>
      <IconList>
        <IconList.Item>
          <IconList.ItemTitle>
            Cras ut lectus ac dolor hendrerit venenatis.
          </IconList.ItemTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse lobortis commodo est sit amet vehicula.
          </p>
        </IconList.Item>
        <IconList.Item>
          <IconList.ItemTitle>
            Cras ut lectus ac dolor hendrerit venenatis.
          </IconList.ItemTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse lobortis commodo est sit amet vehicula.
          </p>
        </IconList.Item>
        <IconList.Item>
          <IconList.ItemTitle>
            Cras ut lectus ac dolor hendrerit venenatis.
          </IconList.ItemTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse lobortis commodo est sit amet vehicula.
          </p>
        </IconList.Item>
      </IconList>
    </div>
  ), {
    notes: { markdown: IconListNotes },
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

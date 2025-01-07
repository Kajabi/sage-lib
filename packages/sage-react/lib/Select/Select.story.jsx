import React, { useState } from 'react';
import { Select } from './Select';
import { Link } from '../Link';
import { Popover } from '../Popover';
import { SageClassnames } from '../configs';

export default {
  title: 'Sage/Select',
  component: Select,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'The form select presents a selectable menu of options. The options within the menu are represented by `<option>` elements.'
      },
    },
  },
  decorators: [(Story) => <div style={{ width: 400, margin: '0 auto' }}>{Story()}</div>],
  args: {
    label: 'Select',
    id: 'field-1',
    includeLabelInOptions: false,
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
    ],
    placeholder: 'Select an option',
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const SelectWithState = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithState.args = {
  id: 'field-2',
  label: 'Cool stuff',
  value: 'Option 2',
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ],
  placeholder: 'Choose...',
  kjbElementId: 'exampleSelectWithState',
};

export const DisabledSelectFieldWithOptionPreselected = (args) => <Select {...args} />;

DisabledSelectFieldWithOptionPreselected.args = {
  id: 'field-3',
  label: 'Choose wisely…',
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ],
  disabled: true,
  kjbElementId: 'exampleDisabledWithPreselectedOption',
  value: 'Option 3',
};

export const SelectWithOptionDisabled = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithOptionDisabled.args = {
  id: 'field-4',
  label: 'Select from the following:',
  options: [
    {
      label: 'Country',
      value: '',
      disabled: true,
    },
    'First option',
    'Third option',
    'Fourth option',
    'Fifth option',
  ],
  placeholder: 'Pick an option:',
  kjbElementId: 'exampleSelectWithOptionDisabled',
};

export const SelectWithHelpContentLink = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithHelpContentLink.args = {
  id: 'field-5',
  label: 'Choose an option:',
  options: [
    'First option',
    'Second option',
    'Third option',
  ],
  helpContent: (
    <Link href="https://help.kajabi.com" target="_blank" style={Link.COLORS.SECONDARY}>
      What&rsquo;s this?
    </Link>
  ),
  placeholder: 'Choose an option:',
  kjbElementId: 'exampleSelectWithHelpContentLink',
};

export const SelectWithHelpContentPopover = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithHelpContentPopover.args = {
  id: 'field-6',
  label: 'Select fruit:',
  options: [
    'Apple',
    'Banana',
    'Orange',
    'Peach',
    'Pineapple',
  ],
  helpContent: (
    <Popover
      active={false}
      iconOnly={false}
      label="Fruit allergies?"
      moreLinkText="Harvest schedule"
      moreLinkURL="https://help.kajabi.com"
      position={Popover.POSITIONS.LEFT}
    >
      <p className={SageClassnames.TYPE.BODY}>
        Incredibly helpful text goes here
      </p>
    </Popover>
  ),
  placeholder: 'Select fruit:'
};

export const SelectWithOptgroups = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithOptgroups.args = {
  id: 'field-7',
  label: 'Choose a sport...',
  value: 'nascar',
  options: [
    'Bowling',
    {
      groupLabel: 'Hand Sports',
      groupOptions: [
        {
          value: 'football',
          label: 'Football',
        },
        'Basketball',
      ],
    },
    {
      value: 'nascar',
      label: 'Nascar',
    },
    {
      groupLabel: 'Foot Sports',
      groupOptions: [
        'Soccer',
      ],
    },
  ],
  placeholder: 'Choose wisely…',
  kjbElementId: 'exampleSelectWithOptgroups',
};

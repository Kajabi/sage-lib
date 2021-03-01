import React, { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'Sage/Select',
  component: Select,
  decorators: [(Story) => <div style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}><Story /></div>],
  args: {
    label: 'Select',
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const SearchWithState = () => {
  const [value, updateValue] = useState('');
  return (
    <Select
      id="field-2"
      label='Choose...'
      options={[
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
      ]}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

// const SelectWithState = () => {
//   const [value, updateValue] = useState('');
//   return (
//     <Select
//       disabled={boolean('Disabled', false)}
//       hasError={boolean('Has an error', false)}
//       id="field-2"
//       label={text('Label', 'Choose...')}
//       message={text('Message', null)}
//       required={boolean('Required', false)}
//       options={[
//         'Option 1',
//         'Option 2',
//         'Option 3',
//         'Option 4',
//       ]}
//       value={value}
//       onChange={(evt) => updateValue(evt.target.value)}
//     />
//   );
// };

// storiesOf('Sage/Select', module)
//   .addDecorator(withKnobs)
//   .addDecorator(centerXY)
//   .add('Default', () => (
//     <div style={{ width: '300px' }}>
//       <SelectWithState />
//     </div>
//   ));

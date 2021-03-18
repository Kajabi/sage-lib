import React, { useState } from 'react';
import { Search } from './Search';

export default {
  title: 'Sage/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Find',
  value: ''
};

export const Contained = (args) => {
  const [value, setValue] = useState('');

  return (
    <>
      <Search
        {...args}
        onChange={(evt) => setValue(evt.target.value)}
        onClear={() => setValue('')}
        value={value}
      />
    </>
  );
};
Contained.args = {
  contained: true,
  placeholder: 'Search'
};

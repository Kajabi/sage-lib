import React, { useState } from 'react';
import { Search } from './Search';


export default {
  title: 'Sage/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'find',
  value: ''
}

export const Contained = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Search
        placeholder= 'Find'
        onChange={(evt) => setValue(evt.target.value)}
        onClear={() => setValue('')}
        value={value}
      />
    </>
  )
}

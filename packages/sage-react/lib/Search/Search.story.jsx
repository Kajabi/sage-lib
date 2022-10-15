import React, { useState } from 'react';
import { Search } from './Search';

export default {
  title: 'Sage/Search',
  component: Search,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A self-contained search form that can be used in isolation and inside of menus.'
      },
    },
  },
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Find',
  id: 'search_default',
  placeholder: 'Find',
  value: ''
};

export const ContainedWithLabelHidden = (args) => {
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
ContainedWithLabelHidden.args = {
  contained: true,
  hideLabel: true,
  label: 'Search',
  id: 'search_contained',
  placeholder: 'Search',
  value: ''
};

export const Disabled = Template.bind({});
Disabled.args = {
  contained: true,
  disabled: true,
  label: 'Search',
  id: 'search_disabled',
  placeholder: 'Search',
  value: ''
};

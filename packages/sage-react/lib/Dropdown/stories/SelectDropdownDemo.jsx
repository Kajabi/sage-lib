import React, { useState } from 'react';
import Button from '../../Button';
import SelectDropdown from '../SelectDropdown';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
import { sampleSelectItems } from './story-helper';

const SelectDropdownDemo = () => {
  const [resetToken, setResetToken] = useState(0);
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(sampleSelectItems);

  const resetSelection = () => {
    setResetToken(resetToken + 1);
  };

  const onClick = () => {
    const newItems = [...items];
    const nextId = newItems[newItems.length - 1].id;
    newItems.push({
      id: nextId + 1,
      label: newItem,
      payload: {
        label: newItem,
      },
    });
    // eslint-disable-next-line no-console
    console.log(newItems);
    setItems(newItems);
  };

  const onSearch = (terms) => {
    // eslint-disable-next-line no-console
    console.log('search in select', terms);
    setNewItem(terms);
  };

  return (
    <>
      <SelectDropdown
        items={items}
        onSearch={onSearch}
        onSelect={(data) => { /* eslint-disable-line no-unused-vars */
          // console.log('Selected item', data);
        }}
        resetToken={resetToken}
        searchable={true}
        searchPlaceholder="Search list"
        filterActions={(
          <Dropdown.Item
            color={DropdownItem.COLORS.PRIMARY}
            label={`Add new item: "${newItem}"`}
            onClick={onClick}
            payload={{ terms: newItem }}
          />
        )}
      />
      <Button color={Button.COLORS.PRIMARY} onClick={resetSelection}>Reset</Button>
    </>
  );
};

export default SelectDropdownDemo;

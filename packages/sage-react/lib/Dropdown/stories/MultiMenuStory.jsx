import React, { useState } from 'react';
import SelectDropdown from '../SelectDropdown';

const MultiMenuStory = () => {
  const defaultItems = [
    {
      id: 1,
      label: 'Option 1',
      payload: {
        id: 1,
        label: 'Option 1',
      }
    },
    {
      id: 2,
      label: 'Option 2',
      payload: {
        id: 2,
        label: 'Option 2',
      }
    },
    {
      id: 3,
      label: 'Option 3',
      payload: {
        id: 3,
        label: 'Option 3',
      }
    },
    {
      id: 4,
      label: 'Option 4',
      payload: {
        id: 4,
        label: 'Option 4',
      }
    },
    {
      id: 5,
      label: 'Option 5',
      payload: {
        id: 5,
        label: 'Option 5',
      }
    },
    {
      id: 6,
      label: 'Option 6',
      payload: {
        id: 6,
        label: 'Option 6',
      }
    },
  ];

  const [items, updateItems] = useState(defaultItems);

  const onSelect = (selectedItem) => {
    const newItems = items.map(({ id, label, isActive, payload }) => {
      if (id === selectedItem.id) {
        isActive = !isActive;
      }

      return {
        id,
        label,
        isActive,
        payload,
      };
    });

    updateItems(newItems);
  };

  return (
    <SelectDropdown
      allowMultiselect={true}
      closePanelOnExit={false}
      defaultLabel="Select one or more..."
      items={items}
      onSelect={onSelect}
    />
  );
};

export default MultiMenuStory;

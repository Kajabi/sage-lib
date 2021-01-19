import React from 'react';
import uuid from 'react-uuid';
import { Dropdown } from '../Dropdown';

const items = [
  {
    id: uuid(),
    isHeading: true,
    label: "Offers",
  },
  {
    id: uuid(),
    label: "Grant offer",
  },
  {
    id: uuid(),
    label: "Revoke offer",
  },
  {
    id: uuid(),
    label: "Emails",
    isHeading: true,
  },
  {
    id: uuid(),
    label: "Subscribe to Email Sequence",
  },
  {
    id: uuid(),
    label: "Unsubscribe from Email Sequence",
  },
  {
    id: uuid(),
    label: "Events",
    isHeading: true,
  },
  {
    id: uuid(),
    label: "Register to Event",
  },
  {
    id: uuid(),
    label: "Deregister from Event",
  },
  {
    id: uuid(),
    label: "Tags",
    isHeading: true,
  },
  {
    id: uuid(),
    label: "Add tag",
  },
  {
    id: uuid(),
    label: "Remove tag",
  },
  {
    borderBefore: true,
    icon: "upload",
    id: uuid(),
    label: "Export",
  },
  {
    icon: "remove-circle",
    id: uuid(),
    label: "Unsubscribe",
  },
  {
    borderBefore: true,
    icon: "trash",
    id: uuid(),
    color: Dropdown.ITEM_COLORS.DANGER,
    label: "Delete",
  }
];

export const BulkActionsStory = () => {
  return (
    <Dropdown label="Bulk Actions" contained={true}>
      <Dropdown.ItemList items={items} />
    </Dropdown>
  );
};

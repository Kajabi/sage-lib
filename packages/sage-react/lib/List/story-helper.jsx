import React from 'react';

export const sampleMoreActions = (id) => ({
  options: [
    {
      slug: 'duplicate',
      name: 'Duplicate',
    },
    {
      slug: 'archive',
      name: 'Archive',
    },
    {
      slug: 'stats',
      name: 'View stats',
    },
    {
      slug: 'delete',
      name: 'Delete permanently',
      style: 'danger',
    }
  ].map((action) => (
    {
      href: `#action/${action.slug}/${id}`,
      color: action.style || null,
      label: action.name,
    }
  ))
});

export const sampleItems = [
  {
    id: 1,
    name: 'Product lorem',
    moreActions: sampleMoreActions(1),
  },
  {
    id: 2,
    name: 'Product ipsum',
    moreActions: sampleMoreActions(2),
  },
  {
    id: 3,
    name: 'Product dolor sit',
    moreActions: sampleMoreActions(3),
  },
  {
    id: 4,
    name: 'Product amet',
    moreActions: sampleMoreActions(4),
  },
  {
    id: 5,
    name: 'Product vel aliquam',
    moreActions: sampleMoreActions(5),
  }
];

export const sampleItemRenderer = ({ id, name }) => (
  <>
    <h4>Item {name}</h4>
    <p>Item {id} specs</p>
  </>
);

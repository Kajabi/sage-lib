import React from 'react';
import uuid from 'react-uuid';
import { Label } from '../../Label';
import { SageTokens } from '../../configs';

export const mockProfile = {
  avatar_image: 'https://sage-design-system.kajabi.com/assets/avatar/court-642fef1e5f0a98ba7d35718ea1796983fc6d8e5a9acdc3fa77fc31e15646d141.png',
  email: 'court@kajabi.com',
  initials: 'CM',
  name: 'Court McFadzean',
  user_stats: [
    [
      {
        title: 'Lifetime value',
        data: '$230',
      },
      {
        title: 'Total offers',
        data: '3',
        link: { href: '#offers' },
      },
      {
        title: 'Total products',
        data: '6',
        link: { href: '#products' },
      },
    ],
    [
      {
        title: 'Last sign-in',
        data: 'Aug. 12, 2021',
      },
      {
        title: 'Total sign-in',
        data: '32',
      },
    ],
    [
      {
        title: 'Contact status',
        data: (
          <Label
            value="Member"
            color={Label.COLORS.INFO}
            icon={SageTokens.ICONS.CHECK_CIRCLE_FILLED}
          />
        ),
      },
      {
        title: 'Marketing status',
        data: 'Subscribed',
      },
      {
        title: 'Contact added',
        data: 'Jan. 23, 2021',
      },
      {
        title: 'Opt-in status',
        data: 'Unconfirmed',
      },
      {
        title: 'Affiliate referral',
        data: 'Abe Lincoln',
      },
    ]
  ],
  tags: ['2021', 'Hello', 'Summer', 'Holiday', 'Welcome', 'Tag', 'Tuesday']
};

export const mockProfileActions = [
  {
    href: '#edit-contact',
    icon: SageTokens.ICONS.PEN,
    label: 'Edit contact',
  },
  {
    href: '#reset-password',
    icon: SageTokens.ICONS.RESET_PASSWORD,
    label: 'Reset password',
  },
  {
    href: '#add-tag',
    icon: SageTokens.ICONS.TAG,
    label: 'Add tag',
  },
  {
    href: '#grant-offer',
    icon: SageTokens.ICONS.GRANT_OFFER,
    label: 'Grant offer',
  },
];

export const mockProfileMoreActions = [
  {
    id: uuid(),
    label: 'Change password',
    attributes: { href: '#change-password' },
  },
  {
    id: uuid(),
    label: 'Add a note',
    attributes: { href: '#add-a-note' },
  },
  {
    id: uuid(),
    label: 'Mute',
    attributes: { href: '#mute' },
  },
  {
    id: uuid(),
    label: 'Hide',
    attributes: { href: '#hide' },
  },
  {
    id: uuid(),
    label: 'Delete',
    attributes: { href: '#delete' },
    color: 'danger',
    borderBefore: true,
  }
];

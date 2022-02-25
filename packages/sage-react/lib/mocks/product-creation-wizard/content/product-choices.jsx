import React from 'react';
import { Icon, SageTokens } from '@kajabi/sage-react';

export const productChoices = [
  {
    alias: 'course',
    icon: SageTokens.ICONS.PEN,
    iconColor: Icon.CARD_COLORS.INFO,
    title: 'Course',
  },
  {
    alias: 'podcast',
    title: 'Podcast',
    icon: SageTokens.ICONS.PEN,
    iconColor: Icon.CARD_COLORS.DRAFT,
  },
  {
    alias: 'community',
    icon: SageTokens.ICONS.PEN,
    iconColor: Icon.CARD_COLORS.PUBLISHED,
    title: 'Community',
  },
  {
    alias: 'coaching',
    icon: SageTokens.ICONS.PEN,
    iconColor: Icon.CARD_COLORS.DANGER,
    title: 'Coaching',
  }
];

export const productChoiceDetails = {
  coaching: {
    title: 'Coaching',
    body: `
      TBD  
    `,
    leftFeatures: [
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'TBD'
      },
    ],
    rightFeatures: [
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'TBD'
      },
    ]
  },
  community: {
    title: 'Community',
    body: `
      TBD  
    `,
    leftFeatures: [
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'TBD'
      },
    ],
    rightFeatures: [
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'TBD'
      },
    ]
  },
  course: {
    title: 'Course',
    body: `
      Turn your knowledge into a world-class learning experience.
      Build a course that helps you connect with your audience and grow your business.
    `,
    leftFeatures: [
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'Video content'
      },
      {
        icon: SageTokens.ICONS.MICROPHONE,
        label: 'Audio content'
      },
      {
        icon: SageTokens.ICONS.FILE,
        label: 'Text posts'
      },
      {
        icon: SageTokens.ICONS.ASSESSMENT,
        label: 'Quizzes and surveys'
      },
    ],
    rightFeatures: [
      {
        icon: SageTokens.ICONS.USER_STAR,
        label: 'Membership data'
      },
      {
        icon: SageTokens.ICONS.DOWNLOAD,
        label: 'Exclusive downloads'
      },
    ]
  },
  podcast: {
    title: 'Podcast',
    body: `
      TBD  
    `,
    leftFeatures: [
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'TBD'
      },
    ],
    rightFeatures: [
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'TBD'
      },
    ]
  },
};

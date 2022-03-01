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
    title: 'Coaching program',
    body: `
      Share your knowledge to help others achieve their goals.
      Book one-on-one sessions with clients, track their progress, and more.  
    `,
    leftFeatures: [
      {
        icon: SageTokens.ICONS.SCREEN_SHARE_ON,
        label: 'Live video conferencing'
      },
      {
        icon: SageTokens.ICONS.CALENDAR_DATE,
        label: 'Calendar integrations'
      },
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        label: 'Video content'
      },
      {
        icon: SageTokens.ICONS.MICROPHONE,
        label: 'Audio content'
      },
    ],
    rightFeatures: [
      {
        icon: SageTokens.ICONS.DOWNLOAD,
        label: 'Exclusive downloads'
      },
      {
        icon: SageTokens.ICONS.FILE,
        label: 'Shared notes'
      },
    ]
  },
  community: {
    title: 'Community',
    body: `
      Build an online space for your audience to share common interests and interact with each other.  
    `,
    leftFeatures: [
      {
        icon: SageTokens.ICONS.COMMENT,
        label: 'Discussion topics'
      },
      {
        icon: SageTokens.ICONS.URL,
        label: 'Links and resources'
      },
      {
        icon: SageTokens.ICONS.USERS,
        label: 'Membership area'
      },
      {
        icon: SageTokens.ICONS.BELL,
        label: 'Member activity notifications'
      },
    ],
    rightFeatures: [
      {
        icon: SageTokens.ICONS.ROUND_DOLLAR,
        label: 'Paid access'
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
      Create and publish episodes, distribute to all major listening apps,
      and monetize your podcast — all from your dashboard.  
    `,
    leftFeatures: [
      {
        icon: SageTokens.ICONS.UPLOAD,
        label: 'Import podcasts'
      },
      {
        icon: SageTokens.ICONS.MICROPHONE,
        label: 'Audio content'
      },
      {
        icon: SageTokens.ICONS.WORLD,
        label: 'Podcast distribution'
      },
      {
        icon: SageTokens.ICONS.HOME,
        label: 'Podcast homepage'
      },
    ],
    rightFeatures: [
      {
        icon: SageTokens.ICONS.CHART,
        label: 'Analytics'
      },
      {
        icon: SageTokens.ICONS.ROUND_DOLLAR,
        label: 'Paid feeds'
      },
    ]
  },
};

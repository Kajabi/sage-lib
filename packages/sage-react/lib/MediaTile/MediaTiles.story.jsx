import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { MediaTiles } from './MediaTiles';

const actionsDropdownItems = [
  {
    id: '1',
    label: 'One item',
  },
  {
    id: '2',
    label: 'Two item',
  },
  {
    id: '3',
    label: 'Three item',
  }
];

const commonChildren = (
  <p>
    Amet, consectetur adipiscing elit.
    In quis ante tristique, posuere arcu id, lobortis ex.
    Quisque mattis sapien et augue elementum.
    Vitae euismod justo tristique.
  </p>
);

const commonTileLink = {
  href: '//example.com',
  rel: 'noopener noreferrer',
  target: '_blank',
};

export default {
  title: 'Sage/Media Tiles',
  component: MediaTiles,
  argTypes: {
    ...selectArgs({}),
  },
  args: {
    items: [
      {
        title: "Lorem Ipsum Dolor Sit",
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src="//source.unsplash.com/random/800x600?1" alt="" />
        ),
        tileLink: commonTileLink,
      },
      {
        title: "Lorem Ipsum Dolor Sit",
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src="//source.unsplash.com/random/800x600?2" alt="" />
        ),
        tileLink: commonTileLink,
      },
      {
        title: "Lorem Ipsum Dolor Sit",
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src="//source.unsplash.com/random/800x600?3" alt="" />
        ),
        tileLink: commonTileLink,
      },
      {
        title: "Lorem Ipsum Dolor Sit",
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src="//source.unsplash.com/random/800x600?4" alt="" />
        ),
        tileLink: commonTileLink,
      },
    ],
  },
};

const Template = (args) => <MediaTiles {...args} />;
export const Default = Template.bind({});

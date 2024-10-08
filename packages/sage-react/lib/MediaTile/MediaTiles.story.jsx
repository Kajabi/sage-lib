import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { MediaTiles } from './MediaTiles';
import placeholderImg from '../../public/CardPlaceholderLarge.png';

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
  rel: 'noopener',
  target: '_blank',
};

export default {
  title: 'Sage/Media Tiles',
  component: MediaTiles,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Easily display a tile or set of tiles that showcase products, templates, or other media-based content.'
      },
    },
  },
  argTypes: {
    ...selectArgs({}),
  },
  args: {
    items: [
      {
        title: 'Lorem Ipsum Dolor Sit',
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src={placeholderImg} alt="" />
        ),
        tileLink: commonTileLink,
      },
      {
        title: 'Lorem Ipsum Dolor Sit',
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src={placeholderImg} alt="" />
        ),
        tileLink: commonTileLink,
      },
      {
        title: 'Lorem Ipsum Dolor Sit',
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src={placeholderImg} alt="" />
        ),
        tileLink: commonTileLink,
      },
      {
        title: 'Lorem Ipsum Dolor Sit',
        actionsCustom: null,
        actionsDropdownItems,
        children: commonChildren,
        footer: null,
        media: (
          <img src={placeholderImg} alt="" />
        ),
        tileLink: commonTileLink,
      },
    ],
  },
};

const Template = (args) => <MediaTiles {...args} />;
export const Default = Template.bind({});

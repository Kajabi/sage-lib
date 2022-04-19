import React from 'react';
import { SageTokens } from '../configs';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { MediaTile } from './MediaTile';

export default {
  title: 'Sage/Media Tile',
  component: MediaTile,
  argTypes: {
    ...selectArgs({}),
  },
  args: {
    title: 'Lorem Ipsum Dolor Sit',
    actionsCustom: null,
    actionsDropdownItems: [
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
    ],
    children: (
      <p>
        Amet, consectetur adipiscing elit.
        In quis ante tristique, posuere arcu id, lobortis ex.
        Quisque mattis sapien et augue elementum.
        Vitae euismod justo tristique.
      </p>
    ),
    caption: (
      <p>
        Suspendisse euismod elit fringilla urna pulvinar ullamcorper.
        Nam in risus velit.
        Maecenas bibendum quis metus id placerat.
      </p>
    ),
    footer: null,
    media: (
      <img src="//source.unsplash.com/random/800x600" alt="" />
    ),
    tileLink: {
      href: '//example.com',
      rel: 'noopener',
      target: '_blank',
    },
  }
};

const Template = (args) => <MediaTile {...args} />;
export const Default = Template.bind({});

export const KitchenSink = Template.bind({});
KitchenSink.args = {
  title: 'Lorem Ipsum Dolor Sit',
  actionsCustom: (
    <Badge value="Published" color={Badge.COLORS.PUBLISHED} />
  ),
  footer: (
    <Button
      color={Button.COLORS.PRIMARY}
      icon={SageTokens.ICONS.ARROW_RIGHT}
      iconPosition={Button.ICON_POSITIONS.RIGHT}
      subtle={true}
    >
      Learn more
    </Button>
  ),
  mediaConfigs: {
    aspectRatio: 1.8,
    backgroundColor: SageTokens.COLOR_PALETTE.SAGE_100,
    padded: true,
  },
  tileLink: null,
};

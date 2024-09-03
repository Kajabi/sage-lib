import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageClassnames, SageTokens } from '../configs';
import { Button, Label, Property } from '..';
import { Frame } from './Frame';

import placeholderImg from '../../public/CardPlaceholderLarge.png';

export default {
  title: 'Sage/Frame',
  component: Frame,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'For building compound micro-layouts.'
      },
    },
  },
  args: {
    align: null,
    background: null,
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce dignissim sed odio sit amet blandit.
          Ut vitae sagittis metus.
        </p>
        <Button color={Button.COLORS.PRIMARY}>Lets go</Button>
      </>
    ),
    border: null,
    borderRadius: null,
    direction: null,
    gap: null,
    padding: null,
    preset: null,
    width: null,
  },
  argTypes: {
    ...selectArgs({
      align: Frame.ALIGNMENTS,
      background: SageTokens.COLOR_SLIDERS,
      border: Frame.BORDERS,
      borderRadius: Frame.BORDER_RADII,
      direction: Frame.DIRECTIONS,
      gap: Frame.GAPS,
      padding: Frame.PADDINGS,
      preset: Frame.PRESETS,
      width: Frame.WIDTHS,
    }),
  },
};

const Template = (args) => <Frame {...args} />;
export const Default = Template.bind({});

export const SimpleStack = () => (
  <Frame gap={Frame.GAPS.XS}>
    <Property icon={SageTokens.ICONS.USER}>Galinti Marcus</Property>
    <Property icon={SageTokens.ICONS.MAIL}>galinti@example.com</Property>
    <Property icon={SageTokens.ICONS.STAR}>Member since 2022</Property>
  </Frame>
);

export const SimpleRow = () => (
  <Frame direction={Frame.DIRECTIONS.HORIZONTAL}>
    <Property icon={SageTokens.ICONS.USER}>Galinti Marcus</Property>
    <Property icon={SageTokens.ICONS.MAIL}>galinti@example.com</Property>
    <Property icon={SageTokens.ICONS.STAR}>Member since 2022</Property>
  </Frame>
);

export const BorderedBox = () => (
  <Frame
    border={Frame.BORDERS.DEFAULT}
    borderRadius={Frame.BORDER_RADII.MD}
    padding={Frame.PADDINGS.MD}
  >
    <Property icon={SageTokens.ICONS.USER}>Galinti Marcus</Property>
    <Property icon={SageTokens.ICONS.MAIL}>galinti@example.com</Property>
    <Property icon={SageTokens.ICONS.STAR}>Member since 2022</Property>
  </Frame>
);

export const BoxShadow = () => (
  <Frame
    borderRadius={Frame.BORDER_RADII.MD}
    boxShadow={Frame.BOX_SHADOWS[100]}
    padding={Frame.PADDINGS.MD}
  >
    <Property icon={SageTokens.ICONS.USER}>Galinti Marcus</Property>
    <Property icon={SageTokens.ICONS.MAIL}>galinti@example.com</Property>
    <Property icon={SageTokens.ICONS.STAR}>Member since 2022</Property>
  </Frame>
);

export const NestingFrames = () => (
  <Frame
    border={Frame.BORDERS.DEFAULT}
    borderRadius={Frame.BORDER_RADII.MD}
    padding={Frame.PADDINGS.MD}
    direction={Frame.DIRECTIONS.HORIZONTAL}
    align={Frame.ALIGNMENTS.CENTER_LEFT}
  >
    <Frame width="160px">
      <img src={placeholderImg} alt="" style={{ maxWidth: '100%' }} />
    </Frame>
    <Frame width="flex" gap={Frame.GAPS.XS}>
      <Frame gap={Frame.GAPS.NONE}>
        <h4 className={SageClassnames.TYPE.HEADING_3}>
          Lorem ipsum dolor sit
        </h4>
        <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
          Consectetur adipiscing elit
        </p>
      </Frame>
      <p className={SageClassnames.TYPE.BODY}>
        Aliquam rhoncus ipsum massa, a tempor arcu elementum sed.
        Nullam tortor odio, ullamcorper vel elementum in, luctus et tortor.
        Nullam tellus orci, euismod ultricies odio ut, volutpat fermentum diam.
        Proin rhoncus sit amet felis nec iaculis.
        Fusce aliquet augue eget semper ultrices.
      </p>
    </Frame>
  </Frame>
);

export const FlexibleWidthRatios = () => (
  <Frame direction={Frame.DIRECTIONS.HORIZONTAL}>
    <Frame
      widthRatio="2"
      border={Frame.BORDERS.DEFAULT}
      borderRadius={Frame.BORDER_RADII.MD}
      padding={Frame.PADDINGS.MD}
    >
      <p>Ratio of &ldquo;2&rdquo;; This side is 2 / 3</p>
    </Frame>
    <Frame
      widthRatio="1"
      border={Frame.BORDERS.DEFAULT}
      borderRadius={Frame.BORDER_RADII.MD}
      padding={Frame.PADDINGS.MD}
    >
      <p>Ratio of &ldquo;1&rdquo;; This side is 1 / 3</p>
    </Frame>
  </Frame>
);

export const EquallySizedFlexingItems = () => (
  <Frame direction={Frame.DIRECTIONS.HORIZONTAL}>
    <Frame
      width_ratio="1"
      border={Frame.BORDERS.DEFAULT}
      borderRadius={Frame.BORDER_RADII.MD}
      padding={Frame.PADDINGS.MD}
    >
      <p>This element is 1 / 3, flexing with the other items.</p>
    </Frame>
    <Frame
      width_ratio="1"
      border={Frame.BORDERS.DEFAULT}
      borderRadius={Frame.BORDER_RADII.MD}
      padding={Frame.PADDINGS.MD}
    >
      <p>This element is 1 / 3, flexing with the other items.</p>
    </Frame>
    <Frame
      width_ratio="1"
      border={Frame.BORDERS.DEFAULT}
      borderRadius={Frame.BORDER_RADII.MD}
      padding={Frame.PADDINGS.MD}
    >
      <p>This element is 1 / 3, flexing with the other items.</p>
    </Frame>
  </Frame>
);

export const CustomBlock = () => (
  <Frame
    align={Frame.ALIGNMENTS.CENTER_SPREAD}
    background="#fae2d4"
    borderRadius={Frame.BORDER_RADII.LG}
    direction={Frame.DIRECTIONS.HORIZONTAL}
    padding={Frame.PADDINGS.MD}
  >
    <Frame>
      <Frame gap={Frame.GAPS.XS}>
        <h3>Learn more about products</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam faucibus massa vel sem ullamcorper tincidunt.
          Vestibulum pulvinar placerat elit, et rutrum ipsum elementum ac.
        </p>
      </Frame>
      <Button.Group gap={Button.Group.GAP_OPTIONS.SM}>
        <Button
          color={Button.COLORS.PRIMARY}
        >
          Do it!
        </Button>
        <Button
          color={Button.COLORS.SECONDARY}
          subtle={true}
        >
          Cancel
        </Button>
      </Button.Group>
    </Frame>
    <Frame width="104px">
      <img src={placeholderImg} alt="" style={{ maxWidth: '100%' }} />
    </Frame>
  </Frame>
);

export const StatBox = () => (
  <Frame
    align={Frame.ALIGNMENTS.START_SPREAD}
    border={Frame.BORDERS.DEFAULT}
    borderRadius={Frame.BORDER_RADII.SM}
    direction={Frame.DIRECTIONS.HORIZONTAL}
    padding={Frame.PADDINGS.SM}
    width="360px"
  >
    <Frame gap={Frame.GAPS.SM}>
      <Frame gap={Frame.GAPS.NONE}>
        <h3 className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
          All payments
        </h3>
        <Frame
          align={Frame.ALIGNMENTS.BASELINE_LEFT}
          direction={Frame.DIRECTIONS.HORIZONTAL}
          gap={Frame.GAPS.XS}
          tag="p"
        >
          <b className={SageClassnames.TYPE.HEADING_5}>
            40
          </b>
          <span className={`${SageClassnames.TYPE.BODY_XSMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
            successful payments
          </span>
        </Frame>
      </Frame>
      <Button
        icon={SageTokens.ICONS.ARROW_RIGHT}
        iconPosition={Button.ICON_POSITIONS.RIGHT}
        color={Button.COLORS.PRIMARY}
        subtle={true}
      >
        View all
      </Button>
    </Frame>
    <Frame
      align={Frame.ALIGNMENTS.TOP_RIGHT}
      gap={Frame.GAPS.XS}
      width="120px"
    >
      <Label
        color={Label.COLORS.PUBLISHED}
        value="33%"
        icon={SageTokens.ICONS.UP_SMALL}
      />
      <div>
        [chart]
      </div>
    </Frame>
  </Frame>
);

import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageClassnames, SageTokens } from '../configs';
import { Button, Label } from '..';
import { Frame } from './Frame';

export default {
  title: 'Sage/Frame',
  component: Frame,
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

export const SampleBox = () => (
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
          raised={false}
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
      <img src="//source.unsplash.com/random/104x104" alt="" />
    </Frame>
  </Frame>
);

export const SampleStatBox = () => (
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

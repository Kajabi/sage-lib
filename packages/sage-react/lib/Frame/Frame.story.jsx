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
    preset="card-lg"
    background="#fae2d4"
    border="none"
  >
    <Frame preset="stack">
      <h3>Learn more about products</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam faucibus massa vel sem ullamcorper tincidunt.
        Vestibulum pulvinar placerat elit, et rutrum ipsum elementum ac.
      </p>
    </Frame>
    <Frame preset="row-spread">
      <Button
        color={Button.COLORS.PRIMARY}
        raised={false}
      >
        Do it!
      </Button>
      <Frame preset="row-hug">
        <Button
          color={Button.COLORS.SECONDARY}
          subtle={true}
        >
          Cancel
        </Button>
        <Button
          color={Button.COLORS.SECONDARY}
          raised={false}
        >
          Options
        </Button>
      </Frame>
    </Frame>
  </Frame>
);

export const SampleStatBox = () => (
  <Frame preset="card" width="357px">
    <Frame preset="row" align="top-spread">
      <Frame preset="stack" width="flex">
        <Frame preset="block">
          <h3 className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
            All payments
          </h3>
          <Frame
            tag="p"
            align="baseline-left"
            direction="horizontal"
            gap="xs"
          >
            <b className={SageClassnames.TYPE.HEADING_5}>
              40
            </b>
            <span className={`${SageClassnames.TYPE.BODY_XSMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
              successfull paymemtns
            </span>
          </Frame>
        </Frame>
        <Button
          icon="arrow-right"
          iconPosition="right"
          color="primary"
          subtle={true}
        >
          View all
        </Button>
      </Frame>
      <Frame
        align="top-right"
        direction="vertical"
        gap="xs"
        width="120px"
      >
        <Label
          color="published"
          value="33%"
          icon="up-small"
        />
        <div>
          [chart]
        </div>
      </Frame>
    </Frame>
  </Frame>
);

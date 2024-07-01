import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens, SageClassnames } from '../configs';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Card } from './Card';
import { Frame } from '../Frame';

export default {
  title: 'Sage/Card',
  component: Card,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A versatile smaller container for grouping content within panels.',
      },
    },
  },
  subcomponents: {
    'Card.Header': Card.Header,
    'Card.Title': Card.Title,
    'Card.Block': Card.Block,
    'Card.Stack': Card.Stack,
    'Card.List': Card.List,
    'Card.Row': Card.Row,
    'Card.Divider': Card.Divider,
    'Card.Figure': Card.Figure,
    'Card.Footer': Card.Footer,
    'Card.Highlight': Card.Highlight
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Grid container={Grid.CONTAINER_SIZES.MD}>
        <Story />
      </Grid>
    </>
  )
];

Default.args = {
  children: (
    <>
      <Card.Title>Block (with Sage Type)</Card.Title>
      <Card.Block sageType={true}>
        <p>
          Consectetur adipiscing elit.
          Etiam volutpat malesuada lacus nec tincidunt.
          Vestibulum eu massa sed nisi tempor pulvinar non eu libero.
          Proin mollis fringilla porta. Sed ac semper augue.
        </p>
        <p>
          Vestibulum eu massa sed nisi tempor pulvinar non eu libero.
          Proin mollis fringilla porta. Sed ac semper augue.
        </p>
      </Card.Block>
      <Card.Title>Stack</Card.Title>
      <Card.Stack>
        <p>
          Consectetur adipiscing elit.
        </p>
        <p>
          Etiam volutpat malesuada lacus nec tincidunt.
        </p>
        <p>
          Vestibulum eu massa sed nisi tempor pulvinar non eu libero.
        </p>
        <p>
          Proin mollis fringilla porta. Sed ac semper augue.
        </p>
      </Card.Stack>
      <Card.Title>List</Card.Title>
      <Card.List
        items={[
          (
            <>
              <Icon icon={Icon.ICONS.CHECK_CIRCLE} color={SageTokens.COLOR_SLIDERS.SAGE} />
              <p>Consectetur adipiscing elit.</p>
            </>
          ),
          (
            <>
              <Icon icon={Icon.ICONS.CHECK_CIRCLE} color={SageTokens.COLOR_SLIDERS.SAGE} />
              <p>Etiam volutpat malesuada lacus nec tincidunt.</p>
            </>
          ),
          (
            <>
              <Icon icon={Icon.ICONS.CHECK_CIRCLE} color={SageTokens.COLOR_SLIDERS.SAGE} />
              <p>Vestibulum eu massa sed nisi tempor pulvinar non eu libero.</p>
            </>
          ),
          (
            <>
              <Icon icon={Icon.ICONS.CHECK_CIRCLE} color={SageTokens.COLOR_SLIDERS.SAGE} />
              <p>Proin mollis fringilla porta. Sed ac semper augue.</p>
            </>
          ),
        ]}
        wrapItems={true}
        itemGridTemplate={SageTokens.GRID_TEMPLATES.ET}
      />
      <Card.Title>Row</Card.Title>
      <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ETE}>
        <Icon icon={SageTokens.ICONS.DROP} />
        <p>Drip slowly -- $8.99</p>
        <Button
          color={Button.COLORS.PRIMARY}
          icon={SageTokens.ICONS.CART}
          subtle={true}
        >
          Buy now
        </Button>
      </Card.Row>
      <Card.Title>Figure (with side bleed)</Card.Title>
      <Card.Figure bleed={Card.Figure.BLEED_OPTIONS.SIDES}>
        <img src="//source.unsplash.com/800x500" alt="" />
      </Card.Figure>
      <Card.Title>Divider</Card.Title>
      <Card.Divider fullBleed={true} />
      <Card.Footer>
        <Button color="secondary">Lorem ipsum</Button>
        <Button>Dolor sit</Button>
      </Card.Footer>
    </>
  ),
};

export const CardWithHeader = (args) => (
  <Card>
    <Card.Header background={args.background}>
      <Frame padding={Frame.PADDINGS.SM} direction={Frame.DIRECTIONS.HORIZONTAL}>
        <Frame direction={Frame.DIRECTIONS.VERTICAL} gap={Frame.GAPS.NONE}>
          <p className={SageClassnames.TYPE.BODY_SMALL}>November 7, 2018</p>
          <p className={SageClassnames.TYPE.BODY_SMALL_BOLD}>Order #12931820</p>
        </Frame>
        <Frame direction={Frame.DIRECTIONS.VERTICAL} gap={Frame.GAPS.NONE}>
          <p className={SageClassnames.TYPE.BODY_SMALL}>Total</p>
          <p className={SageClassnames.TYPE.BODY_SMALL_BOLD}>$623.98</p>
        </Frame>
      </Frame>
    </Card.Header>
    <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ETE}>
      <p>Main content goes here.</p>
    </Card.Row>
    <Card.Footer>
      <Button color="secondary">Lorem ipsum</Button>
      <Button>Dolor sit</Button>
    </Card.Footer>
  </Card>
);

CardWithHeader.args = {
  background: SageTokens.COLOR_SLIDERS.GREY_200,
};

CardWithHeader.argTypes = {
  ...selectArgs({
    background: SageTokens.COLOR_SLIDERS
  }),
};

export const InteractiveCard = () => (
  <Card interactive={true}>
    <Link className="sage-card__link--primary" href="//example.com">
      Sage Card Link
    </Link>
  </Card>
);

export const CardHighlight = (args) => (
  <Grid container={Grid.CONTAINER_SIZES.XS}>
    <Card>
      <p>Magical content goes here</p>
      <Card.Highlight
        color={args.color}
        customColor={args.customColor}
        position={args.position}
        value={args.value}
      />
    </Card>
  </Grid>
);

CardHighlight.args = {
  color: Card.Highlight.COLORS.PRIMARY,
  position: Card.Highlight.POSITIONS.LEFT,
};

CardHighlight.argTypes = {
  ...selectArgs({
    color: CardHighlight.COLORS,
    position: CardHighlight.POSITIONS,
  }),
};

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { Card } from './Card';
import CardNotes from './CardNotes.md';

storiesOf('Sage/Card', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Card
        borderDashed={boolean('borderDashed', false)}
      >
        <Card.Title>Card Title</Card.Title>
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
      </Card>
    </Grid>
  ), {
    notes: { markdown: CardNotes }
  });

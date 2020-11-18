import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, radios } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageClassnames, SageTokens } from '../configs';
import Button from '../Button';
import Grid from '../Grid';
import Label from '../Label';
import Icon from '../Icon';
import Panel from './Panel';
import PanelNotes from './PanelNotes.md';
import PanelListNotes from './PanelListNotes.md';
import PanelRowNotes from './PanelRowNotes.md';
import PanelStackNotes from './PanelStackNotes.md';
import PanelTilesNotes from './PanelTilesNotes.md';
import PanelFigureNotes from './PanelFigureNotes.md';

storiesOf('Sage/Panel', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Panel loading={boolean('Loading', false)}>
        <Panel.Header title="Panel header">
          <Button
            color={Button.COLORS.SECONDARY}
            icon={SageTokens.ICONS.INFO_CIRCLE}
            iconOnly={true}
            subtle={true}
          >
            Learn more
          </Button>
        </Panel.Header>
        <Panel.Block sageType={true}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis sit amet libero lacus.
            Aenean ullamcorper faucibus purus a ultrices.
            Curabitur congue dolor eu condimentum scelerisque.
            Morbi at elit nunc. Nulla tellus elit, tincidunt non cursus sit amet,
            dapibus eu enim.
          </p>
          <p>
            Duis gravida lobortis libero, et suscipit ligula pharetra in.
            Morbi convallis felis massa, ac pharetra sem vestibulum volutpat.
            Mauris id varius lacus, vel pharetra dui.
          </p>
        </Panel.Block>
        <Panel.Footer>
          <Button color={Button.COLORS.SECONDARY}>Cancel</Button>
          <Button color={Button.COLORS.PRIMARY}>Save</Button>
        </Panel.Footer>
      </Panel>
    </Grid>
  ), {
    notes: { markdown: PanelNotes }
  })
  .add('Panel Stack', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Panel>
        <Panel.Header title="Panel with a stack" />
        <Panel.Stack>
          <Icon icon={Icon.ICONS.CIRCLE_1} size={Icon.SIZES['2XL']} />
          <p className={SageClassnames.TYPE.BODY}>
            Each item is spaced appropriately. Lorem ipsum dolor sit amet
          </p>
          <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
            Aliquam malesuada leo
          </p>
        </Panel.Stack>
      </Panel>
    </Grid>
  ), {
    notes: { markdown: PanelStackNotes }
  })
  .add('Panel List', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Panel>
        <Panel.Header title="Panel with a list" />
        <Panel.List
          itemGridTemplate={SageTokens.GRID_TEMPLATES.ETE}
          items={[
            (
              <>
                <Icon icon={Icon.ICONS.CHECK_CIRCLE} />
                <Panel.Block>
                  <p className={SageClassnames.TYPE.BODY}>
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                    Aliquam malesuada leo
                  </p>
                </Panel.Block>
                <Button
                  icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
                  subtle={true}
                  iconOnly={true}
                  color={Button.COLORS.SECONDARY}
                >
                  Options
                </Button>
              </>
            ),
            (
              <>
                <Icon icon={Icon.ICONS.CHECK_CIRCLE} />
                <Panel.Block>
                  <p className={SageClassnames.TYPE.BODY}>
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                    Aliquam malesuada leo
                  </p>
                </Panel.Block>
                <Button
                  icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
                  subtle={true}
                  iconOnly={true}
                  color={Button.COLORS.SECONDARY}
                >
                  Options
                </Button>
              </>
            ),
            (
              <>
                <Icon icon={Icon.ICONS.CHECK_CIRCLE} />
                <Panel.Block>
                  <p className={SageClassnames.TYPE.BODY}>
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                    Aliquam malesuada leo
                  </p>
                </Panel.Block>
                <Button
                  icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
                  subtle={true}
                  iconOnly={true}
                  color={Button.COLORS.SECONDARY}
                >
                  Options
                </Button>
              </>
            )
          ]}
        />
      </Panel>
    </Grid>
  ), {
    notes: { markdown: PanelListNotes }
  })
  .add('Panel Tiles', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Panel>
        <Panel.Header title="Panel with tiles" />
        <Panel.Subheader title="Tiles provided through props" />
        <Panel.Tiles
          tilesInRow={select('Tiles in row', [2, 3, 4], 3)}
          wrapTiles={false}
          tiles={[
            (
              <Panel.Block>
                <Icon icon={Icon.ICONS.CIRCLE_1} size={Icon.SIZES['2XL']} />
                <p className={SageClassnames.TYPE.BODY}>
                  Lorem ipsum dolor sit amet
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                  Aliquam malesuada leo
                </p>
              </Panel.Block>
            ),
            (
              <Panel.Block>
                <Icon icon={Icon.ICONS.CIRCLE_2} size={Icon.SIZES['2XL']} />
                <p className={SageClassnames.TYPE.BODY}>
                  Consectetur adipiscing elit
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                  Ut posuere tortor sodales
                </p>
              </Panel.Block>
            ),
            (
              <Panel.Block>
                <Icon icon={Icon.ICONS.CIRCLE_3} size={Icon.SIZES['2XL']} />
                <p className={SageClassnames.TYPE.BODY}>
                  Nunc quis arcu maximus
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                  Praesent id urna vel arcu
                </p>
              </Panel.Block>
            ),
            (
              <Panel.Block>
                <Icon icon={Icon.ICONS.CIRCLE_4} size={Icon.SIZES['2XL']} />
                <p className={SageClassnames.TYPE.BODY}>
                  Sed at ipsum pretium
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                  Ornare convallis vitae sit
                </p>
              </Panel.Block>
            ),
            (
              <Panel.Block>
                <Icon icon={Icon.ICONS.CIRCLE_5} size={Icon.SIZES['2XL']} />
                <p className={SageClassnames.TYPE.BODY}>
                  Eleifend ligula
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                  Finibus est
                </p>
              </Panel.Block>
            ),
            (
              <Panel.Block>
                <Icon icon={Icon.ICONS.CIRCLE_6} size={Icon.SIZES['2XL']} />
                <p className={SageClassnames.TYPE.BODY}>
                  Mauris in orci ac odio
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                  Aliquet tristique nec et mi
                </p>
              </Panel.Block>
            ),
            (
              <Panel.Block>
                <Icon icon={Icon.ICONS.CIRCLE_7} size={Icon.SIZES['2XL']} />
                <p className={SageClassnames.TYPE.BODY}>
                  Proin nec tellus varius
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
                  Molestie libero vel
                </p>
              </Panel.Block>
            )
          ]}
        />
        <Panel.Divider />
        <Panel.Subheader title="Tiles provided through as children" />
        <Panel.Tiles tilesInRow={select('Tiles in row', [2, 3, 4], 3)}>
          <Panel.Block>
            <Icon icon={Icon.ICONS.CIRCLE_1} size={Icon.SIZES['2XL']} />
            <p className={SageClassnames.TYPE.BODY}>
              Lorem ipsum dolor sit amet
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Aliquam malesuada leo
            </p>
          </Panel.Block>
          <Panel.Block>
            <Icon icon={Icon.ICONS.CIRCLE_2} size={Icon.SIZES['2XL']} />
            <p className={SageClassnames.TYPE.BODY}>
              Consectetur adipiscing elit
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Ut posuere tortor sodales
            </p>
          </Panel.Block>
          <Panel.Block>
            <Icon icon={Icon.ICONS.CIRCLE_3} size={Icon.SIZES['2XL']} />
            <p className={SageClassnames.TYPE.BODY}>
              Nunc quis arcu maximus
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Praesent id urna vel arcu
            </p>
          </Panel.Block>
          <Panel.Block>
            <Icon icon={Icon.ICONS.CIRCLE_4} size={Icon.SIZES['2XL']} />
            <p className={SageClassnames.TYPE.BODY}>
              Sed at ipsum pretium
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Ornare convallis vitae sit
            </p>
          </Panel.Block>
          <Panel.Block>
            <Icon icon={Icon.ICONS.CIRCLE_5} size={Icon.SIZES['2XL']} />
            <p className={SageClassnames.TYPE.BODY}>
              Eleifend ligula
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Finibus est
            </p>
          </Panel.Block>
          <Panel.Block>
            <Icon icon={Icon.ICONS.CIRCLE_6} size={Icon.SIZES['2XL']} />
            <p className={SageClassnames.TYPE.BODY}>
              Mauris in orci ac odio
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Aliquet tristique nec et mi
            </p>
          </Panel.Block>
          <Panel.Block>
            <Icon icon={Icon.ICONS.CIRCLE_7} size={Icon.SIZES['2XL']} />
            <p className={SageClassnames.TYPE.BODY}>
              Proin nec tellus varius
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Molestie libero vel
            </p>
          </Panel.Block>
        </Panel.Tiles>
      </Panel>
    </Grid>
  ), {
    notes: { markdown: PanelTilesNotes }
  })
  .add('Panel Row', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <Panel>
        <Panel.Header title="Panel with a row" />
        <Panel.Row gridTemplate={SageTokens.GRID_TEMPLATES.ETI}>
          <Icon
            icon={Icon.ICONS.CHECK_CIRCLE}
            color={SageTokens.COLOR_SLIDERS.SAGE}
            iconOnly={true}
          />
          <Panel.Block>
            <p className={SageClassnames.TYPE.BODY}>
              Proin nec tellus varius
            </p>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_400}`}>
              Molestie libero vel
            </p>
          </Panel.Block>
          <Label color={Label.COLORS.WARNING}>In progress</Label>
          <Button
            icon={SageTokens.ICONS.PEN}
            subtle={true}
            iconOnly={true}
            color={Button.COLORS.PRIMARY}
          >
            Options
          </Button>
        </Panel.Row>
      </Panel>
    </Grid>
  ), {
    notes: { markdown: PanelRowNotes }
  })
  .add('Panel Figure', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.SPACERS.MD_BOTTOM}`}>
        <strong>Note:</strong> Normally there would be other content along with the figure.
        Content was ommitted here in order to demonstrate the bleed options through Knobs.
        Observe the space that remains inside the panel outside the figure with each setting.
      </p>
      <Panel>
        <Panel.Figure bleed={radios('Bleed direction', Panel.Figure.BLEED_OPTIONS, Panel.Figure.BLEED_OPTIONS.NONE)}>
          <img src="//source.unsplash.com/800x500" alt="" />
        </Panel.Figure>
      </Panel>
    </Grid>
  ), {
    notes: { markdown: PanelFigureNotes }
  });

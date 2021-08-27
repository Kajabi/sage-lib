import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { OptionsDropdown } from '../Dropdown';
import { SageClassnames, SageTokens } from '../configs';
import { Panel } from './Panel';

export default {
  title: 'Sage/Panel',
  component: Panel,
  subcomponents: {
    'Panel.Header': Panel.Header,
    'Panel.Block': Panel.Block,
    'Panel.Divider': Panel.Divider,
    'Panel.Footer': Panel.Footer,
    'Panel.Stack': Panel.Stack,
    'Panel.List': Panel.List,
    'Panel.Subheader': Panel.Subheader,
    'Panel.Subtext': Panel.Subtext,
    'Panel.Tiles': Panel.Tiles,
    'Panel.Figure': Panel.Figure,
    'Panel.Row': Panel.Row
  },
};

export const Default = (args) => (
  <Grid container={Grid.CONTAINER_SIZES.LG}>
    <Panel {...args}>
      <Panel.Header title="Panel header">
        <OptionsDropdown
          align="right"
          options={[
            {
              id: '1',
              label: 'Option 1',
            },
            {
              id: '2',
              label: 'Option 2',
            },
            {
              id: '3',
              label: 'Option 3',
            }
          ]}
          panelMaxWidth="240px"
        />
        <Panel.Subtext>
          <p>All kinds of awesome, wonderful content can go in here! <a href="https://example.com">Learn more</a></p>
        </Panel.Subtext>
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
);

export const PanelStack = (args) => (
  <Grid container={Grid.CONTAINER_SIZES.SM}>
    <Panel {...args}>
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
);

export const PanelList = (args) => (
  <Grid container={Grid.CONTAINER_SIZES.MD}>
    <Panel {...args}>
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
);

export const PanelTiles = ({ tiles, ...args }) => (
  <Grid container={Grid.CONTAINER_SIZES.XL}>
    <Panel {...args}>
      <Panel.Header title="Panel with tiles" />
      <Panel.Subheader title="Tiles provided through props" />
      <Panel.Tiles
        tilesInRow={tiles}
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
      <Panel.Tiles tilesInRow={tiles}>
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
);
PanelTiles.args = {
  tiles: 3,
};
// fully custom ArgsTable
PanelTiles.argTypes = {
  tiles: {
    control: {
      type: 'select',
      options: [2, 3, 4]
    }
  }
};
PanelTiles.defaultProps = {
  tiles: null
};
PanelTiles.propTypes = {
  tiles: PropTypes.number
};

export const PanelRow = (args) => (
  <Grid container={Grid.CONTAINER_SIZES.LG}>
    <Panel {...args}>
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
        <Label color={Label.COLORS.WARNING} value="In progress" />
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
);

export const PanelFigure = ({ bleedDirection, ...args }) => (
  <Grid container={Grid.CONTAINER_SIZES.LG}>
    <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.SPACERS.MD_BOTTOM}`}>
      <strong>Note:</strong> Normally there would be other content along with the figure.
      Content was ommitted here in order to demonstrate the bleed options through Knobs.
      Observe the space that remains inside the panel outside the figure with each setting.
    </p>
    <Panel {...args}>
      <Panel.Figure bleed={bleedDirection}>
        <img src="//source.unsplash.com/800x500" alt="" />
      </Panel.Figure>
    </Panel>
  </Grid>
);
PanelFigure.args = {
  bleedDirection: 3,
};
// fully custom ArgsTable
PanelFigure.argTypes = {
  bleedDirection: {
    control: {
      type: 'radio',
      options: Panel.Figure.BLEED_OPTIONS
    }
  }
};
PanelFigure.defaultProps = {
  bleedDirection: null
};
PanelFigure.propTypes = {
  bleedDirection: PropTypes.oneOf(Object.values(Panel.Figure.BLEED_OPTIONS))
};

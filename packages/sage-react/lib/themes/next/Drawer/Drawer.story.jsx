import React from 'react';
import { Drawer } from './Drawer';
import { SageClassnames, SageTokens } from '../configs';
import { Button } from '../Button';
import { Grid } from '../Grid';

const drawerChildren = (
  <>
    <h3 className={`${SageClassnames.TYPE.HEADING_4} ${SageClassnames.TYPE_COLORS.CHARCOAL_500}`}>
      Drawer
    </h3>
    <p>👋  Any content can go here.</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Esse quam assumenda a ut, architecto rerum vel quisquam,
      repellendus nemo quo saepe at voluptatem eveniet earum
      laudantium nostrum quibusdam?
      Repellendus, repudiandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eum in deleniti doloribus sequi ipsam unde pariatur perspiciatis
      ex molestias temporibus accusantium fuga debitis,
      voluptates hic eos ab perferendis ad quo.
    </p>
  </>
);

export default {
  title: 'Sage/Drawer',
  component: Drawer,
  args: {
    active: true,
    children: drawerChildren,
    customHeader: (
      <Button
        color={Button.COLORS.SECONDARY}
        subtle={true}
        icon={SageTokens.ICONS.EXPAND}
        iconPosition={Button.ICON_POSITIONS.LEFT}
      >
        Open full profile
      </Button>
    ),
    showClose: true,
  }
};

const Template = (args) => <Drawer {...args} />;

export const Default = Template.bind({});

export const WiredExample = () => {
  const [drawerContents, setDrawerContents] = React.useState(null);
  const [drawerActive, setDrawerActive] = React.useState(true);
  const [drawerExpanded, setDrawerExpanded] = React.useState(false);

  const drawerCustomHeader = (
    <Button
      color={Button.COLORS.SECONDARY}
      onClick={() => setDrawerExpanded(!drawerExpanded)}
      subtle={true}
      icon={SageTokens.ICONS.EXPAND}
      iconPosition={Button.ICON_POSITIONS.LEFT}
    >
      {drawerExpanded ? 'Collapse profile' : 'Open full profile'}
    </Button>
  );

  const drawerExpandedChildren = (
    <>
      <h3 className={`${SageClassnames.TYPE.HEADING_4} ${SageClassnames.TYPE_COLORS.CHARCOAL_500}`}>
        Drawer
      </h3>
      <p>👋  Any content can go here.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Esse quam assumenda a ut, architecto rerum vel quisquam,
        repellendus nemo quo saepe at voluptatem eveniet earum
        laudantium nostrum quibusdam?
        Repellendus, repudiandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eum in deleniti doloribus sequi ipsam unde pariatur perspiciatis
        ex molestias temporibus accusantium fuga debitis,
        voluptates hic eos ab perferendis ad quo.
      </p>
    </>
  );

  const respondToDrawerExpandChange = (status) => {
    switch (status) {
      case Drawer.END_EXPAND:
        setDrawerContents((
          <Grid withRow>
            <Grid.Col size={4}>
              {drawerChildren}
            </Grid.Col>
            <Grid.Col size={8}>
              {drawerExpandedChildren}
            </Grid.Col>
          </Grid>
        ));
        break;
      default:
        setDrawerContents((
          <div style={{ maxWidth: '345px' }}>
            {drawerChildren}
          </div>
        ));
        break;
    }
  };

  return (
    <>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={() => setDrawerActive(!drawerActive)}
      >
        Toggle drawer
      </Button>
      <Drawer
        active={drawerActive}
        expanded={drawerExpanded}
        onExit={() => setDrawerActive(false)}
        onExpandChange={respondToDrawerExpandChange}
        customHeader={drawerCustomHeader}
        disableBackgroundDismiss={!drawerExpanded}
      >
        {drawerContents}
      </Drawer>
    </>
  );
};

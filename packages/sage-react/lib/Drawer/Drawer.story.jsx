import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { SageClassnames, SageTokens } from '../configs';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Grid } from '../Grid';

const drawerChildren = (
  <>
    <h3 className={`${SageClassnames.TYPE.HEADING_4} ${SageClassnames.TYPE_COLORS.GREY_950}`}>
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

const drawerFooter = (
  <>
    <input
      placeholder="Ask anything or get started with a suggestion..."
    />
    <Button
      color={Button.COLORS.PRIMARY}
      icon={Icon.ICONS.SEND_MESSAGE}
      iconOnly
    >
      Set
    </Button>
  </>
);

export default {
  title: 'Sage/Drawer',
  component: Drawer,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A drawer is a component that animates in, over content, to provide more information. A drawer is composed of a header and a content area.'
      },
    },
  },
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

export const Compact = Template.bind({});
Compact.args = {
  active: true,
  children: drawerChildren,
  compact: true,
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
  footer: drawerFooter,
  showClose: true,
  customWidth: 425
};

export const WiredExample = () => {
  const [drawerContents, setDrawerContents] = React.useState(null);
  const [drawerActive, setDrawerActive] = React.useState(true);
  const [drawerExpanded, setDrawerExpanded] = React.useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
      <h3 className={`${SageClassnames.TYPE.HEADING_4} ${SageClassnames.TYPE_COLORS.GREY_950}`}>
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

  const onExit = () => {
    setIsClosing(true);
    setTimeout(() => {
      setDrawerActive(false);
      setIsClosing(false);
    }, 1000);
  };

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
        isClosing={isClosing}
        onExit={onExit}
        onExpandChange={respondToDrawerExpandChange}
        customHeader={drawerCustomHeader}
        disableBackgroundDismiss={!drawerExpanded}
      >
        {drawerContents}
      </Drawer>
    </>
  );
};

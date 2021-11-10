import React from 'react';
import { Drawer } from './Drawer';
import { SageClassnames, SageTokens } from '../configs';
import { Button } from '../Button';

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

const drawerCustomHeader = (
  <Button
    color={Button.COLORS.SECONDARY}
    subtle={true}
    icon={SageTokens.ICONS.EXPAND}
    iconPosition={Button.ICON_POSITIONS.LEFT}
  >
    Open full profile
  </Button>
);

export default {
  title: 'Sage/Drawer',
  component: Drawer,
  args: {
    active: true,
    children: drawerChildren,
    customHeader: drawerCustomHeader,
    showClose: true,
  }
};
const Template = (args) => <Drawer {...args} />;

export const Default = Template.bind({});

export const WiredExample = () => {
  const [drawerActive, setDrawerActive] = React.useState(false);

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
        onExit={() => setDrawerActive(false)}
        customHeader={drawerCustomHeader}
      >
        {drawerChildren}
      </Drawer>
    </>
  );
};

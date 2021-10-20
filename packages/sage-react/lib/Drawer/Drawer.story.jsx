import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { SageTokens, SageClassnames } from '../configs';
import { disableArgs } from '../story-support/helpers';
import { Drawer } from './Drawer';

const DefaultBody = ({ onExit }) => (
  <>
    <Drawer.Header
      icon={{ color: Icon.COLORS.RED_300, name: Icon.ICONS.DANGER }}
      title="Example Sage Drawer"
      subheader="Example subheader"
      popover={{
        title: 'Example popover title',
        link: '#',
        linkText: 'Learn more about drawer',
        content: 'Popover content'
      }}
      aside={(
        <Button
          color={Button.COLORS.SECONDARY}
          iconOnly={true}
          icon={SageTokens.ICONS.REMOVE}
          onClick={onExit}
          subtle={true}
        >
          Menu
        </Button>
      )}
    />
    <Drawer.Body>
      <p className={SageClassnames.TYPE.BODY}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </Drawer.Body>
    <Drawer.Footer>
      <Drawer.FooterAside>
        <Button
          color={Button.COLORS.SECONDARY}
          onClick={onExit}
          subtle={true}
        >
          Close Drawer
        </Button>
      </Drawer.FooterAside>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.CHECK}
        iconPosition={Button.ICON_POSITIONS.LEFT}
        onClick={onExit}
      >
        Take An Action
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        icon={SageTokens.ICONS.CHECK}
        iconPosition={Button.ICON_POSITIONS.LEFT}
        onClick={onExit}
      >
        Take An Action
      </Button>
    </Drawer.Footer>
  </>
);

DefaultBody.propTypes = {
  onExit: PropTypes.func.isRequired
};

export default {
  title: 'Sage/Drawer',
  component: Drawer,
  subcomponents: {
    'Drawer.Header': Drawer.Header,
    'Drawer.HeaderAside': Drawer.HeaderAside,
    'Drawer.Body': Drawer.Body,
    'Drawer.Footer': Drawer.Footer,
    'Drawer.FooterAside': Drawer.FooterAside,
  },
  args: {
    animation: Drawer.ANIMATION_PRESETS,
  },
  argTypes: {
    ...disableArgs(['children', 'onExit']),
  },
};

const Template = (args) => {
  const [selfActive, setSelfActive] = useState(args.active);

  const handleExit = () => {
    setSelfActive(false);
  };

  useEffect(() => {
    setSelfActive(args.active);
  }, [args.active]);

  return (
    <Drawer {...args} onExit={handleExit} active={selfActive}>
      <DefaultBody onExit={handleExit} />
    </Drawer>
  );
};
export const Default = Template.bind({});

Default.decorators = [
  (Story) => (
    <>
      <p>Note: Use the Controls to toggle the drawer active property to see it.</p>
      <Story />
    </>
  )
];

export const Wired = (args) => {
  const [active, setActive] = useState(false);

  const onExit = () => {
    setActive(false);
  };

  return (
    <>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={() => setActive(true)}
      >
        Take An Action
      </Button>
      <Drawer
        active={active}
        animation={{ direction: Drawer.ANIMATION_DIRECTIONS.BOTTOM }}
        onExit={onExit}
        {...args}
      >
        <DefaultBody onExit={onExit} />
      </Drawer>
    </>
  );
};

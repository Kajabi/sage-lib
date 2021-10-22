import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { SageTokens, SageClassnames } from '../configs';
import { disableArgs } from '../story-support/helpers';
import { Modal } from './Modal';

const DefaultBody = ({ onExit }) => (
  <>
    <Modal.Header
      icon={{ color: Icon.COLORS.RED_300, name: Icon.ICONS.DANGER }}
      title="Example Sage Modal"
      popover={{
        title: 'Example popover title',
        link: '#',
        linkText: 'Learn more about modals',
        content: 'Popover content'
      }}
      actions={(
        <>
          <Button
            color={Button.COLORS.PRIMARY}
            onClick={onExit}
            subtle={true}
          >
            Save changes
          </Button>
          <Button
            color={Button.COLORS.PRIMARY}
            onClick={onExit}
          >
            Publish changes
          </Button>
        </>
      )}
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
    <Modal.Body>
      <p className={SageClassnames.TYPE.BODY}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Modal.FooterAside>
        <Button
          color={Button.COLORS.SECONDARY}
          onClick={onExit}
          subtle={true}
        >
          Close Modal
        </Button>
      </Modal.FooterAside>
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
    </Modal.Footer>
  </>
);

DefaultBody.propTypes = {
  onExit: PropTypes.func.isRequired
};

export default {
  title: 'Sage/Modal',
  component: Modal,
  subcomponents: {
    'Modal.Header': Modal.Header,
    'Modal.HeaderAside': Modal.HeaderAside,
    'Modal.Body': Modal.Body,
    'Modal.Footer': Modal.Footer,
    'Modal.FooterAside': Modal.FooterAside,
  },
  args: {
    animation: Modal.ANIMATION_PRESETS,
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
    <Modal {...args} onExit={handleExit} active={selfActive}>
      <DefaultBody onExit={handleExit} />
    </Modal>
  );
};
export const Default = Template.bind({});

Default.decorators = [
  (Story) => (
    <>
      <p>Note: Use the Controls to toggle the modal&lsquo;s Active property to see it.</p>
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
      <Modal
        active={active}
        animation={{ direction: Modal.ANIMATION_DIRECTIONS.BOTTOM }}
        onExit={onExit}
        {...args}
      >
        <DefaultBody onExit={onExit} />
      </Modal>
    </>
  );
};

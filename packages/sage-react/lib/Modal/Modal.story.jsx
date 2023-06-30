import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ProgressBar } from '../ProgressBar';
import { Icon } from '../Icon';
import { SageTokens, SageClassnames } from '../configs';
import { disableArgs, selectArgs } from '../story-support/helpers';
import { Modal } from './Modal';

const DefaultBody = ({ onExit }) => (
  <>
    <Modal.Header
      icon={{ color: Icon.COLORS.RED_200, name: Icon.ICONS.DANGER }}
      title="Modal header"
      popover={{
        title: 'Example popover title',
        link: '#',
        linkText: 'Learn more about modals',
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
    <Modal.Body gap={Modal.Body.GAP_OPTIONS.LG}>
      <p className={SageClassnames.TYPE.BODY}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
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
          Link
        </Button>
      </Modal.FooterAside>
      <Button
        color={Button.COLORS.SECONDARY}
        onClick={onExit}
      >
        Cancel
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={onExit}
      >
        Confirm
      </Button>
    </Modal.Footer>
  </>
);

DefaultBody.propTypes = {
  onExit: PropTypes.func.isRequired
};

const FullscreenBody = ({ onExit }) => (
  <>
    <Modal.Header
      title="Modal header"
      popover={{
        title: 'Example popover title',
        link: '#',
        linkText: 'Learn more about modals',
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
      headerProgressBar={(
        <ProgressBar
          color={ProgressBar.COLORS.PRIMARY_200}
          label="Cloning product"
          percent="44"
        />
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
      <Button
        color={Button.COLORS.SECONDARY}
        onClick={onExit}
      >
        Cancel
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={onExit}
      >
        Confirm
      </Button>
    </Modal.Footer>
  </>
);

FullscreenBody.propTypes = {
  onExit: PropTypes.func.isRequired
};

export default {
  title: 'Sage/Modal',
  component: Modal,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Sage modal.'
      },
    },
  },
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
    ...selectArgs({
      size: Modal.SIZES,
    })
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
      {Story()}
    </>
  )
];

export const Wired = (args) => {
  const [active, setActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // The onExit will need to be modified per instance to include this functionality
  // in order to contain the fade out effect
  const onExit = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActive(false);
      setIsClosing(false);
    }, 1000);
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
        {...args}
        active={active}
        isClosing={isClosing}
        animation={false}
        onExit={onExit}
      >
        <DefaultBody onExit={onExit} />
      </Modal>
    </>
  );
};

export const Fullscreen = (args) => {
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
        fullScreen={true}
        onExit={onExit}
        {...args}
      >
        <FullscreenBody onExit={onExit} />
      </Modal>
    </>
  );
};

export const ModalWithCustomSize = (args) => {
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
        size={Modal.SIZES.LG}
        {...args}
      >
        <DefaultBody onExit={onExit} />
      </Modal>
    </>
  );
};

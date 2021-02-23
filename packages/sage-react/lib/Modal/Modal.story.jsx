import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { SageTokens, SageClassnames } from '../configs';
import { Modal } from './Modal';

export default {
  title: 'Sage/Modal',
  component: Modal,
  subcomponents: {
    "Modal.Header": Modal.Header,
    "Modal.HeaderAside": Modal.HeaderAside,
    "Modal.Body": Modal.Body,
    "Modal.Footer": Modal.Footer,
    "Modal.FooterAside": Modal.FooterAside,
  },
};

export const Empty = (args) => <Modal {...args} />;
Empty.decorators = [
  (Story) => (
    <>
      <p>Note: wired modal demonstrates functionality. See "Docs" tab for properties</p>
      <Story />
    </>
  )
]

export const Wired = () => {
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
        onExit={onExit}
      >
        <Modal.Header title="Example Sage Modal">
          <Modal.HeaderAside>
            <Button
              color={Button.COLORS.SECONDARY}
              iconOnly={true}
              icon={SageTokens.ICONS.REMOVE}
              onClick={onExit}
              subtle={true}
            >
              Menu
            </Button>
          </Modal.HeaderAside>
        </Modal.Header>
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
            >
              Close Modal
            </Button>
          </Modal.FooterAside>
          <Button
            color={Button.COLORS.PRIMARY}
            icon={SageTokens.ICONS.CHECK}
            iconPosition={Button.ICON_POSITIONS.LEFT}
            onClick={onExit}
          >
            Take An Action
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

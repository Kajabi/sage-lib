import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Button } from '../Button';
import { SageTokens, SageClassnames } from '../configs';
import { Modal } from './Modal';
import ModalNotes from './ModalNotes.md';

const ModalWithState = () => {
  const [active, setActive] = useState(true);

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
        large={boolean('Large', false)}
      >
        <Modal.Header>
          <h1 className={SageClassnames.TYPE.HEADING_1}>Example Sage Modal</h1>
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

storiesOf('Sage/Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <ModalWithState />
  ), {
    notes: { markdown: ModalNotes }
  });

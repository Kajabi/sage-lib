import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { ProgressBar } from '../ProgressBar';
import { Icon } from '../Icon';
import { SageTokens, SageClassnames } from '../configs';
import { disableArgs } from '../story-support/helpers';
import { Modal } from './Modal';
import { ButtonGroup } from '../Button/ButtonGroup';

const DefaultBody = ({ onExit }) => (
  <>
    <Modal.Header
      icon={{ color: Icon.COLORS.RED_200, name: Icon.ICONS.DANGER }}
      title="Example Sage Modal"
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

const FullscreenBody = ({ onExit }) => (
  <>
    <Modal.Header
      title="Example Sage Modal"
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

FullscreenBody.propTypes = {
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
        size={Modal.SIZES.FULL}
        {...args}
      >
        <DefaultBody onExit={onExit} />
      </Modal>
    </>
  );
};

const FullscreenFixedBody = ({ onExit }) => (
  <>
    <Modal.Header
      title="Fullscreen Fixed Modal"
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
      <Grid.Row>
        <Grid.Col size={5} large={5} className="sage-modal__fixed-column">
          <div className="sage-modal__fixed-column-scroll">
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
          </div>
          <ButtonGroup gap={ButtonGroup.GAP_OPTIONS.MD} className="sage-modal__fixed-column-actions">
            <Button
              color={Button.COLORS.SECONDARY}
              raised={false}
              onClick={onExit}
            >
              Go back
            </Button>
            <Button
              color={Button.COLORS.PRIMARY}
              raised={false}
            >
              Save and continue
            </Button>
          </ButtonGroup>
        </Grid.Col>
        <Grid.Col size={7} large={7}>
          <div className="sage-modal__fixed-column-scroll sage-modal__fixed-column-scroll--no-footer">
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Modal.Body>
  </>
);

FullscreenFixedBody.propTypes = {
  onExit: PropTypes.func.isRequired
};

export const CreationFramework = (args) => {
  const [selfActive, setSelfActive] = useState(args.active);

  const handleExit = () => {
    setSelfActive(false);
  };

  useEffect(() => {
    setSelfActive(args.active);
  }, [args.active]);

  return (
    <>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={() => setSelfActive(true)}
      >
        Take An Action
      </Button>
      <Modal
        active={selfActive}
        animation={{ direction: Modal.ANIMATION_DIRECTIONS.BOTTOM }}
        fixed={true}
        fullScreen={true}
        onExit={() => setSelfActive(false)}
        {...args}
      >
        <FullscreenFixedBody onExit={handleExit} />
      </Modal>
    </>
  );
};

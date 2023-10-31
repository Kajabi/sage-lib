import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { ProgressBar } from '../ProgressBar';
import { Icon } from '../Icon';
import { SageTokens, SageClassnames } from '../configs';
import { disableArgs, selectArgs } from '../story-support/helpers';
import { Modal } from './Modal';
import { ModalScrollableCols } from './ModalScrollableCols';

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

export const ScrollableColumnsModal = (args) => {
  const [active, setActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
        className="modal-scrollable-cols__funnel modal-scrollable-cols__modal"
        isClosing={isClosing}
        animation={false}
        size={Modal.SIZES.LG}
        onExit={onExit}
      >
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
            <>
              <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
                <Button
                  color={Button.COLORS.SECONDARY}
                  icon={SageTokens.ICONS.PREVIEW_ON}
                  onClick={onExit}
                >
                  Preview
                </Button>

                <Button
                  color={Button.COLORS.SECONDARY}
                  iconOnly={true}
                  icon={SageTokens.ICONS.REMOVE}
                  onClick={onExit}
                  subtle={true}
                >
                  Menu
                </Button>
              </Button.Group>
            </>
          )}
        />
        <Modal.Body>
          <Grid.Row className="modal-scrollable-cols__container">
            <Grid.Col className="modal-scrollable-cols__sidebar modal-scrollable-cols__fixed-column">
              {/* {form && ( */}
                <div className="modal-scrollable-cols__fixed-column-scroll">
                  {/* { form } */}
                  <p>form side</p>
                </div>
              {/* )} */}
            </Grid.Col>
            <Grid.Col className="modal-scrollable-cols__preview modal-scrollable-cols__fixed-column">
              {/* {preview && ( */}
                <div className="modal-scrollable-cols__fixed-column-scroll">
                  {/* { preview } */}
                  <p>preview side</p>
                </div>
              {/* )} */}
            </Grid.Col>
          </Grid.Row>
        </Modal.Body>
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

export const ModalWithScrollingColumns = (args) => {
  const [active, setActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
      <ModalScrollableCols
        {...args}
        active={active}
        headerActions={
          <>
            <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
              <Button
                color={Button.COLORS.SECONDARY}
                icon={SageTokens.ICONS.PREVIEW_ON}
                onClick={onExit}
              >
                Preview
              </Button>
              <Button
                color={Button.COLORS.SECONDARY}
                iconOnly={true}
                icon={SageTokens.ICONS.REMOVE}
                onClick={onExit}
                subtle={true}
              >
                Menu
              </Button>
            </Button.Group>
          </>
        }
        form={
          <>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
            <p>form side</p>
          </>
        }
        preview={
          <>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
            <p>preview side</p>
          </>
        }
        isClosing={isClosing}
        onExit={onExit}
        title="My Modal"
      />
    </>
  );
};

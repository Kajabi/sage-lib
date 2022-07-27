import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { selectArgs } from '../story-support/helpers';
import { SageTokens, SageClassnames } from '../configs';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Panel } from '../Panel';
import { Modal } from '../Modal';
import { VideoThumbnail } from './VideoThumbnail';

export default {
  title: 'Sage/VideoThumbnail',
  component: VideoThumbnail,
  args: {
    imageurl: 'http://source.unsplash.com/random/600X600'
  },
  argTypes: {
    ...selectArgs({
    })
  }
};

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

export const Default = (args) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(true);
  };

  const onExit = () => {
    setActive(false);
  };

  return (
    <>
      <Panel>
        <Panel.Figure>
          <VideoThumbnail {...args} onClick={onClick} />
        </Panel.Figure>
        <h2>Video Title</h2>
        <p>
          This will serve as the description text for the video modal.
        </p>
      </Panel>
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

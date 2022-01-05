import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const CreationWizard = ({
  active,
  body,
  bodyActions,
  feature,
  header,
  headerIndicator,
  children,
  className,
  id,
  image,
  indicator,
  onExit,
  showClose,
  title,
}) => (
  <Modal
    active={active}
    className={`sage-creation-wizard ${className || ''}`}
    fullscreen={true}
    id={id}
  >
    <Modal.Header
      title={title}
      aside={showClose && (
        <Button
          className="sage-drawer__close"
          color={Button.COLORS.SECONDARY}
          iconOnly={true}
          icon={SageTokens.ICONS.REMOVE}
          onClick={onExit}
          subtle={true}
        >
          Close Drawer
        </Button>
      )}
    />
    <Modal.Body>

    </Modal.Body>
  </Modal>
);

CreationWizard.defaultProps = {
  active: false,
  body: null,
  bodyActions: null,
  children: null,
  className: null,
  feature: null,
  header: null,
  headerIndicator: null,
  id: null,
  image: null,
  indicator: null,
  onExit: (val) => val,
  showClose: true,
  title: null,
};

CreationWizard.propTypes = {
  active: PropTypes.bool,
  body: PropTypes.arrayOf(PropTypes.node),
  bodyActions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node,
  className: PropTypes.string,
  feature: PropTypes.arrayOf(PropTypes.node),
  header: PropTypes.arrayOf(PropTypes.node),
  headerIndicator: PropTypes.arrayOf(PropTypes.node),
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  indicator: PropTypes.shape({
    currentItem: PropTypes.number,
    label: PropTypes.string,
    numItems: PropTypes.number
  }),
  onExit: PropTypes.func,
  showClose: PropTypes.bool,
  title: PropTypes.string,
};

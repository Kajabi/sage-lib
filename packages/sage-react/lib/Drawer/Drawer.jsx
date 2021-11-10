import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const Drawer = ({
  active,
  children,
  className,
  customHeader,
  onExit,
  showClose,
  title,
}) => (
  <Modal
    active={active}
    animation={{ direction: Modal.ANIMATION_DIRECTIONS.LEFT }}
    className={`sage-drawer ${className || ''}`}
    disableBackgroundDismiss={true}
  >
    <Modal.Header
      customHeader={customHeader ? (
        <div className="sage-drawer__header">{customHeader}</div>
      ) : null}
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
    <Modal.Body spacing={Modal.Body.SPACINGS.PANEL}>
      {children}
    </Modal.Body>
  </Modal>
);

Drawer.defaultProps = {
  active: false,
  children: null,
  className: null,
  customHeader: null,
  onExit: (val) => val,
  showClose: true,
  title: null,
};

Drawer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  customHeader: PropTypes.node,
  onExit: PropTypes.func,
  showClose: PropTypes.bool,
  title: PropTypes.string,
};

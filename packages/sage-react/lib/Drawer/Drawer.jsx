import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import {
  DRAWER_START_EXPAND,
  DRAWER_END_EXPAND,
  DRAWER_START_COLLAPSE,
  DRAWER_END_COLLAPSE,
} from './configs';

/* eslint-disable react-hooks/exhaustive-deps */

export const Drawer = ({
  active,
  children,
  className,
  compact,
  customHeader,
  customWidth,
  disableBackgroundDismiss,
  expanded,
  expandedSize,
  footer,
  onExpandChange,
  id,
  isClosing,
  onExit,
  showClose,
  size,
  title,
}) => {
  useEffect(() => {
    if (onExpandChange) {
      // Trigger outwards that a change to expanded was detected
      onExpandChange(expanded ? DRAWER_START_EXPAND : DRAWER_START_COLLAPSE);

      // Wait for CSS transition to end
      setTimeout(() => {
        onExpandChange(expanded ? DRAWER_END_EXPAND : DRAWER_END_COLLAPSE);
      }, 750);
    }
  }, [expanded]);

  const classNames = classnames(
    'sage-drawer',
    className,
    {
      'sage-drawer--expanded': expanded,
      'sage-drawer--compact': compact,
    }
  );

  const localStyles = {};

  if (size) {
    localStyles['--sage-drawer-size'] = size;
  }

  if (expandedSize) {
    localStyles['--sage-drawer-expanded-size'] = expandedSize;
  }

  return (
    <Modal
      active={active}
      animation={{ direction: Modal.ANIMATION_DIRECTIONS.LEFT }}
      className={classNames}
      disableBackgroundDismiss={disableBackgroundDismiss}
      id={id}
      isClosing={isClosing}
      onExit={onExit}
      styles={{ ...localStyles }}
      style={{
        '--sage-drawer-compact-width': `${customWidth}px`
      }}
    >
      {(customHeader || title || showClose) && (
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
      )}
      <Modal.Body spacing={Modal.Body.SPACINGS.PANEL}>
        {children}
      </Modal.Body>
      {footer && (
        <Modal.Footer className="sage-drawer-compact__input-wrapper">
          {footer}
        </Modal.Footer>
      )}
    </Modal>
  );
};

Drawer.START_EXPAND = DRAWER_START_EXPAND;
Drawer.END_EXPAND = DRAWER_END_EXPAND;
Drawer.START_COLLAPSE = DRAWER_START_COLLAPSE;
Drawer.END_COLLAPSE = DRAWER_END_COLLAPSE;

Drawer.defaultProps = {
  active: false,
  children: null,
  className: null,
  compact: false,
  customHeader: null,
  customWidth: null,
  disableBackgroundDismiss: true,
  expanded: false,
  expandedSize: null,
  footer: null,
  isClosing: false,
  onExit: (val) => val,
  onExpandChange: (expanded) => expanded,
  showClose: true,
  size: null,
  title: null,
};

Drawer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  customHeader: PropTypes.node,
  customWidth: PropTypes.number,
  disableBackgroundDismiss: PropTypes.bool,
  expanded: PropTypes.bool,
  expandedSize: PropTypes.string,
  footer: PropTypes.node,
  id: PropTypes.string.isRequired,
  isClosing: PropTypes.bool,
  onExit: PropTypes.func,
  onExpandChange: PropTypes.func,
  showClose: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.string,
};

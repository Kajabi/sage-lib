import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { debounce } from 'debounce';
import { SageTokens } from '../configs';
import { DropdownItem } from './DropdownItem';
import { DropdownItemList } from './DropdownItemList';
import { DropdownItemSearch } from './DropdownItemSearch';
import { DropdownPanel } from './DropdownPanel';
import { DropdownTrigger } from './DropdownTrigger';
import { DROPDOWN_ITEM_COLORS, DROPDOWN_PANEL_SIZES, DROPDOWN_PANEL_TYPES, DROPDOWN_POSITIONS } from './configs';
import { DropdownTriggerSelect } from './DropdownTriggerSelect';

export const Dropdown = ({
  align,
  children,
  className,
  clickTriggerHandler,
  closePanelOnExit,
  contained,
  customized,
  customTrigger,
  disabled,
  disclosure,
  exitPanelHandler,
  icon,
  isLabelVisible,
  isPinned,
  label,
  onEscapeHook,
  panelModifier,
  panelMaxWidth,
  panelSize,
  panelStateToken,
  panelType,
  triggerButtonSubtle,
  triggerClassnames,
  triggerModifier,
  triggerWidth,
}) => {
  const [isActive, setActive] = useState(false);
  const [coords, updateCoords] = useState(null);
  const wrapperRef = useRef(null);

  const topBoxOffset = 2;
  const inlineBoxOffset = -6;

  const onClickTrigger = () => {
    if (!isActive && clickTriggerHandler) {
      clickTriggerHandler();
    }

    if (!disabled) {
      setActive(!isActive);
    }
  };

  const setPanelCoords = (coords) => {
    updateCoords(coords);
  };

  const onUpdate = useCallback(debounce(() => positionElement(), 0), []); // eslint-disable-line

  // NOTE: getHeight and positionElement must be kept in alignment
  // with packages/sage-system/lib/dropdown.js since we don't
  // currently have unified location for Rails and React

  const getHeight = (el) => {
    const styles = window.getComputedStyle(el);
    const height = el.offsetHeight;
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    const borderBottomWidth = parseFloat(styles.borderBottomWidth);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);

    return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
  };

  const positionElement = () => {
    let directionX = null;
    let directionY = null;
    const el = wrapperRef.current;
    // Elements
    const button = el;
    const panel = el.lastElementChild;

    // Dimensions
    const buttonDimensions = button.getBoundingClientRect();
    const panelDimensions = panel.getBoundingClientRect();

    const panelHeight = getHeight(panel);
    const enoughSpaceAbove = panelHeight + buttonDimensions.bottom > window.innerHeight;
    const enoughSpaceBelow = panelHeight + buttonDimensions.bottom < window.innerHeight;
    const enoughSpaceLeft = panelDimensions.width < buttonDimensions.left;
    const enoughSpaceRight = panelDimensions.width < window.innerWidth - buttonDimensions.right;

    if (!enoughSpaceBelow && enoughSpaceAbove) {
      directionY = 'above';
    } else if (!enoughSpaceAbove && enoughSpaceBelow) {
      directionY = 'below';
    }
    const rect = wrapperRef.current.getBoundingClientRect();
    const coords = {
      top: buttonDimensions.bottom + topBoxOffset,
      left: align === DROPDOWN_POSITIONS.LEFT || null
        ? rect.left + inlineBoxOffset
        : null,
      right: align === DROPDOWN_POSITIONS.RIGHT && isPinned
        ? window.innerWidth - rect.right + inlineBoxOffset
        : null,
    };

    if (!isPinned) {
      coords.top = null;
      coords.left = null;
    }

    if (directionY === 'above') {
      coords.top = ((buttonDimensions.height / 4) + panelDimensions.height) * -1;
      coords.left = null;
      if (isPinned) {
        coords.top = (buttonDimensions.top - panelDimensions.height);
        coords.right = window.innerWidth - buttonDimensions.right + inlineBoxOffset;
      }
    }

    // Check if there is enough space to the left or right
    // CHECK ISPINNED
    if (!enoughSpaceRight && enoughSpaceLeft) {
      directionX = DROPDOWN_POSITIONS.LEFT;
    } else if (!enoughSpaceLeft && enoughSpaceRight) {
      directionX = DROPDOWN_POSITIONS.RIGHT;
    }

    if (directionX === DROPDOWN_POSITIONS.LEFT) {
      coords.left = null;
      coords.right = 0;
      if (isPinned) {
        coords.right = window.innerWidth - buttonDimensions.right + inlineBoxOffset;
      }
    }

    if (directionX === DROPDOWN_POSITIONS.RIGHT) {
      coords.left = 0;
      coords.right = null;
      if (isPinned) {
        coords.left = buttonDimensions.left + inlineBoxOffset;
      }
    }

    setPanelCoords(coords);
  };

  useEffect(() => {
    if (!wrapperRef) {
      return false;
    }

    positionElement();

    window.addEventListener('scroll', onUpdate);
    window.addEventListener('resize', onUpdate);

    return () => {
      window.removeEventListener('scroll', onUpdate);
      window.removeEventListener('resize', onUpdate);
    };
  }, [wrapperRef, isActive, isPinned, onUpdate]); // eslint-disable-line

  useEffect(() => {
    if (panelStateToken) {
      setActive(!isActive);
    }
  }, [panelStateToken]); // eslint-disable-line

  const a11yAttrs = {
    'aria-expanded': isActive,
  };

  if (disabled) {
    a11yAttrs['aria-disabled'] = true;
  }

  const onExit = (data = {}) => {
    if (closePanelOnExit && !data.suppressExit) {
      setActive(false);
    }

    if (exitPanelHandler) {
      exitPanelHandler(data);
    }
  };

  const onClickScreen = () => {
    setActive(false);
    onEscapeHook();
  };

  const classNames = classnames(
    'sage-dropdown',
    className,
    {
      [`sage-dropdown--anchor-${align}`]: align,
      'sage-dropdown--active': isActive,
      'sage-dropdown--contained': contained,
      'sage-dropdown--customized': customized,
      'sage-dropdown--disabled': disabled,
      'sage-dropdown--pinned': isPinned,
      [`sage-dropdown--${panelSize}`]: panelSize,
      [`sage-dropdown--${panelType}`]: panelType,
    }
  );

  return (
    <div ref={wrapperRef} className={classNames} {...a11yAttrs}>
      {isActive && (
        <div aria-hidden="true" className="sage-dropdown__screen" onClick={onClickScreen} />
      )}
      <DropdownTrigger
        disabled={disabled}
        disclosure={disclosure}
        icon={icon}
        isLabelVisible={isLabelVisible}
        label={label}
        modifier={triggerModifier}
        onClickTrigger={onClickTrigger}
        subtleButton={triggerButtonSubtle}
        triggerClassnames={triggerClassnames}
        width={triggerWidth}
      >
        {customTrigger}
      </DropdownTrigger>
      {isActive && (
        <DropdownPanel
          maxWidth={panelMaxWidth}
          modifier={panelModifier}
          onClickScreen={onClickScreen}
          onExit={onExit}
          coords={coords}
        >
          {children}
        </DropdownPanel>
      )}
    </div>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.ItemSearch = DropdownItemSearch;
Dropdown.ItemList = DropdownItemList;
Dropdown.Panel = DropdownPanel;
Dropdown.Trigger = DropdownTrigger;
Dropdown.TriggerSelect = DropdownTriggerSelect;

Dropdown.ITEM_COLORS = DROPDOWN_ITEM_COLORS;
Dropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;
Dropdown.PANEL_TYPES = DROPDOWN_PANEL_TYPES;
Dropdown.POSITIONS = DROPDOWN_POSITIONS;

Dropdown.defaultProps = {
  align: DROPDOWN_POSITIONS.DEFAULT,
  children: null,
  className: null,
  clickTriggerHandler: null,
  closePanelOnExit: true,
  contained: false,
  customTrigger: null,
  customized: false,
  exitPanelHandler: null,
  disabled: false,
  disclosure: false,
  icon: null,
  isLabelVisible: true,
  isPinned: false,
  label: null,
  onEscapeHook: () => false,
  panelMaxWidth: null,
  panelModifier: 'default',
  panelSize: DROPDOWN_PANEL_SIZES.DEFAULT,
  panelStateToken: null,
  panelType: null,
  triggerButtonSubtle: false,
  triggerClassnames: '',
  triggerModifier: 'default',
  triggerWidth: null,
};

Dropdown.propTypes = {
  align: PropTypes.oneOf(Object.values(Dropdown.POSITIONS)),
  children: PropTypes.node,
  className: PropTypes.string,
  clickTriggerHandler: PropTypes.func,
  closePanelOnExit: PropTypes.bool,
  contained: PropTypes.bool,
  customized: PropTypes.bool,
  customTrigger: PropTypes.node,
  disabled: PropTypes.bool,
  disclosure: PropTypes.bool,
  exitPanelHandler: PropTypes.func,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isLabelVisible: PropTypes.bool,
  isPinned: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onEscapeHook: PropTypes.func,
  panelMaxWidth: PropTypes.string,
  panelModifier: PropTypes.string,
  panelSize: PropTypes.oneOf(Object.values(Dropdown.PANEL_SIZES)),
  panelType: PropTypes.oneOf(Object.values(Dropdown.PANEL_TYPES)),
  panelStateToken: PropTypes.string,
  triggerButtonSubtle: PropTypes.bool,
  triggerClassnames: PropTypes.string,
  triggerModifier: PropTypes.string,
  triggerWidth: PropTypes.string,
};

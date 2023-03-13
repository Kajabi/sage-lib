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

  const setPanelCoords = () => {
    const rect = wrapperRef.current.getBoundingClientRect();

    updateCoords({
      top: rect.bottom + topBoxOffset,
      left: align !== 'right'
        ? rect.left + inlineBoxOffset
        : 'intitial',
      right: align === 'right'
        ? window.innerWidth - rect.right + inlineBoxOffset
        : 'intitial',
    });
  };

  const onUpdate = useCallback(debounce(() => setPanelCoords(), 20), []); // eslint-disable-line

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

  const positionElement = (el) => {
    let direction = null;

    // Elements
    const button = el;
    const panel = el.lastElementChild;
    const win = panel.ownerDocument.defaultView;
    const docEl = window.document.documentElement;

    panel.style.top = ''; // resets the style

    // Dimensions
    const buttonDimensions = button.getBoundingClientRect();
    const panelDimensions = panel.getBoundingClientRect();

    const panelNewLoc = {
      top: (buttonDimensions.height / 2) + panelDimensions.height
    };

    const viewport = {
      top: docEl.scrollTop,
      bottom: window.pageYOffset + docEl.clientHeight,
    };

    const offset = {
      top: panelDimensions.top + win.pageYOffset,
      left: panelDimensions.left + win.pageXOffset,
      bottom: (panelDimensions.top + win.pageYOffset)
    };

    const panelHeight = getHeight(panel);
    const enoughSpaceAbove = viewport.top < (offset.top + panelHeight);
    const enoughSpaceBelow = viewport.bottom > (offset.bottom + panelHeight);

    if (!enoughSpaceBelow && enoughSpaceAbove) {
      direction = 'above';
    } else if (!enoughSpaceAbove && enoughSpaceBelow) {
      direction = 'below';
    }

    if (direction === 'above') {
      panel.style.top = `-${panelNewLoc.top}px`;
    }
  };

  useEffect(() => {
    if (!wrapperRef) {
      return false;
    }

    if (isActive && isPinned) {
      setPanelCoords();
      window.addEventListener('scroll', onUpdate);
      window.addEventListener('resize', onUpdate);
    } else {
      positionElement(wrapperRef.current);
      window.removeEventListener('scroll', onUpdate);
      window.removeEventListener('resize', onUpdate);
    }

    return () => {
      window.removeEventListener('scroll', onUpdate);
      window.removeEventListener('resize', onUpdate);
    };
  }, [wrapperRef, isActive, isPinned, onUpdate, positionElement]);

  useEffect(() => {
    if (panelStateToken) {
      setActive(!isActive);
    }
  }, [panelStateToken]);

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

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
import { DROPDOWN_ITEM_COLORS } from './configs';

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
  exitPanelHandler,
  icon,
  isLabelVisible,
  isPinned,
  label,
  panelModifier,
  panelMaxWidth,
  triggerButtonSubtle,
  triggerModifier,
}) => {
  const [isActive, setActive] = useState(false);
  const [coords, updateCoords] = useState(null);
  const wrapperRef = useRef(null);

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
      top: rect.bottom,
      left: align !== 'right'
        ? rect.left
        : 'intitial',
      right: align === 'right'
        ? window.innerWidth - rect.right
        : 'intitial',
    });
  };

  const onUpdate = useCallback(debounce(() => setPanelCoords(), 20), []); // eslint-disable-line

  useEffect(() => {
    if (!wrapperRef) {
      return false;
    }

    if (isActive && isPinned) {
      setPanelCoords();
      window.addEventListener('scroll', onUpdate);
      window.addEventListener('resize', onUpdate);
    } else {
      window.removeEventListener('scroll', onUpdate);
      window.removeEventListener('resize', onUpdate);
    }

    return () => {
      window.removeEventListener('scroll', onUpdate);
      window.removeEventListener('resize', onUpdate);
    };
  }, [wrapperRef, isActive, isPinned, onUpdate]);

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
  };

  const classNames = classnames(
    'sage-dropdown',
    className,
    {
      [`sage-dropdown--anchor-${align}`]: align,
      'sage-dropdown--active': isActive,
      'sage-dropdown--disabled': disabled,
      'sage-dropdown--pinned': isPinned,
      'sage-dropdown--customized': customized,
      'sage-dropdown--contained': contained,
    }
  );

  return (
    <div ref={wrapperRef} className={classNames} {...a11yAttrs}>
      {isActive && (
        <div aria-hidden="true" className="sage-dropdown__screen" onClick={onClickScreen} />
      )}
      <DropdownTrigger
        disabled={disabled}
        icon={icon}
        isLabelVisible={isLabelVisible}
        label={label}
        modifier={triggerModifier}
        onClickTrigger={onClickTrigger}
        subtleButton={triggerButtonSubtle}
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

Dropdown.ITEM_COLORS = DROPDOWN_ITEM_COLORS;

Dropdown.defaultProps = {
  align: null,
  children: null,
  className: null,
  clickTriggerHandler: null,
  closePanelOnExit: true,
  contained: false,
  customTrigger: null,
  customized: false,
  exitPanelHandler: null,
  disabled: false,
  icon: null,
  isLabelVisible: true,
  isPinned: false,
  panelMaxWidth: null,
  panelModifier: 'default',
  triggerButtonSubtle: false,
  triggerModifier: 'default',
  label: null
};

Dropdown.propTypes = {
  align: PropTypes.oneOf([
    'right',
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  clickTriggerHandler: PropTypes.func,
  closePanelOnExit: PropTypes.bool,
  contained: PropTypes.bool,
  customized: PropTypes.bool,
  customTrigger: PropTypes.node,
  disabled: PropTypes.bool,
  exitPanelHandler: PropTypes.func,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isLabelVisible: PropTypes.bool,
  isPinned: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  panelMaxWidth: PropTypes.string,
  panelModifier: PropTypes.string,
  triggerButtonSubtle: PropTypes.bool,
  triggerModifier: PropTypes.string,
};

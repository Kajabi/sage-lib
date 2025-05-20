import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createPopper } from '@popperjs/core';
import { SageTokens } from '../configs';
import { DropdownItem } from './DropdownItem';
import { DropdownItemList } from './DropdownItemList';
import { DropdownItemSearch } from './DropdownItemSearch';
import { DropdownPanel } from './DropdownPanel';
import { DropdownTrigger } from './DropdownTrigger';
import { DROPDOWN_ITEM_COLORS, DROPDOWN_PANEL_SIZES, DROPDOWN_PANEL_TYPES, DROPDOWN_POSITIONS } from './configs';
import { DropdownTriggerSelect } from './DropdownTriggerSelect';

// Create a wrapper for DropdownPanel to forward refs
const ForwardedDropdownPanel = React.forwardRef((props, ref) => (
  <DropdownPanel {...props} forwardedRef={ref} />
));

ForwardedDropdownPanel.displayName = 'ForwardedDropdownPanel';

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
  ...rest
}) => {
  const [isActive, setActive] = useState(false);
  const [isPositioned, setIsPositioned] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [lastPanelStateToken, setLastPanelStateToken] = useState(panelStateToken);
  const wrapperRef = useRef(null);
  const panelRef = useRef(null);
  const popperInstanceRef = useRef(null);

  const onClickTrigger = () => {
    if (!isActive && clickTriggerHandler) {
      clickTriggerHandler();
    }

    if (!disabled) {
      setActive(!isActive);
      setShowPanel(false);
      setIsPositioned(false);
    }
    // eslint-disable-next-line consistent-return
  };

  // Show panel after positioning is complete
  /* eslint-disable consistent-return */
  useEffect(() => {
    if (isPositioned) {
      // Increase delay to ensure popper has fully calculated position
      const timer = setTimeout(() => {
        setShowPanel(true);

        // Force a reflow/repaint to ensure visibility changes apply
        if (panelRef.current) {
          // eslint-disable-next-line no-unused-expressions
          panelRef.current.offsetHeight; // Force reflow

          // Also force a popper update after panel is visible
          if (popperInstanceRef.current) {
            popperInstanceRef.current.update();
          }
        }
      }, 50);

      return () => clearTimeout(timer);
    }

    setShowPanel(false);
  }, [isPositioned]);
  /* eslint-enable consistent-return */

  // Add a fallback to show the panel after a reasonable timeout
  /* eslint-disable consistent-return */
  useEffect(() => {
    if (isActive && !showPanel) {
      let isMounted = true; // Helps prevent updates if component unmounts

      // If panel hasn't become visible after 300ms, force it to show
      const fallbackTimer = setTimeout(() => {
        // Double-check component is still mounted and panel still not shown
        if (isMounted && !showPanel) {
          setIsPositioned(true);
          setShowPanel(true);

          // Force update popper if it exists
          if (popperInstanceRef.current) {
            popperInstanceRef.current.update();
          }
        }
      }, 300);

      return () => {
        isMounted = false;
        clearTimeout(fallbackTimer);
      };
    }
  }, [isActive, showPanel]);
  /* eslint-enable consistent-return */

  // Update the Popper effect with enhanced flip behavior
  useEffect(() => {
    // Only create popper when dropdown is active and necessary refs exist
    if (!isActive || !wrapperRef.current || !panelRef.current) {
      return undefined;
    }

    // Fix operator line breaks
    const triggerElement = wrapperRef.current.querySelector('.sage-dropdown__trigger')
      || wrapperRef.current.querySelector('.sage-btn')
      || wrapperRef.current.children[1]; // Fallback to second child

    if (!triggerElement) {
      // Silently return if trigger element can't be found
      return undefined;
    }

    // Clean up any existing popper instance before creating a new one
    if (popperInstanceRef.current) {
      popperInstanceRef.current.destroy();
      popperInstanceRef.current = null;
    }

    // Pre-emptively check available space to determine optimal initial placement
    const triggerRect = triggerElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const distanceToBottom = viewportHeight - triggerRect.bottom;
    const estimatedPanelHeight = panelRef.current.offsetHeight || 200;

    // Fix the lonely if in else block
    let placement;
    if (distanceToBottom < estimatedPanelHeight && triggerRect.top > estimatedPanelHeight) {
      // Use top placement when limited space below and sufficient space above
      if (align === DROPDOWN_POSITIONS.RIGHT) {
        placement = 'top-end';
      } else if (align === DROPDOWN_POSITIONS.CENTER) {
        placement = 'top';
      } else {
        placement = 'top-start';
      }
    } else if (align === DROPDOWN_POSITIONS.RIGHT) {
      placement = 'bottom-end';
    } else if (align === DROPDOWN_POSITIONS.CENTER) {
      placement = 'bottom';
    } else {
      placement = 'bottom-start';
    }

    // Use 'fixed' positioning for isPinned to escape overflow containers
    // Otherwise use 'absolute' for normal behavior
    const strategy = isPinned ? 'fixed' : 'absolute';

    // Fix spaces before comments
    popperInstanceRef.current = createPopper(triggerElement, panelRef.current, {
      placement, // Initial placement determined above
      strategy, // Strategy based on isPinned prop
      modifiers: [
        // Add slight offset for better visual appearance
        {
          name: 'offset',
          options: {
            offset: [0, 8], // 8px gap between trigger and panel
          },
        },
        // Prevent panel from overflowing viewport
        {
          name: 'preventOverflow',
          options: {
            boundary: 'viewport',
            padding: 8, // Keep 8px from viewport edges
            altAxis: true, // Handle both horizontal and vertical overflow
          },
        },
        // Configure advanced flipping behavior
        {
          name: 'flip',
          options: {
            // Comprehensive set of fallback placements
            fallbackPlacements: [
              'top-start', 'top', 'top-end',
              'bottom-start', 'bottom', 'bottom-end'
            ],
            padding: 20, // Larger padding to flip sooner when approaching edges
            flipVariations: true, // Consider alignment variations when flipping
            allowedAutoPlacements: ['top', 'bottom'], // Restrict to vertical placements
          },
        },
        // Compute styles optimized for performance
        {
          name: 'computeStyles',
          options: {
            gpuAcceleration: true, // Use GPU acceleration
            adaptive: true, // Update styles based on panel position
          },
        },
      ],
      // Update state when positioning is complete
      onFirstUpdate: () => {
        setIsPositioned(true);

        // Force an additional update for more accurate positioning
        setTimeout(() => {
          if (popperInstanceRef.current) {
            popperInstanceRef.current.update();
          }
        }, 0);
      }
    });

    // Clean up the popper instance when component unmounts or dependencies change
    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [isActive, align, isPinned]);

  // Handle panel state token changes
  useEffect(() => {
    // Only trigger if panelStateToken has changed and isn't null
    if (panelStateToken && panelStateToken !== lastPanelStateToken) {
      setLastPanelStateToken(panelStateToken);
      setActive((prevActive) => !prevActive);
      setShowPanel(false);
      setIsPositioned(false);
    }
    // eslint-disable-next-line consistent-return
  }, [panelStateToken, lastPanelStateToken]);

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
    <div ref={wrapperRef} className={classNames} {...a11yAttrs} {...rest}>
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
      {/* Render dropdown portal directly to document body to escape overflow containers */}
      {isActive && (
        <ForwardedDropdownPanel
          ref={panelRef}
          maxWidth={panelMaxWidth}
          modifier={panelModifier}
          onClickScreen={onClickScreen}
          onExit={onExit}
        >
          {children}
        </ForwardedDropdownPanel>
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

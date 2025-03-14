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
}) => {
  const [isActive, setActive] = useState(false);
  const [isPositioned, setIsPositioned] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [lastPanelStateToken, setLastPanelStateToken] = useState(panelStateToken);
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
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

  // Setup and manage popper instance
  useEffect(() => {
    if (!isActive || !triggerRef.current || !panelRef.current) return undefined;

    // Initially position the panel off-screen to prevent flicker
    if (panelRef.current) {
      panelRef.current.style.position = 'absolute';
      panelRef.current.style.left = '-9999px';
      panelRef.current.style.top = '-9999px';
      panelRef.current.style.opacity = '0';
    }

    // Clean up any existing popper instance
    if (popperInstanceRef.current) {
      popperInstanceRef.current.destroy();
      popperInstanceRef.current = null;
    }

    // Check if we should force a top placement based on viewport position
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const distanceToBottom = viewportHeight - triggerRect.bottom;

    // Use a generous estimate for dropdown height (250px should cover most cases)
    const estimatedDropdownHeight = 250;

    // If there's not enough space below, force top placement
    const shouldForceTopPlacement = distanceToBottom < estimatedDropdownHeight;

    // Determine initial placement based on align prop and available space
    let placement;

    // Force top placement if there's not enough room below
    if (shouldForceTopPlacement) {
      // Handle different alignments for top placement
      if (align === DROPDOWN_POSITIONS.RIGHT) {
        placement = 'top-end'; // Align to the right edge of the trigger
      } else if (align === DROPDOWN_POSITIONS.CENTER) {
        placement = 'top'; // Center align above the trigger
      } else {
        placement = 'top-start'; // Align to the left edge of the trigger (default)
      }
    } else if (align === DROPDOWN_POSITIONS.RIGHT) {
      placement = 'bottom-end'; // Align to the right edge of the trigger
    } else if (align === DROPDOWN_POSITIONS.CENTER) {
      placement = 'bottom'; // Center align below the trigger
    } else {
      // Default to left alignment (bottom-start) for both DEFAULT and LEFT values
      placement = 'bottom-start'; // Align to the left edge of the trigger
    }

    // Create popper instance with proper configuration
    popperInstanceRef.current = createPopper(triggerRef.current, panelRef.current, {
      placement,
      strategy: isPinned ? 'fixed' : 'absolute',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8], // Slight offset from the trigger (x, y)
          },
        },
        {
          name: 'preventOverflow',
          options: {
            // Use the closest scrolling ancestor or viewport as boundary
            // This allows the dropdown to "escape" overflow containers when needed
            boundary: 'clippingParents',
            padding: 8, // Keep 8px from boundary edges
            altAxis: true, // Consider both axes when preventing overflow
            rootBoundary: 'viewport', // Always respect the viewport boundary
          },
        },
        {
          name: 'flip',
          options: {
            // Set more aggressive flipping with top priority for constrained space
            fallbackPlacements: placement.startsWith('bottom')
              ? ['top-start', 'top-end', 'bottom-end', 'bottom-start']
              : ['bottom-start', 'bottom-end', 'top-end', 'top-start'],
            padding: 8, // Distance from viewport edges before flipping
            // Make sure we flip if needed, even in overflow containers
            flipVariations: true,
            // Use all available space before deciding to flip
            fallbackStrategy: 'bestFit',
            // Lower threshold to make flipping more eager
            flipVariationsByContent: true,
            // Always respect viewport constraints
            rootBoundary: 'viewport',
          },
        },
        // This modifier ensures the dropdown can escape overflow containers
        {
          name: 'maxSize',
          enabled: true,
          options: {
            // Allow dropdown to have maximum available size in viewport
            padding: 8,
            boundary: 'clippingParents',
            rootBoundary: 'viewport',
          },
        },
        {
          name: 'computeStyles',
          options: {
            // Minimize inline styles to only the essential ones
            gpuAcceleration: true,
            adaptive: false, // Don't add adaptive positioning styles
            // Only include these specific styles
            styleProperties: ['transform', 'top', 'left', 'right', 'bottom'],
          },
        },
        // Ensure the dropdown panel stays anchored to the reference element
        {
          name: 'arrow',
          enabled: false,
        }
      ],
      onFirstUpdate: () => {
        // Mark as positioned after first update
        setIsPositioned(true);

        // Force an additional update to ensure accurate positioning
        setTimeout(() => {
          if (popperInstanceRef.current) {
            popperInstanceRef.current.update();
          }
        }, 10);
      }
    });

    // For tables with overflow, we need to ensure the dropdown is visible
    if (panelRef.current) {
      // Set a high z-index to escape overflow containers
      panelRef.current.style.zIndex = '900';
      // Make sure the dropdown is allowed to escape overflow
      panelRef.current.style.overflowY = 'auto';
      panelRef.current.style.overflowX = 'hidden';
    }

    // Trigger an immediate update
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }

    // Special handling for table overflow scenarios
    const checkParentOverflow = () => {
      if (!triggerRef.current) return;

      // Find the closest scrollable parent (likely the table with overflow)
      let parent = triggerRef.current.parentElement;
      let overflowParent = null;

      while (parent && parent !== document.body) {
        const style = window.getComputedStyle(parent);
        if (
          style.overflow === 'auto'
          || style.overflow === 'scroll'
          || style.overflowY === 'auto'
          || style.overflowY === 'scroll'
          || style.overflow === 'hidden'
          || style.overflowY === 'hidden'
        ) {
          overflowParent = parent;
          break;
        }
        parent = parent.parentElement;
      }

      // If we found an overflow parent and we're near the bottom of it,
      // force the placement to be 'top-start' to avoid being cut off
      if (overflowParent && popperInstanceRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const parentRect = overflowParent.getBoundingClientRect();
        const distanceToBottom = parentRect.bottom - triggerRect.bottom;

        // When handling overflow constraints, also update for center alignment
        if (distanceToBottom < 150 || (viewportHeight - triggerRect.bottom) < 200) {
          // Get the appropriate top placement based on current alignment
          let newPlacement;
          if (placement.endsWith('end')) {
            newPlacement = 'top-end';
          } else if (placement === 'bottom') {
            newPlacement = 'top'; // Handle center alignment
          } else {
            newPlacement = 'top-start';
          }

          popperInstanceRef.current.setOptions({
            placement: newPlacement
          });
          // Update immediately with new placement
          popperInstanceRef.current.update();
        }
      }
    };

    // Check for overflow constraints after a short delay
    // to ensure all layout calculations are complete
    setTimeout(checkParentOverflow, 0);

    // Handle window resize and scroll
    const updatePopper = () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.update();
      }
    };

    window.addEventListener('scroll', updatePopper, { passive: true });
    window.addEventListener('resize', updatePopper, { passive: true });

    return () => {
      window.removeEventListener('scroll', updatePopper);
      window.removeEventListener('resize', updatePopper);

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
    <div ref={wrapperRef} className={classNames} {...a11yAttrs}>
      {isActive && (
        <div aria-hidden="true" className="sage-dropdown__screen" onClick={onClickScreen} />
      )}
      <div ref={triggerRef}>
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
      </div>
      {/* Render dropdown portal directly to document body to escape overflow containers */}
      {isActive && (
        <ForwardedDropdownPanel
          ref={panelRef}
          maxWidth={panelMaxWidth}
          modifier={panelModifier}
          onClickScreen={onClickScreen}
          onExit={onExit}
          style={{
            zIndex: 10000, // Higher z-index to escape overflow containers
            minWidth: '200px',
            // CSS needed to escape overflow containers
            position: 'absolute',
            maxHeight: '80vh', // Prevent overly tall dropdowns
            overflowY: 'auto',
            overflowX: 'hidden',
            // Only apply these styles when panel should be hidden
            ...(showPanel
              ? {
                pointerEvents: 'auto',
                opacity: 1,
                visibility: 'visible',
              }
              : {
                pointerEvents: 'none',
                opacity: 0,
                position: 'absolute',
                left: '-9999px',
                top: '-9999px',
                visibility: 'hidden',
              }
            ),
            // Force no animation
            transition: 'none',
            animationDuration: '0s',
            animationDelay: '0s',
            transitionDuration: '0s',
            transitionDelay: '0s'
          }}
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

import { useEffect } from 'react';
import { createFocusTrap } from 'focus-trap';

/* eslint-disable react-hooks/exhaustive-deps */

/**
*
* @param {Boolean} active          - React boolean state
* @param {ReactRef} containerRef   - React ref of containing element where focus trapping occurs
* @param {Function} onDeactivateFn - Fires on deactivation, this is where you can set the state of
*                                    your component when a click outside or `esc` happens
* @param {Boolean} returnFocus     - Determines whether the focus trap focuses the initial element
*                                    on deactivation this is typically turned off for context menus
*                                    that scrollTo another element on the page
*
*/

export const useFocusTrap = ({
  active,
  containerRef,
  onDeactivateFn = () => {},
  returnFocus = true
}) => {
  if (
    typeof active !== 'boolean'
    || containerRef === undefined
    || typeof onDeactivateFn !== 'function'
    || typeof returnFocus !== 'boolean'
  ) {
    throw new Error('Sage useFocusTrap Hook: malformed args, see param documentation in hooks/useFocusTrap.jsx');
  }

  useEffect((additionalFocustrapSettings) => { // eslint-disable-line
    const focusTrapInstance = createFocusTrap(containerRef.current, {
      escapeDeactivates: false,
      allowOutsideClick: true,
      returnFocusOnDeactivate: returnFocus,
    });

    const handleEscape = (evt) => {
      if (evt.keyCode === 27) onDeactivateFn();
    };

    const handleClickOutside = (evt) => {
      if (!containerRef.current.contains(evt.target)) onDeactivateFn();
    };

    const setup = () => {
      focusTrapInstance.activate();
      document.addEventListener('keydown', handleEscape, false);
      document.addEventListener('click', handleClickOutside, false);
    };

    const cleanup = () => {
      focusTrapInstance.deactivate();
      document.removeEventListener('keydown', handleEscape, false);
      document.removeEventListener('click', handleClickOutside, false);
    };

    if (active) {
      setup();
    } else {
      cleanup();
    }

    return () => cleanup();
  }, [active, containerRef.current]);
};

import { useEffect } from 'react';
import { createFocusTrap } from 'focus-trap';

/**
*
* @param {Boolean} active - React boolean state
* @param {Function} deactivateFunc - Fires on deactivation, this is where you can set the state of your component when a click outside or `esc` happens
* @param {ReactRef} containerRef - React ref of containing element where focus trapping occurs
*
*/

function useFocusTrap({ active, deactivateFunc, containerRef }) {
  if (typeof active !== 'boolean' || typeof deactivateFunc !== 'function' || containerRef === undefined) {
    throw new Error('Sage useFocusTrap Hook: missing args, see param documentation in hooks/useFocusTrap.jsx');
  }

  useEffect(() => {
    const focusTrapInstance = createFocusTrap(containerRef.current, {
      escapeDeactivates: false,
      allowOutsideClick: true,
    });

    const handleEscape = (evt) => {
      if (evt.keyCode === 27) deactivateFunc();
    };

    const handleClickOutside = (evt) => {
      if (!containerRef.current.contains(evt.target)) deactivateFunc();
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

    active ? setup() : cleanup();

    return () => cleanup();
  }, [active, containerRef.current]);
};

export default useFocusTrap;

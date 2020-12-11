import { useEffect } from 'react';
import { createFocusTrap } from 'focus-trap';

/**
*
* @param {Boolean} active - React boolean state
* @param {ReactRef} containerRef - React ref of containing element where focus trapping occurs
* @param {Function} onDeactivate - Fires on deactivation, this is where you can set the state of your component when a click outside or `esc` happens
*
*/

function useFocusTrap({ active, containerRef, onDeactivate = () => {}}) {
  if (typeof active !== 'boolean' || containerRef === undefined || typeof onDeactivate !== 'function') {
    throw new Error('Sage useFocusTrap Hook: missing args, see param documentation in hooks/useFocusTrap.jsx');
  }

  useEffect(() => {
    const focusTrapInstance = createFocusTrap(containerRef.current, {
      escapeDeactivates: false,
      allowOutsideClick: true,
    });

    const handleEscape = (evt) => {
      if (evt.keyCode === 27) onDeactivate();
    };

    const handleClickOutside = (evt) => {
      if (!containerRef.current.contains(evt.target)) onDeactivate();
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

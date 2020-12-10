import { useEffect } from 'react';
import { createFocusTrap } from 'focus-trap';

/**
*
* @param {Boolean} active - React boolean state
* @param {Function} setActive - React useState function that can be passed a boolean arg
* @param {ReactRef} containerRef - React ref of containing element where focus trapping occurs
*
*/

function useFocusTrap({ active, setActive, containerRef }) {
  if (typeof active !== 'boolean' || setActive === undefined || containerRef === undefined) {
    throw new Error('Sage useFocusTrap Hook: missing args, see param documentation in hooks/useFocusTrap.jsx');
  }

  useEffect(() => {
    const focusTrapInstance = createFocusTrap(containerRef.current, {
      escapeDeactivates: false,
      allowOutsideClick: true,
    });

    const handleEscape = (evt) => {
      if (evt.keyCode === 27) setActive(false);
    };

    const handleClickOutside = (evt) => {
      if (!containerRef.current.contains(evt.target)) setActive(false);
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
    };

    return () => cleanup();
  }, [active, containerRef.current]);
};

export default useFocusTrap;

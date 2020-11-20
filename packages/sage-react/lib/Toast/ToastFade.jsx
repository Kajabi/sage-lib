import React, { useEffect, useState } from 'react';
const ToastFade = ({ isDismissed, className, children }) => {
  const [shouldRender, setRender] = useState(!isDismissed);
  useEffect(() => {
    if (isDismissed) {
      setTimeout(() => setRender(false), 1000);
    } else {
      setRender(true);
    }
  }, [isDismissed]);
  if (!shouldRender) {
    return null;
  }
  return (
    <div
      className={className}
      style={{ animation: `${!isDismissed ? "sage-toast--slide-in" : "sage-toast--slide-out"} 1s forwards` }}
    >
      {children}
    </div>
  );
};
export default ToastFade;

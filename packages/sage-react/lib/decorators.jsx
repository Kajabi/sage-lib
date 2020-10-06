import React from 'react';

// center your component either by x axis, or y axis or both
export function center(Component, centerOpt = 'xy') {
  const styles = {
    display: 'flex',
    marginTop: '10px',
    height: '100%',
  };

  if (centerOpt.match(/x/)) {
    styles.justifyContent = 'center';
  }

  if (centerOpt.match(/y/)) {
    styles.alignItems = 'center';
    styles.marginTop = 0;
  }

  return (
    <div style={styles}>
      { Component }
    </div>
  );
}

export function centerXY(componentFn) {
  return center(componentFn(), 'x');
}

export function centerY(componentFn) {
  return center(componentFn(), 'y');
}

export function centerXYY(componentFn) {
  return center(componentFn(), 'xy');
}

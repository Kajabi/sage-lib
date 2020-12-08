import React from 'react';
import Label from '../../Label';
import Avatar from '../../Avatar';

// Data Renderers
export const renderBooleanAsYesOrNo = (data) => {
  return data ? 'Yes' : 'No';
};

export const renderObjectAsAvatar = (data) => {
  let { initials, color } = data;

  if (!color) {
    // get a random color
    let colorKeys = Object.keys(Avatar.COLORS);
    let index = Math.floor(Math.random() * colorKeys.length);
    color = Avatar.COLORS[colorKeys[index]];
  }

  if (!initials) {
    // Try to use first two characters of a string
    if (typeof data === 'string') {
      initials = data.substring(0, 2).toUpperCase();
    } else {
      initials = '?';
    }
  }

  return (
    <Avatar initials={initials} color={color} />
  );
};

export const renderObjectAsHTML = (data) => data;

export const renderObjectAsLabel = ({ color, value }) => (
  <Label color={color} value={value} />
);

export const renderStringAsIs = (data) => {
  return typeof data === 'string' || typeof data === 'number' ? data : '?';
};

import React from 'react';
import { Badge } from '../../Badge';
import { Avatar } from '../../Avatar';

// Data Renderers
export const renderBooleanAsYesOrNo = (data) => (data ? 'Yes' : 'No');

export const renderObjectAsAvatar = (data) => {
  let { initials, color } = data;

  if (!color) {
    // get a random color
    const colorKeys = Object.keys(Avatar.COLORS);
    const index = Math.floor(Math.random() * colorKeys.length);
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
  <Badge color={color} value={value} />
);

export const renderStringAsIs = (data) => (typeof data === 'string' || typeof data === 'number'
  ? data
  : '?');

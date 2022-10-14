require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Avatar } from './Avatar';

describe('Sage Avatar', () => {
  it('renders a badge icon when set', () => {
    const defaultProps = {
      badge: true,
      size: '48px',
    };

    render(<Avatar {...defaultProps} />);
    const badge = document.querySelector('.sage-avatar__badge');
    expect(badge).not.toBeNull();
  });

  it('correctly updates the icon when set', () => {
    const defaultProps = {
      badge: true,
      badgeIcon: SageTokens.ICONS.DANGER_FILLED,
      size: '48px',
    };

    render(<Avatar {...defaultProps} />);
    const badgeIcon = document.querySelector('.sage-icon');
    expect(badgeIcon).not.toHaveClass('[class*="sage-icon-check-circle-filled-"');
  });

  it('correctly updates background color when set', () => {
    const defaultProps = {
      badge: true,
      badgeBackgroundColor: '#262',
      size: '48px',
    };

    render(<Avatar {...defaultProps} />);
    const badge = document.querySelector('.sage-avatar__badge--custom-bg');
    const badgeBackground = window.getComputedStyle(badge).getPropertyValue('--badge-custom-bg-color');
    expect(badgeBackground).toEqual('#262');
  });

  it('correctly updates foreground color when set', () => {
    const defaultProps = {
      badge: true,
      badgeForegroundColor: 'sage-300',
      size: '48px',
    };

    render(<Avatar {...defaultProps} />);
    const badgeIcon = document.querySelector('.sage-icon');
    expect(badgeIcon).toHaveClass('t-sage--color-sage-300');
  });
});

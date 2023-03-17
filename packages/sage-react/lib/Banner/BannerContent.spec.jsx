require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BannerContent } from './BannerContent';

describe('Sage BannerContent', () => {
  it('text when property present', () => {
    const props = {
      text: 'Banner Text'
    };

    render(<BannerContent {...props} />);

    screen.findByText('Banner test Text');

    const banner = document.querySelector('.sage-banner');
    expect(banner).toBeTruthy();
    expect(banner).toHaveTextContent('Banner Text');
  });

  it('renders without a Link when no link prop is passed', () => {
    render(<BannerContent />);

    const bannerLink = document.querySelector('.sage-banner__link');
    expect(bannerLink).toBeFalsy();
  });

  it('renders a Link when only one sub-prop is passed', () => {
    const props = {
      link: {
        name: 'Banner Link',
      },
    };

    render(<BannerContent {...props} />);

    const bannerLink = document.querySelector('.sage-banner__link');
    expect(bannerLink).toBeTruthy();
  });

  it('renders a Link with all sub-props present', () => {
    const props = {
      link: {
        name: 'Banner Link',
        href: '#',
        target: '_blank',
        rel: 'noopener',
      },
    };

    render(<BannerContent {...props} />);

    const bannerLink = document.querySelector('.sage-banner__link');
    expect(bannerLink).toBeTruthy();
    expect(bannerLink).toHaveTextContent('Banner Link');
    expect(bannerLink).toHaveAttribute('href', '#');
    expect(bannerLink).toHaveAttribute('target', '_blank');
    expect(bannerLink).toHaveAttribute('rel', 'noopener');
  });

  it('renders a Link with all some-props present', () => {
    const props = {
      link: {
        name: 'Banner Link',
        href: '#',
        target: '_blank',
      },
    };

    render(<BannerContent {...props} />);

    const bannerLink = document.querySelector('.sage-banner__link');
    expect(bannerLink).toBeTruthy();
    expect(bannerLink).toHaveTextContent('Banner Link');
    expect(bannerLink).toHaveAttribute('href', '#');
    expect(bannerLink).toHaveAttribute('target', '_blank');
    expect(bannerLink).not.toHaveAttribute('rel');
  });

  it('renders a button when dismissable prop present', () => {
    const props = {
      dismissable: true,
    };

    render(<BannerContent {...props} />);

    const dismissButton = document.querySelector('.sage-banner__close');
    expect(dismissButton).toBeTruthy();
    expect(dismissButton).toHaveTextContent('Dismiss');
  });
});

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

    screen.findByText('Banner Text');
  });

  it('renders a button when Link prop present', () => {
    const props = {
      link: 'banner link',
    };

    render(<BannerContent {...props} />);

    expect(screen.queryByRole('button', { class: 'sage-banner__link' }));
  });

  it('renders a button when dismissable prop present', () => {
    const props = {
      dismissable: true,
    };

    render(<BannerContent {...props} />);

    expect(screen.queryByRole('button', { text: 'Dismiss' }));
  });
});

require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { Banner } from './Banner';

describe('Sage Banner', () => {
  it('renders the BannerWrapper when BannerContext is present', () => {
    const defaultProps = {
      bannerContext: 'sage-demo'
    };

    render(<Banner {...defaultProps} />);
    const wrapper = document.querySelector('.sage-banner-wrapper');
    expect(wrapper).not.toBeNull();
    expect(wrapper).toHaveClass('sage-banner-wrapper--context-sage-demo');
  });

  it('renders the BannerContent when bannerContext is NOT present', () => {
    const defaultProps = {};

    render(<Banner {...defaultProps} />);

    expect(document.querySelector('.sage-banner-wrapper')).toBeNull();

    const content = document.querySelector('.sage-banner');
    expect(content).not.toBeNull();
    expect(content).toHaveClass('sage-banner');
  });
});

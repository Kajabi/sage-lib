require('../test/testHelper');

import React from 'react';
import { mount } from 'enzyme';
import { Banner } from './Banner';

describe('Sage Banner', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    component = mount(
      <Banner {...defaultProps} />
    );
  });

  it('renders the component', () => {
    defaultProps = {};
    expect(component).toHaveLength(1);
  });

  it('renders the BannerWrapper when BannerContext is present', () => {
    defaultProps = {
      bannerContext: 'sage-demo'
    };

    component = mount(
      <Banner {...defaultProps} />
    );
    const bannerWrapperFound = component.find('BannerWrapper').exists();
    expect(bannerWrapperFound).toBeTruthy();
  });

  it('renders the BannerContent when bannerContext is NOT present', () => {
    defaultProps = {};

    const bannerFound = component.find('BannerContent').exists();
    expect(bannerFound).toBeTruthy();
  });
});

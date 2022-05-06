
require('../test/testHelper');

import React from 'react';
import { mount } from 'enzyme';
import { Hero } from './Hero';

describe('Sage Banner', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    component = mount(
      <Hero {...defaultProps} />
    );
  });

  it('renders the component', () => {
    defaultProps = {};
    expect(component).toHaveLength(1);
  });
});

require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Carousel } from './Carousel';

describe('Sage Carousel', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Carousel {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Banner } from './Banner';

describe('Sage Banner', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Banner {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

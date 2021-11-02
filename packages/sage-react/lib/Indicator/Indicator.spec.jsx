require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Indicator } from './Indicator';

describe('Sage Indicator', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Indicator {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

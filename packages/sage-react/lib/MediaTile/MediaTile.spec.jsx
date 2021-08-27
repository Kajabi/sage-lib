require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Hint } from './Hint';

describe('Sage Hint', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Hint {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

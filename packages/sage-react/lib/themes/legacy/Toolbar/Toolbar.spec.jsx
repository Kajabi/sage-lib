require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Toolbar } from './Toolbar';

describe('Sage Toolbar', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      children: (
        <p>Test Toolbar</p>
      ),
    };

    component = shallow(
      <Toolbar {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from './Dropdown';

describe('Sage Dropdown', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Dropdown {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

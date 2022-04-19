require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Select } from './Select';

describe('Sage Select', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      id: 'select-1',
    };

    component = shallow(
      <Select {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('Sage Search', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      onChange: data => data,
      value: '',
    };

    component = shallow(
      <Search {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

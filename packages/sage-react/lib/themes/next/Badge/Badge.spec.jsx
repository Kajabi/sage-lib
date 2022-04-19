require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from './Badge';

describe('Sage Badge', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Badge {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

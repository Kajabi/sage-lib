require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Link } from './Link';

describe('Sage Link', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Link {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

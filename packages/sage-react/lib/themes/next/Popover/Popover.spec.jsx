require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Popover } from './Popover';

describe('Sage Popover', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Popover {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

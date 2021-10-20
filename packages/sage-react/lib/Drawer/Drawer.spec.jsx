require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Drawer } from './Drawer';

describe('Sage Drawer', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Drawer {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

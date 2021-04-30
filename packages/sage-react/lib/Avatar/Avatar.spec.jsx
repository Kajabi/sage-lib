require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from './Avatar';

describe('Sage Avatar', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Avatar {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

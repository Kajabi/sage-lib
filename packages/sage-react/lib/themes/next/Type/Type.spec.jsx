require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Type } from './Type';

describe('Sage Type', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Type {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

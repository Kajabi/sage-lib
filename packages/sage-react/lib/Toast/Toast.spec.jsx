require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Toast } from './Toast';

describe('Sage Toast', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Toast {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

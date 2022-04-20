require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Label } from './Label';

describe('Sage Label', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      value: 'Test value',
    };

    component = shallow(
      <Label {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

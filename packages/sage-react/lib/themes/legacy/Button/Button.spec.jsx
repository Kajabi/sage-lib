require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Sage Button', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Button {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

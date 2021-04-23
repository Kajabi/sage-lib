require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';

describe('Sage Input', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      id: 'input-1',
    };

    component = shallow(
      <Input {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

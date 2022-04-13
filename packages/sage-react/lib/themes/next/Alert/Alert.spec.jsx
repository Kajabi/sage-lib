require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from './Alert';

describe('Sage Alert', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      color: Alert.COLORS.INFO,
    };

    component = shallow(
      <Alert {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

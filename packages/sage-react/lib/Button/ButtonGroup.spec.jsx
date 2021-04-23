require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { ButtonGroup } from './ButtonGroup';

describe('Sage ButtonGroup', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      items: [],
    };

    component = shallow(
      <ButtonGroup {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

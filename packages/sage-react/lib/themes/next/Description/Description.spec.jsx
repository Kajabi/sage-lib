require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Description } from './Description';

describe('Sage Description', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Description {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

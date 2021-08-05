require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Choice } from './Choice';

describe('Sage Choice', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Choice {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Frame } from './Frame';

describe('Sage Frame', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Frame {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

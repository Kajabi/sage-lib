require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Property } from './Property';

describe('Sage Property', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Property {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

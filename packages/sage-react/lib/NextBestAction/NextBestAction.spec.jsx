require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { NextBestAction } from './NextBestAction';

describe('Sage NextBestAction', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <NextBestAction {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

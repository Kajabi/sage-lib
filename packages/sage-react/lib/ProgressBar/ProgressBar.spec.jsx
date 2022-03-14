require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { ProgressBar } from './ProgressBar';

describe('Sage ProgressBar', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <ProgressBar {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { CopyButton } from './CopyButton';

describe('Sage CopyButton', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <CopyButton {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { CopyText } from './CopyText';

describe('Sage CopyText', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <CopyText {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

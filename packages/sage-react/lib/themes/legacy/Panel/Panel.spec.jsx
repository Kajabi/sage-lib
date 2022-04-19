require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Panel } from './Panel';

describe('Sage Panel', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Panel {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

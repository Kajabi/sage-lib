require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Tabs } from './Tabs';

describe('Sage Tabs', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      tabs: [],
    };

    component = shallow(
      <Tabs {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

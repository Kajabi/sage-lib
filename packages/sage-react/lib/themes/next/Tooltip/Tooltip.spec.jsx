require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from './Tooltip';

describe('Sage Tooltip', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      children: (
        <p>Test tooltip</p>
      ),
    };

    component = shallow(
      <Tooltip {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

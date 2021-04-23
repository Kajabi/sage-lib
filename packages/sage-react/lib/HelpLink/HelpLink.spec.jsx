require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { HelpLink } from './HelpLink';

describe('Sage HelpLink', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <HelpLink {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

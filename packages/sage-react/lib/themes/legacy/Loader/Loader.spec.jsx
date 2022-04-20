require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from './Loader';

describe('Sage Loader', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      loading: true,
    };

    component = shallow(
      <Loader {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

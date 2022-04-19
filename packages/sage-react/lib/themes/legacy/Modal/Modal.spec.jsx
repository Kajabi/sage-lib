require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Sage Modal', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Modal {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

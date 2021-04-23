require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { PanelControls } from './PanelControls';

describe('Sage PanelControls', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      onRequestChange: (data) => data,
    };

    component = shallow(
      <PanelControls {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});

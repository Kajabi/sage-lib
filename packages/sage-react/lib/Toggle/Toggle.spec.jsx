require('test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('Rendering the Sage Toggle Component', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      id: 'test-1',
      name: 'test-1',
      type: Toggle.TYPES.RADIO,
      label: 'Testing',
      checked: true,
      onChange: jest.fn(),
    };

    component = shallow(
      <Toggle {...defaultProps} />
    );
  });

  it('renders the component', () => {
    expect(component).toHaveLength(1);
  });

  describe('checking input type', () => {
    it('has an input type of radio', () => {
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('type', Toggle.TYPES.RADIO);
    });

    it('has an input type of checkbox', () => {
      component.setProps({ type: Toggle.TYPES.CHECKBOX });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('type', Toggle.TYPES.CHECKBOX);
    });
  });

  describe('updating checked state', () => {
    it('does not render checked', () => {
      component.setProps({ checked: false });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('checked', false);
    });

    it('does render checked', () => {
      component.setProps({ checked: true });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('checked', true);
    });
  });
});

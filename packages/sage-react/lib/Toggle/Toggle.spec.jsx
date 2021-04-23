require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Toggle } from './Toggle';

describe('Sage toggle:', () => {
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

  describe('cosntruction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });

    it('renders as an li when instructed', () => {
      component.setProps({ itemInList: true });
      const listItem = component.find('li');
      expect(listItem.length).toBe(1);
    });

    it('renders a message', () => {
      let message = 'Testing message';
      component.setProps({ message });
      const messageElement = component.find('.sage-radio__message');
      expect(messageElement.length).toBe(1);
    });
  });

  describe('variations', () => {
    it('has an input type of radio', () => {
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('type', Toggle.TYPES.RADIO);
    });

    it('has an input type of checkbox', () => {
      component.setProps({ type: Toggle.TYPES.CHECKBOX });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('type', Toggle.TYPES.CHECKBOX);
    });

    it('renders standalone', () => {
      component.setProps({ standalone: true });
      const standaloneElement = component.find('.sage-radio--standalone');
      expect(standaloneElement.length).toBe(1);
      const inputElement = component.find('.sage-radio__input');
      expect(inputElement.length).toBe(0);
    });
  });

  describe('interactions', () => {
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

    it('handles input values', () => {
      /// TBD
    });
  });
});

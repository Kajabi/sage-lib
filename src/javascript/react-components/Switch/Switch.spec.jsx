require('test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

describe('Rendering the Sage Switch Component', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      type: '',
      title: '',
      isChecked: true,
      isDisabled: false,
      onUpdate: jest.fn(),
    };

    component = shallow(
      <Switch {...defaultProps} />
    );
  });

  it('renders the component', () => {
    expect(component).toHaveLength(1);
  });

  it('it has a title', () => {
    component.setProps({ title: 'Switch' });
    const label = component.find('label').get(0);
    expect(label.props).toHaveProperty('title', label.children);
  });

  it('throws an error', () => {
    component.setProps({ err: true });
    const input = component.find('input').get(0);
    expect(input.props).toHaveProperty('required', true);
  });

  describe('checking input type', () => {
    it('has an input type of radio', () => {
      component.setProps({ type: 'radio' });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('type', 'radio');
    });

    it('has an input type of checkbox', () => {
      component.setProps({ type: 'checkbox' });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('type', 'checkbox');
    });
  });

  describe('updating checked state', () => {
    it('does not render checked', () => {
      component.setProps({ isChecked: false });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('checked', false);
    });

    it('does render checked', () => {
      component.setProps({ isChecked: true });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('checked', true);
    });
  });

  describe('updating disabled state', () => {
    it('when Checkbox is disabled', () => {
      component.setProps({ isDisabled: true });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('disabled', true);
    });

    it('when Checkbox is not disabled', () => {
      component.setProps({ isDisabled: false });
      const input = component.find('input').get(0);
      expect(input.props).toHaveProperty('disabled', false);
    });
  });

  it('calls the update', () => {
    component.find('input').at(0).simulate('change',
      { target: { isDisabled: true } });
    expect(defaultProps.onUpdate).toHaveBeenCalled();
  });
});

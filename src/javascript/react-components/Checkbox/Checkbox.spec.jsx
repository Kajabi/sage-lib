require('test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Rendering the Sage Checkbox Component', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      title: 'Checkbox',
      isChecked: false,
      isDisabled: false,
      onUpdate: jest.fn()
    };

    component = shallow(
      <Checkbox {...defaultProps} />
    );
  });

  it('renders the component', () => {
    expect(component).toHaveLength(1);
  });

  it('has a title', () => {
    const label = component.find('label').get(0);
    expect(label.props).toHaveProperty('children', defaultProps.title);
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
      { target: { isChecked: true } });
    expect(defaultProps.onUpdate).toHaveBeenCalled();
  });
});

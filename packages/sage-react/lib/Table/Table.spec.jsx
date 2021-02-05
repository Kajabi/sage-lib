require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Table } from './Table';

describe('Rendering the Sage Icon Component', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
    };

    component = shallow(
      <Table {...defaultProps} />
    );
  });

  it('renders the component', () => {
    expect(component).toHaveLength(1);
  });

  describe('toggling isResponsive prop', () => {
    it('has table wrapper class', () => {
      component.setProps({ isResponsive: true });
      expect(component.find('.sage-table-wrapper__overflow')).toHaveLength(1);
    });

    it('does not have table wrapper class', () => {
      component.setProps({ isResponsive: false });
      expect(component.find('.sage-table-wrapper__overflow')).toHaveLength(0);
    });
  });

  describe('toggling resetAbove prop', () => {
    it('when resetAbove prop is true', () => {
      component.setProps({ resetAbove: true });
      expect(component.find('.sage-table-wrapper--reset-above')).toHaveLength(1);
    });

    it('when resetAbove prop is true', () => {
      component.setProps({ resetBelow: true });
      expect(component.find('.sage-table-wrapper--reset-below')).toHaveLength(1);
    });
  });

  describe('toggling selectable prop', () => {
    it('when selectable prop is true', () => {
      component.setProps({ selectable: true });
      expect(component.find('.sage-table--selectable')).toHaveLength(1);
    });

    it('when selectable prop is false', () => {
      component.setProps({ selectable: false });
      expect(component.find('.sage-table--selectable')).toHaveLength(0);
    });
  });

  describe('toggling isStriped prop', () => {
    it('when isStriped prop is true', () => {
      component.setProps({ isStriped: true });
      expect(component.find('.sage-table--striped')).toHaveLength(1);
    });

    it('when isStriped prop is false', () => {
      component.setProps({ isStriped: false });
      expect(component.find('.sage-table--striped')).toHaveLength(0);
    });
  });
});

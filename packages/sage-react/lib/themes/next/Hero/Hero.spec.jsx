
require('../test/testHelper');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Hero } from './Hero';

describe('Sage Hero', () => {
  let component,
    defaultProps;

  it('renders the component', () => {
    defaultProps = {};
    component = mount(
      <Hero {...defaultProps} />
    );
    expect(component).toHaveLength(1);
  });

  it('does not render the title tag', () => {
    defaultProps = {title: null};
    component = mount(<Hero {...defaultProps} />);
    expect(component.find('TitleTag').exists()).toBeFalsy();
  })

  it('renders the title tag', () => {
    defaultProps = {title: 'Title'};
    component = shallow(<Hero {...defaultProps} />);
    const title = component.find('.sage-hero__title');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toEqual('Title');
  })

  it('does not render branding', () => {
    defaultProps = {};
    component = mount(<Hero {...defaultProps} />);
    expect(component.find('.sage-hero__branding').exists()).toBeFalsy();
  })

  it('renders branding', () => {
    defaultProps = {branding: (<h2>Hey</h2>)};
    component = mount(<Hero {...defaultProps} />);
    let brandingDiv = component.find('.sage-hero__branding');
    expect(brandingDiv).toBeTruthy();
    expect(brandingDiv.contains(<h2>Hey</h2>)).toBeTruthy();
  })

  it('does not render description', () => {
    defaultProps = {};
    component = mount(<Hero {...defaultProps} />);
    expect(component.find('.sage-hero__description').exists()).toEqual(false);
  })

  it('render description', () => {
    defaultProps = {description: 'i suppose'};
    component = mount(<Hero {...defaultProps}/>);
    expect(component.find('.sage-hero__description').text()).toEqual('i suppose');
  });

  it('does not render footerActions', () => {
    defaultProps = {};
    component = mount(<Hero {...defaultProps} />);
    expect(component.find('.sage-hero__description').exists()).toEqual(false);
  })

  it('render footerActions', () => {
    defaultProps = {footerActions: (<div>Footer Actions</div>)};
    component = mount(<Hero {...defaultProps}/>);
    let footerActionsDiv  = component.find('.sage-hero__footer-actions');
    expect(footerActionsDiv).toBeTruthy();
    expect(footerActionsDiv.contains(<div>Footer Actions</div>)).toBeTruthy()
  });
});

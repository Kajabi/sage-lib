require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExpandableCard } from './ExpandableCard';

describe('Sage Expandable Card', () => {
  it('renders correctly when expanded property is present', () => {
    const props = {
      expanded: true
    };

    render(<ExpandableCard {...props} />);

    const wrapper = document.querySelector('.sage-expandable-card');
    expect(wrapper).not.toBeNull();
    expect(wrapper).toHaveClass('sage-expandable-card--expanded');
  });

  it('expands the accordion when the trigger is clicked', async () => {
    const props = {
      expanded: false
    };
    const user = userEvent.setup();
    render(<ExpandableCard {...props} />);

    const wrapper = document.querySelector('.sage-expandable-card');
    expect(wrapper).not.toBeNull();
    const trigger = document.querySelector('.sage-expandable-card__trigger');
    expect(trigger).not.toBeNull();

    await user.click(trigger);

    expect(wrapper).toHaveClass('sage-expandable-card--expanded');
  });

  it('closes the accordion when the trigger is clicked', async () => {
    const props = {
      expanded: true
    };
    const user = userEvent.setup();
    render(<ExpandableCard {...props} />);

    const wrapper = document.querySelector('.sage-expandable-card--expanded');
    expect(wrapper).not.toBeNull();
    const trigger = document.querySelector('.sage-expandable-card__trigger');
    expect(trigger).not.toBeNull();

    await user.click(trigger);

    expect(wrapper).not.toHaveClass('sage-expandable-card--expanded');
  });
});

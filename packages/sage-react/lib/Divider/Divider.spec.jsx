require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { Divider } from './Divider';
import { SageTokens } from '../configs';

describe('Sage Divider', () => {
  it('renders a custom color when provided', () => {
    const props = {
      color: `${SageTokens.COLORS.ORANGE_300}`,
    };
    render(<Divider {...props} />);
    const divider = document.querySelector('.sage-divider');
    const dividerStyleAttr = divider.getAttribute('style');
    expect(dividerStyleAttr).toEqual(`--sage-divider-background-color: ${props.color};`);
  });

  it('renders vertical when vertical present', () => {
    const props = {
      vertical: true,
    };
    render(<Divider {...props} />);
    const divider = document.querySelector('.sage-divider');
    const dividerClass = divider.getAttribute('class');
    expect(dividerClass).toContain('sage-divider--vertical');
  });

  it('renders offset when offset present', () => {
    const props = {
      offset: `${SageTokens.SPACERS.MD}`,
    };
    render(<Divider {...props} />);
    const divider = document.querySelector('.sage-divider');
    const dividerClassList = divider.classList;
    expect(dividerClassList).toContainEqual(`sage-divider-offset--${props.offset}`);
  });
});

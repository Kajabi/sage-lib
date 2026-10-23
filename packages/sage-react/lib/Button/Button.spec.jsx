require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Button } from './Button';

describe('Sage Button', () => {
  it('hides the icon from assistive tech in an icon-only button', () => {
    const { container } = render(
      <Button icon={SageTokens.ICONS.REMOVE} iconOnly>Remove</Button>
    );

    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('hides the disclosure caret from assistive tech', () => {
    const { container } = render(<Button disclosure>Options</Button>);

    expect(container.querySelector('pds-icon[name="caret-down"]')).toHaveAttribute('aria-hidden', 'true');
  });
});

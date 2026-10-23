require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelpLink } from './HelpLink';

describe('Sage HelpLink', () => {
  it('names the link by its text and hides the icon from assistive tech', () => {
    const { container } = render(<HelpLink href="/help" />);

    expect(screen.getByRole('link', { name: 'Learn more' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('leaves the icon exposed when there is no text', () => {
    const { container } = render(<HelpLink href="/help">{null}</HelpLink>);

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
  });
});

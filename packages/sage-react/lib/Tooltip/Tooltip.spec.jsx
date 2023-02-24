require('../test/testHelper');

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

describe('Sage Tooltip', () => {
  it('renders content when prop is set', () => {
    const defaultProps = {
      children: (
        <Button>
          button
        </Button>
      ),
      content: 'tooltip text'
    };
    render(<Tooltip {...defaultProps} />);
    const button = screen.getByRole('button');
    fireEvent.mouseOver(button);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('tooltip text');
  });

  it('renders tooltip position properly', () => {
    const defaultProps = {
      children: (
        <Button>
          button
        </Button>
      ),
      content: 'tooltip text',
      position: Tooltip.POSITIONS.DEFAULT,
    };
    render(<Tooltip {...defaultProps} />);
    const button = screen.getByRole('button');
    fireEvent.mouseOver(button);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveClass('sage-tooltip--top');
  });

  const handleClick = jest.fn();

  it('properly handles an event when passed one', () => {
    const defaultProps = {
      children: (
        <Button onClick={handleClick}>
          Button
        </Button>
      ),
      content: 'hello world',
      position: Tooltip.POSITIONS.DEFAULT,
    };

    render(<Tooltip {...defaultProps} />);
    const button = screen.getByRole('button');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

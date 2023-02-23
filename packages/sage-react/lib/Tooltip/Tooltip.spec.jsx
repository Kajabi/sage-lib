require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

const handleClick = jest.fn();

describe('Sage Tooltip', () => {
  it('properly handles an event when passed one', () => {
    const defaultProps = {
      children: (
        <Button onClick={handleClick}>
          Button
        </Button>
      ),
      content: 'Hello world!',
      position: Tooltip.POSITIONS.DEFAULT,
      size: Tooltip.SIZES.DEFAULT,
      theme: Tooltip.THEMES.DEFAULT,
    };

    render(<Tooltip {...defaultProps} />);
    const button = screen.getByRole('button');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

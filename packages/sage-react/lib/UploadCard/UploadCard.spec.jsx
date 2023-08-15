require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { UploadCard } from './UploadCard';

describe('Sage Upload Card', () => {
  it('renders with correct selection subtext when prop is set', () => {
    const defaultProps = {
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const selectionSubtext = document.querySelector('.sage-upload-card__filename');
    expect(selectionSubtext).toHaveTextContent('Upload a .csv up to 10KB');
  });

  it('renders with correct selection label when prop is set', () => {
    const defaultProps = {
      selectionLabel: 'Select a file',
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const selectionLabel = document.querySelector('.sage-upload-card__input-label');
    expect(selectionLabel).toHaveTextContent('Select a file');
  });

  it('renders with correct replace label when prop is set', () => {
    const defaultProps = {
      replaceLabel: 'Replace file',
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const replaceLabel = document.querySelector('.sage-upload-card__input-label');
    expect(replaceLabel).toHaveTextContent('Select a file');
  });

  it('renders with replace label when both label props are set', () => {
    const defaultProps = {
      replaceLabel: 'Replace file',
      selectionLabel: 'Select a file',
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const replaceLabel = document.querySelector('.sage-upload-card__input-label');
    expect(replaceLabel).toHaveTextContent('Select a file');
  });

  it('renders with preview image when prop is set', () => {
    const defaultProps = {
      previewImage: {
        alt: 'cat',
        src: 'https://placekitten.com/360',
      },
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const previewImage = document.querySelector('.sage-upload-card__preview');
    expect(previewImage).not.toBeNull();
    expect(previewImage).toHaveAttribute('src', 'https://placekitten.com/360');
    expect(previewImage).toHaveAttribute('alt', 'cat');
  });

  it('renders with actions when prop is set', () => {
    const defaultProps = {
      actions: (
        <Button
          color={Button.COLORS.SECONDARY}
          icon={SageTokens.ICONS.CARET_DOWN}
          iconPosition={Button.ICON_POSITIONS.RIGHT}
        >
          Select a file
        </Button>
      ),
      customFileInputField: true,
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const actions = document.querySelector('.sage-btn');
    expect(actions).not.toBeNull();
  });

  it('renders with errors when prop is set', () => {
    const defaultProps = {
      errors: [
        {
          message: 'This is the error message.',
        },
      ],
      previewImage: {
        alt: 'cat',
        src: 'https://placekitten.com/360',
      },
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const errors = document.querySelector('.sage-upload-card__errors');
    expect(errors).not.toBeNull();
    expect(errors).toHaveTextContent('This is the error message.');
  });

  it('renders in stacked layout when prop is set', () => {
    const defaultProps = {
      stacked: true,
      selectionSubtext: 'Upload a .csv up to 10KB',
    };

    render(<UploadCard {...defaultProps} />);

    const uploadCard = document.querySelector('.sage-upload-card');
    expect(uploadCard).toHaveClass('sage-upload-card--stack-only');
  });
});

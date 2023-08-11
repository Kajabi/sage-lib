import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconCard } from '../IconCard';

export const UploadCard = ({
  actions,
  acceptedFiles,
  className,
  customFileInputField,
  errors,
  id,
  inputProps,
  previewImage,
  replaceLabel,
  rootProps,
  selectionLabel,
  selectionSubtext,
  stacked,
  ...rest
}) => {
  const [filesSelected, updateFilesSelected] = useState(acceptedFiles && acceptedFiles.length > 0);
  useEffect(() => {
    updateFilesSelected(acceptedFiles && acceptedFiles.length > 0);
  }, [acceptedFiles, updateFilesSelected]);

  const classNames = classnames(
    'sage-upload-card',
    className,
    {
      'sage-upload-card--selected': filesSelected,
      'sage-upload-card--error': errors,
      'sage-upload-card--stack-only': stacked,
    }
  );

  const renderDefaultInputField = () => (
    !customFileInputField && (
      <input className="sage-upload-card__input" {...inputProps} />
    )
  );

  const renderPreviewImage = () => (
    previewImage ? (
      <img className="sage-upload-card__preview" alt={previewImage.alt} src={previewImage.src} />
    ) : (
      <IconCard
        className="sage-upload-card__preview"
        color={IconCard.COLORS.DRAFT}
        icon={IconCard.ICONS.FILE}
        size={IconCard.SIZES.XL}
      />
    )
  );

  const renderLabel = () => {
    if ((selectionLabel || replaceLabel) && !customFileInputField) {
      return (
        <>
          <label htmlFor={id} className="sage-upload-card__input-label sage-btn sage-btn--secondary">{selectionLabel || replaceLabel}</label>
        </>
      );
    }

    if (actions) {
      if (!customFileInputField) {
        return (
          <label htmlFor={id} className="visually-hidden">{selectionLabel || replaceLabel}</label>
        );
      }
      return actions;
    }
  };

  return (
    <div className={classNames} {...rest}>
      <div className="sage-upload-card__dropzone" {...rootProps}>
        {renderDefaultInputField()}
        {filesSelected ? (
          <>
            {renderPreviewImage()}
            <div className="sage-upload-card__body">
              <div className="sage-upload-card__description">
                {acceptedFiles.map(({ name }, i) => {
                  // Limit to one file for now
                  if (i > 0) {
                    return null;
                  }

                  return (
                    <React.Fragment key={name}>
                      <p className="sage-upload-card__filename">
                        {name}
                      </p>
                      {renderLabel()}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            <IconCard
              className="sage-upload-card__preview"
              color={IconCard.COLORS.DRAFT}
              icon={IconCard.ICONS.FILE}
              size={IconCard.SIZES.XL}
            />
            <div className="sage-upload-card__body">
              <div className="sage-upload-card__description">
                <p className="sage-upload-card__filename">
                  {selectionSubtext}
                </p>
                {renderLabel()}
              </div>
            </div>
          </>
        )}
      </div>
      {errors && (
        <div className="sage-upload-card__errors">
          {errors.map(({ code, message }) => (
            <p key={code}>{message}</p>
          ))}
        </div>
      )}
    </div>
  );
};

UploadCard.defaultProps = {
  acceptedFiles: [],
  actions: null,
  className: null,
  customFileInputField: false,
  errors: null,
  id: null,
  inputProps: null,
  previewImage: null,
  replaceLabel: 'Replace file',
  rootProps: null,
  selectionLabel: 'Select a file',
  selectionSubtext: null,
  stacked: false,
};

UploadCard.propTypes = {
  acceptedFiles: PropTypes.arrayOf(PropTypes.shape),
  actions: PropTypes.node,
  className: PropTypes.string,
  customFileInputField: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    message: PropTypes.string,
  })),
  id: PropTypes.string,
  inputProps: PropTypes.shape({}),
  previewImage: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  replaceLabel: PropTypes.string,
  rootProps: PropTypes.shape({}),
  selectionLabel: PropTypes.string,
  selectionSubtext: PropTypes.string,
  stacked: PropTypes.bool
};

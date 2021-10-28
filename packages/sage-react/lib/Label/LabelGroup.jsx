import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LABEL_GROUP_ALIGN_OPTIONS, LABEL_GROUP_GAP_OPTIONS } from './configs';

export const LabelGroup = ({
  align,
  children,
  className,
  gap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-label-group',
    className,
    {
      [`sage-label-group--align-${align}`]: align,
      [`sage-label-group--gap-${gap}`]: gap
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

LabelGroup.ALIGN_OPTIONS = LABEL_GROUP_ALIGN_OPTIONS;
LabelGroup.GAP_OPTIONS = LABEL_GROUP_GAP_OPTIONS;

LabelGroup.defaultProps = {
  align: LabelGroup.ALIGN_OPTIONS.NONE,
  className: null,
  children: null,
  gap: LabelGroup.GAP_OPTIONS.NONE
};

LabelGroup.propTypes = {
  align: PropTypes.oneOf(Object.values(LabelGroup.ALIGN_OPTIONS)),
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.oneOf(Object.values(LabelGroup.GAP_OPTIONS)),
};

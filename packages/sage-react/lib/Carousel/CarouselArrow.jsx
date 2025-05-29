import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';

export const CarouselArrow = ({
  disabled,
  icon,
  id,
  onClickCallback,
  ...rest
}) => {
  const baseClass = 'sage-carousel__arrow';
  const classNames = classnames(
    baseClass,
    {
      [`${baseClass}--${id}`]: id,
      [`${baseClass}--disabled`]: disabled,
    }
  );
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classNames}
      onClick={onClickCallback}
      role="button"
      tabIndex={-1}
      {...rest}
    >
      <Icon icon={icon} size="lg" />
    </div>
  );
};

CarouselArrow.defaultProps = {
  disabled: false,
};

CarouselArrow.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};

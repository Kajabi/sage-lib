import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

export const CarouselArrow = ({
  icon,
  id,
  onClickCallback,
  onKeyDownCallback,
}) => (
  <div
    className={`sage-carousel__arrow sage-carousel__arrow--${id}`}
    onClick={onClickCallback}
    onKeyDown={onKeyDownCallback}
    role="button"
    tabIndex={-1}
  >
    <Icon icon={icon} size="lg" />
  </div>
);

CarouselArrow.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  onKeyDownCallback: PropTypes.func.isRequired,
};

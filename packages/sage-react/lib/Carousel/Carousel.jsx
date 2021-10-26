import { tns } from 'tiny-slider/src/tiny-slider';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';

export const Carousel = ({
  children,
  options,
}) => {
  const baseClass = 'sage-carousel';
  const classNames = classnames(
    baseClass
  );

  useEffect(() => {
    tns({
      ...options,
      container: '.sage-carousel__carousel',
    });
  }, [options]);

  return (
    <div className={classNames}>
      <div className="sage-carousel__container">
        <div className="sage-carousel__arrow sage-carousel__arrow--prev">
          <Icon icon="caret-left" size="lg" />
        </div>
        <div className="sage-carousel__sizer">
          <div className="sage-carousel__carousel">
            {children}
          </div>
        </div>
        <div className="sage-carousel__arrow sage-carousel__arrow--next">
          <Icon icon="caret-right" size="lg" />
        </div>
      </div>
      <div className="sage-carousel__dots" />
    </div>
  );
};

Carousel.defaultProps = {
  children: null,
  options: null,
};

Carousel.propTypes = {
  children: PropTypes.node,
  options: PropTypes.shape({}),
};

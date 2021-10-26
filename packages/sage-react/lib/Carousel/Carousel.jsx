import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Carousel = ({
  options,
}) => {
  const baseClass = 'sage-carousel';

  const classNames = classnames(
    baseClass
  );

  return (
    <div className={classNames} options={options}>
      <h1>Hello, world!</h1>
    </div>
  );
};

Carousel.defaultProps = {
  options: null,
};

Carousel.propTypes = {
  options: PropTypes.string,
};

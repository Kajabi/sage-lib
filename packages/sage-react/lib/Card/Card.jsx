import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Loader from '../Loader';
import CardFooter from './CardFooter';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const Card = ({
  children,
  className,
  loading,
  borderDashed,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card',
    className,
    {
      'sage-card--border-dashed': borderDashed
    }
  );

  return (
    <div className={classNames} {...rest}>
      {loading ? (
        <Loader loading={true} fillSpace={true} shape={Loader.SHAPES.SPINNER} />
      ) : children}
    </div>
  );
};

Card.Footer = CardFooter;
Card.Image = CardImage;
Card.Title = CardTitle;

Card.defaultProps = {
  children: null,
  className: null,
  loading: false,
  borderDashed: false,
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
  borderDashed: PropTypes.bool,
};

export default Card;

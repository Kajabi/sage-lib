import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Loader from '../Loader';
import CardBlock from './CardBlock';
import CardDivider from './CardDivider';
import CardFigure from './CardFigure';
import CardFooter from './CardFooter';
import CardImage from './CardImage';
import CardList from './CardList';
import CardRow from './CardRow';
import CardStack from './CardStack';
import CardTitle from './CardTitle';

const Card = ({
  children,
  className,
  clearPaddingBottom,
  clearPaddingLeft,
  clearPaddingRight,
  clearPaddingTop,
  loading,
  borderDashed,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card',
    className,
    {
      'sage-card--border-dashed': borderDashed,
      'sage-card--clear-padding-bottom': clearPaddingBottom,
      'sage-card--clear-padding-left': clearPaddingLeft,
      'sage-card--clear-padding-right': clearPaddingRight,
      'sage-card--clear-padding-top': clearPaddingTop,
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

Card.Block = CardBlock;
Card.Divider = CardDivider;
Card.Figure = CardFigure;
Card.Footer = CardFooter;
Card.Image = CardImage;
Card.List = CardList;
Card.Row = CardRow;
Card.Stack = CardStack;
Card.Title = CardTitle;

Card.defaultProps = {
  children: null,
  className: null,
  clearPaddingBottom: false,
  clearPaddingLeft: false,
  clearPaddingRight: false,
  clearPaddingTop: false,
  loading: false,
  borderDashed: false,
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  clearPaddingBottom: PropTypes.bool,
  clearPaddingLeft: PropTypes.bool,
  clearPaddingRight: PropTypes.bool,
  clearPaddingTop: PropTypes.bool,
  loading: PropTypes.bool,
  borderDashed: PropTypes.bool,
};

export default Card;

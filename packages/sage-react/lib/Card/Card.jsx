import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Loader } from '../Loader';
import { CardBlock } from './CardBlock';
import { CardDivider } from './CardDivider';
import { CardFigure } from './CardFigure';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import { CardHighlight } from './CardHighlight';
import { CardImage } from './CardImage';
import { CardList } from './CardList';
import { CardRow } from './CardRow';
import { CardStack } from './CardStack';
import { CardTitle } from './CardTitle';

export const Card = ({
  compact,
  children,
  className,
  clearPaddingBottom,
  clearPaddingLeft,
  clearPaddingRight,
  clearPaddingTop,
  interactive,
  loading,
  borderDashed,
  testId,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card',
    className,
    {
      'sage-card--border-dashed': borderDashed,
      'sage-card--compact': compact,
      'sage-card--clear-padding-bottom': clearPaddingBottom,
      'sage-card--clear-padding-left': clearPaddingLeft,
      'sage-card--clear-padding-right': clearPaddingRight,
      'sage-card--clear-padding-top': clearPaddingTop,
      'sage-card--interactive': interactive
    }
  );

  return (
    <div className={classNames} {...rest}>
      {loading ? (
        <Loader loading={true} fillSpace={true} type={Loader.TYPES.SPINNER} />
      ) : children}
    </div>
  );
};

Card.Block = CardBlock;
Card.Divider = CardDivider;
Card.Figure = CardFigure;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Highlight = CardHighlight;
Card.Image = CardImage;
Card.List = CardList;
Card.Row = CardRow;
Card.Stack = CardStack;
Card.Title = CardTitle;

Card.defaultProps = {
  compact: false,
  children: null,
  className: null,
  clearPaddingBottom: false,
  clearPaddingLeft: false,
  clearPaddingRight: false,
  clearPaddingTop: false,
  interactive: false,
  loading: false,
  borderDashed: false,
  testId: null,
};

Card.propTypes = {
  compact: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  clearPaddingBottom: PropTypes.bool,
  clearPaddingLeft: PropTypes.bool,
  clearPaddingRight: PropTypes.bool,
  clearPaddingTop: PropTypes.bool,
  interactive: PropTypes.bool,
  loading: PropTypes.bool,
  borderDashed: PropTypes.bool,
  testId: PropTypes.string,
};

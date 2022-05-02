import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import {
  FRAME_ALIGNMENTS,
  FRAME_BORDERS,
  FRAME_BORDER_RADII,
  FRAME_DIRECTIONS,
  FRAME_SPACINGS,
  FRAME_WIDTHS,
} from './configs';

export const Frame = ({
  children,
  className,
  align,
  background,
  border,
  borderRadius,
  direction,
  gap,
  padding,
  tag,
  width,
  widthRatio,
  ...rest
}) => {
  const classNames = classnames(
    'sage-frame',
    className,
    {
      [`sage-frame--align-${align}`]: align,
      [`sage-frame--background-${background}`]: background,
      [`sage-frame--border-${border}`]: border,
      [`sage-frame--border-radius-${borderRadius}`]: borderRadius,
      [`sage-frame--direction-${direction}`]: direction,
      [`sage-frame--gap-${gap}`]: gap,
      [`sage-frame--padding-${padding}`]: padding,
      [`sage-frame--width-${width}`]: width,
    }
  );

  const Tag = tag;

  const styles = {};

  if (!Object.values(FRAME_WIDTHS).includes(width)) {
    styles['--sage-frame-width'] = width;
  }

  if (!Object.values(SageTokens.COLOR_SLIDERS).includes(background)) {
    styles['--sage-frame-background'] = background;
  }

  if (widthRatio) {
    styles.flex = widthRatio;
  }

  return (
    <Tag
      className={classNames}
      style={styles}
      {...rest}
    >
      {children}
    </Tag>
  );
};

Frame.ALIGNMENTS = FRAME_ALIGNMENTS;
Frame.BORDERS = FRAME_BORDERS;
Frame.BORDER_RADII = FRAME_BORDER_RADII;
Frame.DIRECTIONS = FRAME_DIRECTIONS;
Frame.GAPS = FRAME_SPACINGS;
Frame.PADDINGS = FRAME_SPACINGS;
Frame.WIDTHS = FRAME_WIDTHS;

Frame.defaultProps = {
  align: FRAME_ALIGNMENTS.TOP_LEFT,
  background: 'transparent',
  border: FRAME_BORDERS.NONE,
  borderRadius: FRAME_BORDER_RADII.NONE,
  children: null,
  className: '',
  direction: FRAME_DIRECTIONS.VERTICAL,
  gap: FRAME_SPACINGS.MD,
  padding: FRAME_SPACINGS.NONE,
  tag: 'div',
  width: FRAME_WIDTHS.FLEX,
  widthRatio: null,
};

Frame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(Object.values(FRAME_ALIGNMENTS)),
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(SageTokens.COLOR_SLIDERS)),
  ]),
  border: PropTypes.oneOf(Object.values(Frame.BORDERS)),
  borderRadius: PropTypes.oneOf(Object.values(Frame.BORDER_RADII)),
  direction: PropTypes.oneOf(Object.values(Frame.DIRECTIONS)),
  gap: PropTypes.oneOf(Object.values(Frame.GAPS)),
  padding: PropTypes.oneOf(Object.values(Frame.PADDINGS)),
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(Frame.WIDTHS)),
  ]),
  widthRatio: PropTypes.string,
};

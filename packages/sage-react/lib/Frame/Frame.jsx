import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import {
  FRAME_ALIGNMENTS,
  FRAME_BORDERS,
  FRAME_BORDER_RADII,
  FRAME_BOX_SHADOWS,
  FRAME_DIRECTIONS,
  FRAME_SPACINGS,
  FRAME_WIDTHS,
  FRAME_WRAPS,
} from './configs';

export const Frame = ({
  children,
  className,
  align,
  background,
  border,
  borderRadius,
  boxShadow,
  direction,
  gap,
  maxWidth,
  minWidth,
  padding,
  tag,
  width,
  widthRatio,
  wrap,
  ...rest
}) => {
  const Tag = tag;
  const hasCustomBackground = background
    && !Object.values(SageTokens.COLOR_SLIDERS).includes(background);
  const hasCustomWidth = width
    && !Object.values(FRAME_WIDTHS).includes(width);
  const hasCustomMaxWidth = maxWidth
    && !Object.values(FRAME_WIDTHS).includes(maxWidth);
  const hasCustomMinWidth = minWidth
    && !Object.values(FRAME_WIDTHS).includes(minWidth);

  const classNames = classnames(
    'sage-frame',
    className,
    {
      [`sage-frame--align-${align}`]: align,
      'sage-frame--background-custom': hasCustomBackground,
      [`sage-frame--background-${background}`]: background && !hasCustomBackground,
      [`sage-frame--border-${border}`]: border,
      [`sage-frame--border-radius-${borderRadius}`]: borderRadius,
      [`sage-frame--box-shadow-${boxShadow}`]: boxShadow,
      [`sage-frame--direction-${direction}`]: direction,
      [`sage-frame--gap-${gap}`]: gap,
      [`sage-frame--padding-${padding}`]: padding,
      'sage-frame--width-custom': hasCustomWidth,
      [`sage-frame--width-${width}`]: width && !hasCustomWidth,
      'sage-frame--max-width-custom': hasCustomMaxWidth,
      [`sage-frame--max-width-${maxWidth}`]: maxWidth && !hasCustomMaxWidth,
      'sage-frame--min-width-custom': hasCustomMinWidth,
      [`sage-frame--min-width-${minWidth}`]: minWidth && !hasCustomMinWidth,
      [`sage-frame--wrap-${wrap}`]: wrap,
    }
  );

  const { style } = rest;
  const styles = style || {};

  if (width && !Object.values(FRAME_WIDTHS).includes(width)) {
    styles['--sage-frame-width'] = width;
  }

  if (hasCustomMaxWidth) {
    styles['--sage-frame-max-width'] = maxWidth;
  }

  if (hasCustomMinWidth) {
    styles['--sage-frame-min-width'] = minWidth;
  }

  if (hasCustomBackground) {
    styles['--sage-frame-background'] = background;
  }

  if (widthRatio) {
    styles.flex = widthRatio;
  }

  return (
    <Tag
      className={classNames}
      {...rest}
      style={styles}
    >
      {children}
    </Tag>
  );
};

Frame.ALIGNMENTS = FRAME_ALIGNMENTS;
Frame.BORDERS = FRAME_BORDERS;
Frame.BOX_SHADOWS = FRAME_BOX_SHADOWS;
Frame.BORDER_RADII = FRAME_BORDER_RADII;
Frame.DIRECTIONS = FRAME_DIRECTIONS;
Frame.GAPS = FRAME_SPACINGS;
Frame.PADDINGS = FRAME_SPACINGS;
Frame.WIDTHS = FRAME_WIDTHS;
Frame.WRAPS = FRAME_WRAPS;

Frame.defaultProps = {
  align: null,
  background: null,
  border: null,
  borderRadius: null,
  boxShadow: null,
  children: null,
  className: '',
  direction: FRAME_DIRECTIONS.VERTICAL,
  gap: FRAME_SPACINGS.MD,
  maxWidth: null,
  minWidth: null,
  padding: null,
  tag: 'div',
  width: null,
  widthRatio: null,
  wrap: null,
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
  boxShadow: PropTypes.oneOf(Object.values(Frame.BOX_SHADOWS)),
  direction: PropTypes.oneOf(Object.values(Frame.DIRECTIONS)),
  gap: PropTypes.oneOf(Object.values(Frame.GAPS)),
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(Frame.WIDTHS)),
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(Frame.WIDTHS)),
  ]),
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
  wrap: PropTypes.oneOf(Object.values(Frame.WRAPS)),
};

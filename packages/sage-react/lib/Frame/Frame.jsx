import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { responsiveSchema, responsiveSettings } from '../helpers';
import { SageTokens } from '../configs';
import {
  FRAME_ALIGNMENTS,
  FRAME_BORDERS,
  FRAME_BORDER_RADII,
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

  let backgrounds = null;
  const customBackgrounds = {};
  const customMaxWidths = {};
  const customMinWidths = {};
  const customWidths = {};
  let hasCustomStyles = !!rest.styles;
  let isCustomBackground = false;
  let isCustomMaxWidth = false;
  let isCustomMinWidth = false;
  let isCustomWidth = false;
  let maxWidths = null;
  let minWidths = null;
  let widths = null;

  if (background) {
    // Ensure backgrounds is a hash first
    backgrounds = typeof background === 'object' ? background : { default: background };

    // For each custom background, move it to a separate hash
    Object.keys(backgrounds).forEach((key) => {
      if (!Object.values(SageTokens.COLOR_SLIDERS).includes(backgrounds[key])) {
        hasCustomStyles = true;
        isCustomBackground = true;
        customBackgrounds[key] = backgrounds[key];
        backgrounds[key] = 'custom';
      }
    });
  }

  if (maxWidth) {
    // Ensure max widths is a hash first
    maxWidths = typeof maxWidth === 'object' ? maxWidth : { default: maxWidth };

    // For each custom max width, move it to a separate hash
    Object.keys(maxWidths).forEach((key) => {
      if (!Object.values(FRAME_WIDTHS).includes(maxWidths[key])) {
        hasCustomStyles = true;
        isCustomMaxWidth = true;
        customMaxWidths[key] = maxWidths[key];
        maxWidths[key] = 'custom';
      }
    });
  }

  if (minWidth) {
    // Ensure min widths is a hash first
    minWidths = typeof minWidth === 'object' ? minWidth : { default: minWidth };

    // For each custom min width, move it to a separate hash
    Object.keys(minWidths).forEach((key) => {
      if (!Object.values(FRAME_WIDTHS).includes(minWidths[key])) {
        hasCustomStyles = true;
        isCustomMinWidth = true;
        customMinWidths[key] = minWidths[key];
        minWidths[key] = 'custom';
      }
    });
  }

  if (width) {
    // Ensure widths is a hash first
    widths = typeof width === 'object' ? width : { default: width };

    // For each custom width, move it to a separate hash
    Object.keys(widths).forEach((key) => {
      if (!Object.values(FRAME_WIDTHS).includes(widths[key])) {
        hasCustomStyles = true;
        isCustomWidth = true;
        customWidths[key] = widths[key];
        widths[key] = 'custom';
      }
    });
  }

  if (widthRatio) {
    hasCustomStyles = true;
  }

  const classNames = classnames(
    'sage-frame',
    className,
    responsiveSettings({
      value: align,
      template: 'sage-frame--{0}align-{1}'
    }),
    responsiveSettings({
      value: background,
      template: 'sage-frame--{0}background-{1}'
    }),
    responsiveSettings({
      value: border,
      template: 'sage-frame--{0}border-{1}'
    }),
    responsiveSettings({
      value: borderRadius,
      template: 'sage-frame--{0}border-radius-{1}'
    }),
    responsiveSettings({
      value: direction,
      template: 'sage-frame--{0}direction-{1}'
    }),
    responsiveSettings({
      value: gap,
      template: 'sage-frame--{0}gap-{1}'
    }),
    responsiveSettings({
      value: padding,
      template: 'sage-frame--{0}padding-{1}'
    }),
    responsiveSettings({
      value: widths,
      template: 'sage-frame--{0}width-{1}',
    }),
    responsiveSettings({
      value: maxWidths,
      template: 'sage-frame--{0}max-width-{1}'
    }),
    responsiveSettings({
      value: minWidths,
      template: 'sage-frame--{0}min-width-{1}'
    }),
    responsiveSettings({
      value: wrap,
      template: 'sage-frame--{0}wrap-{1}'
    }),
    responsiveSettings({
      value: widthRatio,
      template: 'sage-frame--{0}width-ratio'
    }),
  );

  const { style } = rest;
  let styles = style || {};

  if (hasCustomStyles) {
    styles = Object.assign(
      styles,
      responsiveSettings({
        value: customWidths,
        value_condition: isCustomWidth,
        template: '--sage-frame-{0}width',
        type: 'object',
      }),
      responsiveSettings({
        value: customMaxWidths,
        value_condition: isCustomMaxWidth,
        template: '--sage-frame-{0}max-width',
        type: 'object',
      }),
      responsiveSettings({
        value: customMinWidths,
        value_condition: isCustomMinWidth,
        template: '--sage-frame-{0}min-width',
        type: 'object',
      }),
      responsiveSettings({
        value: customBackgrounds,
        value_condition: isCustomBackground,
        template: '--sage-frame-{0}background-custom',
        type: 'object',
      }),
      responsiveSettings({
        value: widthRatio,
        template: '--sage-frame-{0}width-ratio',
        type: 'object',
      })
    );
  }

  console.log('classnames', classnames);
  console.log('styles', styles);

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
  children: responsiveSchema(PropTypes.node),
  className: responsiveSchema(PropTypes.string),
  align: responsiveSchema(PropTypes.oneOf(Object.values(FRAME_ALIGNMENTS))),
  background: responsiveSchema(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(SageTokens.COLOR_SLIDERS)),
  ])),
  border: responsiveSchema(PropTypes.oneOf(Object.values(Frame.BORDERS))),
  borderRadius: responsiveSchema(PropTypes.oneOf(Object.values(Frame.BORDER_RADII))),
  direction: responsiveSchema(PropTypes.oneOf(Object.values(Frame.DIRECTIONS))),
  gap: responsiveSchema(PropTypes.oneOf(Object.values(Frame.GAPS))),
  maxWidth: responsiveSchema(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(Frame.WIDTHS)),
  ])),
  minWidth: responsiveSchema(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(Frame.WIDTHS)),
  ])),
  padding: responsiveSchema(PropTypes.oneOf(Object.values(Frame.PADDINGS))),
  tag: responsiveSchema(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
  ])),
  width: responsiveSchema(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(Frame.WIDTHS)),
  ])),
  widthRatio: responsiveSchema(PropTypes.string),
  wrap: responsiveSchema(PropTypes.oneOf(Object.values(Frame.WRAPS))),
};

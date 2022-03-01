import React from 'react';
import {
  Card,
  SageClassnames,
  SageTokens
} from '../../..';

export const ProductColorPickerCard = ({
  title,
  subtext,
  color,
  onChangeColor,
}) => (
  <Card>
    <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.TE}>
      <Card.Stack>
        <h6 className={`${SageClassnames.TYPE.HEADING_6}`}>
          {title}
        </h6>
        <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
          {subtext}
        </p>
      </Card.Stack>
      {/* TODO: Color picker goes here and sync changes with SVG graphic through `onChangeColor` */}
    </Card.Row>
  </Card>
);

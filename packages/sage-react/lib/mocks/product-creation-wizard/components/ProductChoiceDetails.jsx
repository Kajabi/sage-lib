import React from 'react';
import {
  Card,
  Property,
  SageClassnames,
  SageTokens
} from '../../..';

export const ProductChoiceDetails = ({
  title,
  body,
  leftFeatures,
  rightFeatures,
}) => (
  <>
    <Card.Stack>
      <h5 className={SageClassnames.TYPE.HEADING_5}>
        {title}
      </h5>
      <p className={`${SageClassnames.TYPE.BODY} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
        {body}
      </p>
    </Card.Stack>
    <Card.Stack>
      <h6 className={SageClassnames.TYPE.HEADING_6}>
        Features
      </h6>
      <Card.Row
        gridTemplate={SageTokens.GRID_TEMPLATES.M}
        style={{ width: '100%' }}
        verticalAlign={Card.Row.ALIGNMENT_OPTIONS.START}
      >
        <Card.Stack>
          {leftFeatures.map(({ icon, label }) => (
            <Property icon={icon}>{label}</Property>
          ))}
        </Card.Stack>
        <Card.Stack>
          {rightFeatures.map(({ icon, label }) => (
            <Property icon={icon}>{label}</Property>
          ))}
        </Card.Stack>
      </Card.Row>
    </Card.Stack>
  </>
);

import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Property,
  SageClassnames,
  SageTokens
} from '../../..';

export const ProductChoiceDetails = ({
  body,
  leftFeatures,
  rightFeatures,
  title,
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

ProductChoiceDetails.defaultProps = {
  body: '',
  leftFeatures: [],
  rightFeatures: [],
  title: '',
};

ProductChoiceDetails.propTypes = {
  body: PropTypes.string,
  leftFeatures: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
    label: PropTypes.string,
  })),
  rightFeatures: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
    label: PropTypes.string,
  })),
  title: PropTypes.string,
};

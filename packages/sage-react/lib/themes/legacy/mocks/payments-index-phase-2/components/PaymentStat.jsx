import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Icon,
  Label,
  Panel,
  SageClassnames,
  Tooltip,
} from '../../..';
import {  } from '../../../Icon';

export const PaymentStat = ({
  change,
  subtext,
  title,
  tooltip,
  value,
}) => (
  <Panel>
    <Panel.Block>
      <Card.Row gridTemplate="te" className={`${SageClassnames.SPACERS.SM_BOTTOM}`}>
        <h4 className={`${SageClassnames.TYPE.HEADING_5}`}>
          {title}
        </h4>
        <Tooltip content={tooltip}>
          <Icon icon={Icon.ICONS.INFO_CIRCLE} />
        </Tooltip>
      </Card.Row>
      <Card.Row gridTemplate="et" gap="xs">
        <p class={`${SageClassnames.TYPE.HEADING_2} ${SageClassnames.TYPE_COLORS.CHARCOAL_500}`}>
          {value}
        </p>
        {change && <Label {...change} />}
      </Card.Row>
      <p class={`${SageClassnames.TYPE.BODY_XSMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
        {subtext}
      </p>
    </Panel.Block>
  </Panel>
);

PaymentStat.defaultProps = {
  change: null,
  subtext: null,
  tooltip: null,
  value: 0,
};

PaymentStat.propTypes = {
  change: PropTypes.shape({}),
  subtext: PropTypes.string,
  title: PropTypes.string,
  tooltip: PropTypes.string,
  value: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
};

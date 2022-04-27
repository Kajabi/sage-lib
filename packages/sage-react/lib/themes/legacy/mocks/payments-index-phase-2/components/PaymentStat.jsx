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
import { SageTokens } from '../../../configs';

export const PaymentStat = ({
  change,
  subtext,
  title,
  tooltip,
  value,
}) => (
  <Panel>
    <Panel.Block>
      {title && (
        <Card.Row
          gridTemplate={SageTokens.GRID_TEMPLATES.TE}
          className={`${SageClassnames.SPACERS.SM_BOTTOM}`}
        >
          <h4 className={`${SageClassnames.TYPE.HEADING_5}`}>
            {title}
          </h4>
          {tooltip && (
            <Tooltip content={tooltip}>
              <Icon icon={Icon.ICONS.INFO_CIRCLE} />
            </Tooltip>
          )}
        </Card.Row>
      )}
      <Card.Row
        gridTemplate={SageTokens.GRID_TEMPLATES.ET}
        gap={SageTokens.GRID_GAP_OPTIONS.XS}
      >
        <p className={`${SageClassnames.TYPE.HEADING_2} ${SageClassnames.TYPE_COLORS.CHARCOAL_500}`}>
          {value}
        </p>
        {change && <Label {...change} />}
      </Card.Row>
      {subtext && (
        <p className={`${SageClassnames.TYPE.BODY_XSMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
          {subtext}
        </p>
      )}
    </Panel.Block>
  </Panel>
);

PaymentStat.defaultProps = {
  change: null,
  subtext: null,
  title: null,
  tooltip: null,
  value: 0,
};

PaymentStat.propTypes = {
  change: PropTypes.shape({}),
  subtext: PropTypes.string,
  title: PropTypes.string,
  tooltip: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

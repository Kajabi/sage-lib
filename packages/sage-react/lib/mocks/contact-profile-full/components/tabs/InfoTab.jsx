import React from 'react';
import {
  Card,
  Icon,
  Panel,
  SageClassnames,
  SageTokens,
} from '../../../..';
import { Button } from '../../../../Button';
import { infoData } from '../../dataHelper';

export const InfoTab = () => {
  const renderDataColumns = (data) => data.map(({ label, value }) => (
    <dl style={{ width: '112px' }}>
      <dt
        className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}
      >
        {label}
      </dt>
      <dd
        className={`${SageClassnames.TYPE.BODY_SEMI} ${SageClassnames.TYPE_COLORS.CHARCOAL_500}`}
      >
        {value}
      </dd>
    </dl>
  ));

  const renderLifecycleIcon = ({ failed, type }) => {
    let icon = null;
    switch (type) {
      case 'grant':
        icon = SageTokens.ICONS.FILE_MONEY;
        break;
      case 'purchase':
      default:
        // TODO: Need unlock icon
        icon = SageTokens.ICONS.BAN;
        break;
    }

    return <Icon icon={icon} color={failed ? Icon.COLORS.RED : Icon.COLORS.CHARCOAL_500} />
  }

  return (
    <>
      <div className={SageClassnames.PANEL_GRID}>
        <h4 className={SageClassnames.TYPE.HEADING_5}>
          Lifetime
        </h4>
        <Panel.Row>
          {renderDataColumns(infoData.lifetime)}
        </Panel.Row>
      </div>
      <hr />
      <div className={SageClassnames.PANEL_GRID}>
        <h4 className={SageClassnames.TYPE.HEADING_5}>
          Marketing
        </h4>
        <Panel.Row>
          {renderDataColumns(infoData.marketing)}
        </Panel.Row>
      </div>
      <hr />
      <div className={SageClassnames.PANEL_GRID}>
        <Panel.Row>
          <h4 className={SageClassnames.TYPE.HEADING_5}>
            Lifecycle
          </h4>
          <Button
            color={Button.COLORS.SECONDARY}
            subtle={true}
            icon={SageTokens.ICONS.REFRESH}
            iconOnly={true}
          >
            Reload data
          </Button>
        </Panel.Row>
        <div className={SageClassnames.CARD_GRID}>
          {infoData.lifecycle.map(({ name, date, type, failed }) => (
            <Card.Row
              gridTemplate={SageTokens.GRID_TEMPLATES.ETE}
            >
              {renderLifecycleIcon({ failed, type })}
              <p
                className={`
                  ${SageClassnames.TYPE.BODY_SMALL_SEMI}
                  ${failed ? SageClassnames.TYPE_COLORS.RED : SageClassnames.TYPE_COLORS.CHARCOAL_500}
                  ${SageClassnames.TRUNCATE_TEXT}
                `}
              >
                {name}
              </p>
              <p
                className={`
                  ${SageClassnames.TYPE.BODY_SMALL}
                  ${SageClassnames.TYPE_COLORS.CHARCOAL_200}
                  ${SageClassnames.TYPE_ALIGN_RIGHT}
                `}
                style={{ width: '145px' }}
              >
                {date}
              </p>
            </Card.Row>
          ))}
        </div>
      </div>
    </>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Popover } from '../Popover';
import { LABEL_COLORS, TYPE } from './configs'; // component configurations as needed

export const StatBox = ({
  advanced,
  customLabel,
  data,
  changeType,
  changeValue,
  linkHref,
  linkValue,
  timeframe,
  title,
  titleIcon
}) => {

  const renderLabelStatus = () => {
    let valueConfig = changeValue ? changeValue : "No Change";
    let typeConfig = changeType ? changeValue : "neutral";
    let icon, 
        color;

    switch (typeConfig) {
      case StatBox.TYPE.UP:
        console.log("up");
        icon = Icon.ICONS.CARET_UP;
        color = StatBox.LABEL_COLORS.PUBLISHED;
        break;
      case StatBox.TYPE.DOWN:
        console.log("down");
        icon = Icon.ICONS.CARET_DOWN;
        color = StatBox.LABEL_COLORS.DANGER;
        break;
      case StatBox.TYPE.DEFAULT:
        color = StatBox.LABEL_COLORS.DRAFT;
        console.log("neutral");
        break;
    }

    return <Label color={color} value={valueConfig} icon={icon} />
  }

  return (
    <article className="sage-stat-box">
      <header className="sage-stat-box__header">
        <h2 className="sage-stat-box__title">{title}</h2>
        {titleIcon ? (
          <Popover icon="info-circle" />
        ) : ''}
      </header>
      <main className="sage-stat-box__body sage-grid-template-ete">
        <p className="sage-stat-box__data">{data}</p>
        {timeframe && (
          <span className="sage-stat-box__timeframe">{timeframe}</span>
        )}
        {changeValue && (
          renderLabelStatus()
        )}
      </main>
      {linkValue && (
        <footer className="sage-stat-box__footer">
          <a className="sage-stat-box__link" href={linkHref}>{linkValue}</a>
        </footer>
      )}
    </article>
  );
};

StatBox.LABEL_COLORS = LABEL_COLORS;
StatBox.TYPE = TYPE;

StatBox.defaultProps = {
  advanced: false,
  data: 0,
  changeType: StatBox.TYPE.DEFAULT,
  linkHref: null,
  linkValue: 'View More',
  status: 'In Progress',
  timeframe: 'Current',
};

StatBox.propTypes = {
  advanced: PropTypes.bool,
  data: PropTypes.number,
  changeType: PropTypes.oneOf(Object.values(StatBox.TYPE)),
  changeValue: PropTypes.string,
  linkHref: PropTypes.string,
  linkValue: PropTypes.string,
  status: PropTypes.string,
  timeframe: PropTypes.string,
  titleIcon: PropTypes.bool,
};

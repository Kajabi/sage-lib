import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { LABEL_COLORS, TYPE } from './configs'; // component configurations as needed

export const StatBox = ({
  customLabel,
  data,
  change,
  link,
  popover,
  timeframe,
  title,
}) => {
  const renderLabelStatus = () => {
    let icon = null;
    let color;

    switch (change.type) {
      case StatBox.TYPE.POSITIVE:
        icon = Icon.ICONS.CARET_UP;
        color = StatBox.LABEL_COLORS.PUBLISHED;
        break;
      case StatBox.TYPE.NEGATIVE:
        icon = Icon.ICONS.CARET_DOWN;
        color = StatBox.LABEL_COLORS.DANGER;
        break;
      default:
        color = StatBox.LABEL_COLORS.DRAFT;
        break;
    }

    return (
      <Label color={color} value={change.value} icon={icon} />
    );
  };

  return (
    <article className="sage-stat-box">
      <header className="sage-stat-box__header">
        <h2 className="sage-stat-box__title">{title}</h2>
        {popover}
      </header>
      <div className="sage-stat-box__body sage-grid-template-te">
        <p className="sage-stat-box__data">
          {data}
          {timeframe && (
            <span className="sage-stat-box__timeframe">{timeframe}</span>
          )}
        </p>
        {customLabel || (change && (renderLabelStatus()))}
      </div>
      {link && (
        <footer className="sage-stat-box__footer">
          <a className="sage-stat-box__link" href={link.href}>{link.value}</a>
        </footer>
      )}
    </article>
  );
};

StatBox.LABEL_COLORS = LABEL_COLORS;
StatBox.TYPE = TYPE;

StatBox.defaultProps = {
  change: {
    type: StatBox.TYPE.DEFAULT,
    value: null,
  },
  customLabel: null,
  link: {
    href: null,
    value: null,
  },
  popover: null,
  timeframe: null,
};

StatBox.propTypes = {
  customLabel: PropTypes.node,
  data: PropTypes.string.isRequired,
  change: PropTypes.shape({
    type: PropTypes.oneOf(Object.values(StatBox.TYPE)).isRequired,
    value: PropTypes.string.isRequired,
  }),
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  popover: PropTypes.node,
  timeframe: PropTypes.string,
  title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { LABEL_COLORS, TYPE } from './configs'; // component configurations as needed
import { Button } from '../Button';

export const StatBox = ({
  customLabel,
  change,
  data,
  hasData,
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
        <p className={`sage-stat-box__data ${!hasData ? 'sage-stat-box__data--no-data' : null}`}>
          {data}
          {timeframe && (
            <span className="sage-stat-box__timeframe">{timeframe}</span>
          )}
        </p>
        {customLabel || (change && (renderLabelStatus()))}
      </div>
      {link && (
        <footer className="sage-stat-box__footer">
          <Button
            color={Button.COLORS.PRIMARY}
            href={link.href}
            icon={SageTokens.ICONS.ARROW_RIGHT}
            iconPosition={Button.ICON_POSITIONS.RIGHT}
            subtle={true}
            className="sage-stat-box__link"
          >
            {link.value}
          </Button>
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
  hasData: true,
  link: {
    href: null,
    value: null,
  },
  popover: null,
  timeframe: null,
};

StatBox.propTypes = {
  change: PropTypes.shape({
    type: PropTypes.oneOf(Object.values(StatBox.TYPE)),
    value: PropTypes.string,
  }),
  customLabel: PropTypes.node,
  data: PropTypes.string.isRequired,
  hasData: PropTypes.bool,
  link: PropTypes.shape({
    href: PropTypes.string,
    value: PropTypes.string,
  }),
  popover: PropTypes.node,
  timeframe: PropTypes.string,
  title: PropTypes.string.isRequired,
};

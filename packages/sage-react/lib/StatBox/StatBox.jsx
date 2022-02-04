import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { LABEL_COLORS, LEGEND_COLORS } from './configs'; // component configurations as needed

export const StatBox = ({
  actions,
  customLabel,
  data,
  hasData,
  icon,
  image,
  legendDotColor,
  legendDotCustomColor,
  popover,
  raised,
  timeframe,
  title,
}) => {
  const statBoxContainer = classnames(
    'sage-stat-box',
    {
      'sage-stat-box--raised': raised,
      'sage-stat-box--with-img': image,
      'sage-stat-box--with-icon': icon,
    }
  );
  const statBoxTitle = classnames(
    'sage-stat-box__title',
    {
      [`sage-stat-box__title--legend-${legendDotColor}`]: legendDotColor,
      'sage-stat-box__title--legend-custom': legendDotCustomColor,
    }
  );

  return (
    <article
      className={statBoxContainer}
    >
      {icon && (
        <div className="sage-stat-box__icon">
          <Icon
            cardColor={icon.cardColor}
            color={icon.color}
            icon={icon.name}
          />
        </div>
      )}
      {image && (
        <div className="sage-stat-box__img">
          <img src={image.src} alt={image.alt || ''} />
        </div>
      )}
      <header className="sage-stat-box__header">
        <h2
          className={statBoxTitle}
          style={(legendDotCustomColor && legendDotCustomColor !== '') && ({
            '--legend-color': legendDotCustomColor
          })}
        >
          {title}
        </h2>
        {popover}
      </header>
      <div className="sage-stat-box__body sage-grid-template-te">
        <p className={`sage-stat-box__data ${!hasData ? 'sage-stat-box__data--no-data' : null}`}>
          {data}
          {timeframe && (
            <span className="sage-stat-box__timeframe">{timeframe}</span>
          )}
        </p>
        {customLabel && (
          <div className="sage-stat-box__label">
            {customLabel}
          </div>
        )}
      </div>
      {actions && (
        <footer className="sage-stat-box__footer">
          {actions}
        </footer>
      )}
    </article>
  );
};

StatBox.LABEL_COLORS = LABEL_COLORS;
StatBox.LEGEND_COLORS = LEGEND_COLORS;

StatBox.defaultProps = {
  actions: null,
  customLabel: null,
  hasData: true,
  icon: null,
  image: null,
  legendDotColor: null,
  legendDotCustomColor: null,
  popover: null,
  raised: false,
  timeframe: null,
};

StatBox.propTypes = {
  actions: PropTypes.node,
  customLabel: PropTypes.node,
  data: PropTypes.string.isRequired,
  hasData: PropTypes.bool,
  icon: PropTypes.shape({
    cardColor: PropTypes.oneOf(Object.values(Icon.CARD_COLORS)),
    color: PropTypes.oneOf(Object.values(Icon.COLORS)),
    name: PropTypes.oneOf(Object.values(Icon.ICONS)),
  }),
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  legendDotColor: PropTypes.oneOf(Object.values(StatBox.LEGEND_COLORS)),
  legendDotCustomColor: PropTypes.string,
  popover: PropTypes.node,
  raised: PropTypes.bool,
  timeframe: PropTypes.string,
  title: PropTypes.string.isRequired,
};

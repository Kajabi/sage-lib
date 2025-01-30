import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Dot } from '../Dot';
import { LABEL_COLORS, LEGEND_COLORS, TYPE } from './configs'; // component configurations as needed

export const StatBox = ({
  customLabel,
  change,
  data,
  hasData,
  icon,
  image,
  legendDotColor,
  legendDotCustomColor,
  link,
  popover,
  raised,
  kjbElementId,
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
  const renderLabelStatus = () => {
    let color;

    switch (change.type) {
      case StatBox.TYPE.POSITIVE:
        color = StatBox.LABEL_COLORS.PUBLISHED;
        break;
      case StatBox.TYPE.NEGATIVE:
        color = StatBox.LABEL_COLORS.DANGER;
        break;
      default:
        color = StatBox.LABEL_COLORS.DRAFT;
        break;
    }

    return (
      <Badge
        color={color}
        value={change.value}
        dot={
          <Dot />
        }
      />
    );
  };

  return (
    <article
      className={statBoxContainer}
      data-kjb-element={kjbElementId}
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
StatBox.LEGEND_COLORS = LEGEND_COLORS;
StatBox.TYPE = TYPE;

StatBox.defaultProps = {
  change: {
    type: StatBox.TYPE.DEFAULT,
    value: null,
  },
  customLabel: null,
  hasData: true,
  icon: null,
  image: null,
  legendDotColor: null,
  legendDotCustomColor: null,
  link: null,
  popover: null,
  raised: false,
  kjbElementId: null,
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
  link: PropTypes.shape({
    href: PropTypes.string,
    value: PropTypes.string,
  }),
  popover: PropTypes.node,
  raised: PropTypes.bool,
  kjbElementId: PropTypes.string,
  timeframe: PropTypes.string,
  title: PropTypes.string.isRequired,
};

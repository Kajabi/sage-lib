import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { Link } from '../Link';
import { OptionsDropdown } from '../Dropdown';
import { Panel } from '../Panel';

export const MediaTile = ({
  actionsDropdownItems,
  actionsCustom,
  caption,
  children,
  className,
  footer,
  media,
  mediaConfigs,
  kjbElementId,
  tileLink,
  title,
  titleTag,
  ...rest
}) => {
  const classNames = classnames(
    'sage-media-tile',
    className,
    {
      'sage-media-tile--interactive': tileLink,
    }
  );

  const TitleTag = titleTag;

  return (
    <Panel className={classNames} data-kjb-element={kjbElementId} {...rest}>
      {media && (
        <Panel.Figure
          bleed={Panel.Figure.BLEED_OPTIONS.TOP}
          {...mediaConfigs}
          className={`sage-media-tile__media ${(mediaConfigs && mediaConfigs.className) || ''}`}
        >
          {media}
        </Panel.Figure>
      )}
      <Panel.Stack className="sage-media-tile__content">
        {title && (
          <Panel.Row className="sage-media-tile__header">
            <TitleTag className="sage-media-tile__title">
              {tileLink ? (
                <Link
                  {...tileLink}
                  className={`sage-media-tile__link ${tileLink.classname || ''}`}
                  suppressDefaultClass={true}
                >
                  {title}
                </Link>
              ) : title}
            </TitleTag>
            {(actionsCustom || actionsDropdownItems) && (
              <Button.Group gap={Button.Group.GAP_OPTIONS.SM}>
                {actionsCustom}
                {actionsDropdownItems && (
                  <OptionsDropdown align="right" options={actionsDropdownItems} />
                )}
              </Button.Group>
            )}
          </Panel.Row>
        )}
        {children && (
          <Panel.Block className="sage-media-tile__body">
            {children}
          </Panel.Block>
        )}
        {caption && (
          <Panel.Block className="sage-media-tile__caption">
            {caption}
          </Panel.Block>
        )}
      </Panel.Stack>
      {footer && (
        <Panel.Footer className="sage-media-tile__footer" alignSpread={true}>
          {footer}
        </Panel.Footer>
      )}
    </Panel>
  );
};

MediaTile.defaultProps = {
  actionsDropdownItems: null,
  actionsCustom: null,
  caption: null,
  children: null,
  className: '',
  footer: null,
  media: null,
  mediaConfigs: null,
  kjbElementId: null,
  tileLink: null,
  title: null,
  titleTag: 'h3',
};

MediaTile.propTypes = {
  actionsDropdownItems: PropTypes.arrayOf(PropTypes.shape({})), // TODO: dropdown itme schema here
  actionsCustom: PropTypes.node,
  caption: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  footer: PropTypes.node,
  media: PropTypes.node,
  mediaConfigs: PropTypes.shape(Panel.Figure.propTypes), // TODO: panel figure configs
  kjbElementId: PropTypes.string,
  tileLink: PropTypes.shape(Link.propTypes),
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

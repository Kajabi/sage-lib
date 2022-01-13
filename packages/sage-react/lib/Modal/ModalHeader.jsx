import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { ModalHeaderActions } from './ModalHeaderActions';
import { ModalHeaderAside } from './ModalHeaderAside';
import { SageClassnames, SageTokens } from '../configs';

export const ModalHeader = ({
  actions,
  aside,
  children,
  className,
  customHeader,
  headerIndicator,
  popover,
  icon,
  image,
  subheader,
  title,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__header',
    className,
    {
      'sage-modal__header--has-header-indicator': headerIndicator,
      'sage-modal__header--has-header-actions': actions,
    },
  );

  const headerActionsClassNames = classnames(
    SageClassnames.TYPE.HEADING_4,
    'sage-modal__title',
    className,
  );

  return (
    <header className={classNames} {...rest}>
      <div className="sage-modal__header-text">
        <Card.Row
          gridTemplate={
            icon || image
              ? SageTokens.GRID_TEMPLATES.ETE
              : SageTokens.GRID_TEMPLATES.TE
          }
        >
          {icon && <Icon className="sage-modal__header-icon" icon={icon.name} color={icon.color} /> }
          {image && <img className="sage-modal__header-image" src={image.src} alt={image.alt || ''} />}
          {customHeader || <h1 className={headerActionsClassNames}>{title}</h1>}
          {actions && <ModalHeaderActions>{actions}</ModalHeaderActions>}
          {aside && <ModalHeaderAside>{aside}</ModalHeaderAside>}
        </Card.Row>
        {subheader && (
          <Card.Row>
            <h2 className={SageClassnames.TYPE.HEADING_6}>{subheader}</h2>
            {popover && (
              <Popover
                title={popover.title}
                iconOnly={true}
                icon={SageTokens.ICONS.QUESTION_CIRCLE}
                moreLinkText={popover.linkText}
                moreLinkURL={popover.link}
              >
                {popover.content}
              </Popover>
            )}
          </Card.Row>
        )}
        {children}
        {headerIndicator && <>{headerIndicator}</>}
      </div>
    </header>
  );
};

ModalHeader.Aside = ModalHeaderAside;
ModalHeader.Actions = ModalHeaderActions;

ModalHeader.defaultProps = {
  actions: null,
  aside: null,
  children: null,
  className: null,
  customHeader: null,
  headerIndicator: null,
  icon: null,
  image: null,
  popover: null,
  subheader: null,
  title: null,
};

ModalHeader.propTypes = {
  actions: PropTypes.node,
  aside: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  customHeader: PropTypes.node,
  headerIndicator: PropTypes.arrayOf(PropTypes.node),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(Object.values(Icon.COLORS)),
    name: PropTypes.oneOf(Object.values(Icon.ICONS)),
  }),
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  popover: PropTypes.shape({
    content: PropTypes.node,
    link: PropTypes.string,
    linkText: PropTypes.string,
    title: PropTypes.string
  }),
  subheader: PropTypes.string,
  title: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { ModalHeaderAside } from './ModalHeaderAside';
import { SageClassnames, SageTokens } from '../configs';

export const ModalHeader = ({
  aside,
  children,
  className,
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
          {image && <img src={image.src} alt={image.alt || ''} />}
          {title && <h1 className={SageClassnames.TYPE.HEADING_4}>{title}</h1>}
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
      </div>
    </header>
  );
};

ModalHeader.Aside = ModalHeaderAside;

ModalHeader.defaultProps = {
  aside: null,
  children: null,
  className: null,
  icon: null,
  image: null,
  popover: null,
  subheader: null,
  title: null,
};

ModalHeader.propTypes = {
  aside: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
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

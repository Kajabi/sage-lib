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
  headerProgressBar,
  icon,
  image,
  popover,
  subheader,
  title,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__header',
    className,
    {
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
          {image && <img src={image.src} alt={image.alt || ''} />}
          {customHeader || <h1 className={headerActionsClassNames}>{title}</h1>}
          {actions && <ModalHeaderActions>{actions}</ModalHeaderActions>}
          {aside && <ModalHeaderAside>{aside}</ModalHeaderAside>}

        </Card.Row>
        {subheader && (
          <Card.Row>
            <h2 className={`${SageClassnames.TYPE.BODY} ${SageClassnames.TYPE_COLORS.CHARCOAL_300}`}>{subheader}</h2>
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
      {headerProgressBar && <>{headerProgressBar}</>}
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
  headerProgressBar: null,
  icon: null,
  image: null,
  popover: null,
  subheader: null,
  title: null,
};

ModalHeader.propTypes = {
  /** 
   * Actions to render within the ModalHeaderActions. This space is reserved for buttons that will render to the right of the title.
  */
  actions: PropTypes.node,
  /**
   * Content to render within the ModalHeaderAside. This space is normally reserved for the close icon in the ModalHeader.
   */
  aside: PropTypes.node,
  /**
   * Content to render within the ModalBody
   */
  children: PropTypes.node,
  /**
   * Class name(s) to be added to the root element
   */
  className: PropTypes.string,
  /** 
   * Custom header to render within the ModalHeader. This will override the default title.
  */
  customHeader: PropTypes.node,
  /**
   * Progess bar to render within the ModalHeader
   */
  headerProgressBar: PropTypes.node,
  /**
   * Icon to render within the ModalHeader
   */
  icon: PropTypes.shape({
    color: PropTypes.oneOf(Object.values(Icon.COLORS)),
    name: PropTypes.oneOf(Object.values(Icon.ICONS)),
  }),
  /**
   * Image to render within the ModalHeader
   */
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  /**
   * Popover to render within the ModalHeader. This will render a question mark icon that will trigger the popover when clicked.
   */
  popover: PropTypes.shape({
    content: PropTypes.node,
    link: PropTypes.string,
    linkText: PropTypes.string,
    title: PropTypes.string
  }),
  /**
   * Subheader to render within the ModalHeader
   */
  subheader: PropTypes.string,
  /**
   * Title of the modal
   */
  title: PropTypes.string,
};

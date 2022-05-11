import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Frame,
  Icon,
  SageClassnames,
  SageTokens,
} from '../../..';

export const GetStartedExpandable = ({
  children,
  id,
  label,
  startsOpen,
}) => {
  const [open, setOpen] = useState(startsOpen);
  return (
    <Frame id={id}>
      <Frame
        align={Frame.ALIGNMENTS.CENTER_SPREAD}
        direction={Frame.DIRECTIONS.HORIZONTAL}
        id={`${id}-control`}
        onClick={() => setOpen(!open)}
        role="button"
        aria-controls={`${id}-panel`}
        aria-expanded={open}
      >
        {label}
        <Icon icon={Icon.ICONS.ARROW_DOWN} />
      </Frame>
      {open && (
        <Frame
          id={`${id}-panel`}
          role="region"
          aria-labelledby={`${id}-control`}
        >
          {children}
        </Frame>
      )}
    </Frame>
  );
};

GetStartedExpandable.defaultProps = {
  children: null,
  label: null,
  startsOpen: false,
};

GetStartedExpandable.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  startsOpen: PropTypes.bool,
};

export const GetStartedTabsMobile = ({ tabsContent }) => (
  <Frame>
    {tabsContent.map(({
      cta: {
        label,
        learnMoreUrl,
        url,
      },
      description,
      graphic,
      icon,
      id,
      label: buttonLabel,
      title,
    }) => (
      <GetStartedExpandable
        key={id}
        id={id}
        label={<>{icon} {buttonLabel}</>}
      >
        {graphic}
        <Frame>
          <h5 className={SageClassnames.TYPE.HEADING_5}>
            {title}
          </h5>
          <p className={`${SageClassnames.TYPE.BODY} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
            {description}
          </p>
        </Frame>
        <Frame gap={Frame.GAPS.SM}>
          <Button
            color={Button.COLORS.PRIMARY}
            href={url}
          >
            {label}
          </Button>
          <Button
            color={Button.COLORS.PRIMARY}
            subtle={true}
            icon={SageTokens.ICONS.LAUNCH}
            iconPosition={Button.ICON_POSITIONS.RIGHT}
            href={learnMoreUrl}
          >
            Learn more
          </Button>
        </Frame>
      </GetStartedExpandable>
    ))}
  </Frame>
);

GetStartedTabsMobile.defaultProps = {};

GetStartedTabsMobile.propTypes = {
  tabsContent: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

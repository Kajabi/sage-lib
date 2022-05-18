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
  ...rest
}) => {
  const [open, setOpen] = useState(startsOpen);
  return (
    <Frame
      border={Frame.BORDERS.DEFAULT}
      borderRadius={Frame.BORDER_RADII.MD}
      id={id}
      padding={Frame.PADDINGS.SM}
      width={Frame.WIDTHS.FILL}
    >
      <Frame
        align={Frame.ALIGNMENTS.CENTER_SPREAD}
        direction={Frame.DIRECTIONS.HORIZONTAL}
        id={`${id}-control`}
        onClick={() => setOpen(!open)}
        tag="button"
        aria-controls={`${id}-panel`}
        aria-expanded={open}
        width={Frame.WIDTHS.FILL}
      >
        {label}
        <Icon icon={open ? Icon.ICONS.CARET_UP : Icon.ICONS.CARET_DOWN} />
      </Frame>
      {open && (
        <Frame
          id={`${id}-panel`}
          role="region"
          aria-labelledby={`${id}-control`}
          {...rest}
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
  id: PropTypes.string.isRequired,
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
      completed = false,
      description,
      graphic,
      icon,
      id,
      label: buttonLabel,
      title,
    }) => (
      <GetStartedExpandable
        align={Frame.ALIGNMENTS.CENTER_CENTER}
        gap={Frame.GAPS.SM}
        id={id}
        key={id}
        label={(
          <Frame
            direction={Frame.DIRECTIONS.HORIZONTAL}
            gap={Frame.GAPS.XS}
            align={Frame.ALIGNMENTS.TOP_LEFT}
            width={Frame.WIDTHS.FLEX}
            tag="span"
          >
            <Icon
              adjacentType={Icon.ADJACENT_TYPES.BODY}
              color={completed ? Icon.COLORS.SAGE_300 : Icon.COLORS.INHERIT}
              icon={completed ? Icon.ICONS.CHECK_CIRCLE_FILLED : icon}
            />
            <span className={SageClassnames.TYPE.BODY_MED} style={{ flex: 1, cursor: 'pointer' }}>
              {buttonLabel}
            </span>
          </Frame>
        )}
        width={Frame.WIDTHS.FILL}
      >
        {graphic}
        <Frame
          align={Frame.ALIGNMENTS.TOP_CENTER}
          className={`${SageClassnames.TYPE_ALIGN_CENTER}`}
          gap={Frame.GAPS.NONE}
        >
          <h5 className={`${SageClassnames.TYPE.HEADING_5}`}>
            {title}
          </h5>
          <p className={`${SageClassnames.TYPE.BODY_XSMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
            {description}
          </p>
        </Frame>
        <Frame
          align={Frame.ALIGNMENTS.TOP_CENTER}
          gap={Frame.GAPS.SM}
          width={Frame.WIDTHS.FILL}
        >
          <Button
            color={Button.COLORS.PRIMARY}
            href={url}
            fullWidth
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

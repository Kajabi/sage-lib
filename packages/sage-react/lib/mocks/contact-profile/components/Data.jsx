import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {
  Description,
  Button,
  Label,
  Panel,
} from '../../..';

export const Data = ({ stats, tags }) => (
  <Panel.Stack spacing={Panel.Stack.SPACINGS.FORM} style={{ padding: "16px" }}>
    {stats && stats.map((dataGroup) => (
      <React.Fragment key={uuid()}>
        <Description
          items={dataGroup}
          noDividers={true}
        />
        <Panel.Divider />
      </React.Fragment>
    ))}
    <Label.Group gap={Label.Group.GAP_OPTIONS.XS} aria-label="Tags">
      {tags && tags.map((tag) => (
        <Label color={Label.COLORS.DRAFT} key={uuid()} value={tag} />
      ))}
      <Button
        color={Button.COLORS.PRIMARY}
        href="#view-more"
        subtle={true}
      >
        View all
      </Button>
    </Label.Group>
  </Panel.Stack>
);

Data.defaultProps = {
  stats: [],
  tags: [],
};

Data.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})),
  tags: PropTypes.arrayOf(PropTypes.string),
};

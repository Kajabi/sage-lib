import React from 'react';
import uuid from 'react-uuid';
import { Description } from '../../../Description';
import {
  Button,
  Label,
  Panel,
} from '../../..';

export const Data = ({ stats, tags }) => (
  <>
    {stats.map((dataGroup) => (
      <React.Fragment key={uuid()}>
        <Description
          allcapsTitles={false}
          inlineSpread={true}
          items={dataGroup}
        />
        <Panel.Divider />
      </React.Fragment>
    ))}
    <Label.Group gap={Label.Group.GAP_OPTIONS.XS}>
      {tags.map((tag) => (
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
  </>
);

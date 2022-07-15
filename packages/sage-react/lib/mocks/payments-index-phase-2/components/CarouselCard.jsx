import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../..';

export const CarouselCard = ({
  action,
  children,
  graphic,
}) => (
  <Card style={{ width: '275px' }}>
    {/*
      TODO: Upcoming Frame layout tool will allow for
      custom background color and borderless options
    */}
    <Card.Row>
      <Card.Block>
        {children}
      </Card.Block>
      {graphic && (
        <Card.Figure>
          {graphic}
        </Card.Figure>
      )}
    </Card.Row>
    <Card.Block>
      {action}
    </Card.Block>
  </Card>
);

CarouselCard.defaultProps = {
  action: null,
  children: null,
  graphic: null,
};

CarouselCard.propTypes = {
  action: PropTypes.node,
  children: PropTypes.node,
  graphic: PropTypes.node,
};

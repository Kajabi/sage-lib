import React from 'react';
import {
  Card,
  Button,
  Description,
  Link,
  Panel,
  SageClassnames,
  SageTokens,
} from '../../../..';
// TODO: Need to export ProgressBar for react package
import { ProgressBar } from '../../../../ProgressBar';
import { productsData } from '../../dataHelper';

export const ProductsTab = () => (
  <div className={SageClassnames.PANEL_GRID}>
    {productsData.map(({
      accessGiven,
      image,
      lastLogin,
      offers,
      progress,
      status,
      title,
      url,
    }, index) => (
      <>
        <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ETE}>
          <Card.Figure>
            <img src="//source.unsplash.com/random/77x48" alt="" />
          </Card.Figure>
          <h4
            className={`
              ${SageClassnames.TYPE.HEADING_6}
              ${SageClassnames.TYPE_COLORS.CHARCOAL_500}
              ${SageClassnames.TRUNCATE_TEXT}
            `}
          >
            {title}
          </h4>
          <Button
            color={Button.COLORS.SECONDARY}
            raised={false}
            href={url}
          >
            View progress
          </Button>
        </Card.Row>
        {/*
          NOTE: task exists outside this epic to reduce spacing in Description:
          https://kajabi.atlassian.net/browse/SAGE-239
        */}
        <Description
          items={[
            {
              title: 'Product progress',
              data: (
                <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.TE}>
                  <ProgressBar
                    percent={progress}
                    label={`${progress}%`}
                  />
                  {/*
                    TODO: Sage Next will afford displaying value beside progress bar
                    so this manual entry can then be removed
                    and the contaienr can change to just <>...</>
                  */}
                  {progress}%
                </Card.Row>
              ),
            },
            {
              title: 'Access given',
              data: accessGiven,
            },
            {
              title: 'Last login',
              data: lastLogin,
            },
            {
              title: 'Status',
              data: status,
            },
            {
              title: 'Offers',
              // TODO: Design to clarify link styling
              data: offers.map(({ name, url }, index) => (
                <React.Fragment key={name}>
                  <Link href={url}>
                    {name}
                  </Link>
                  {index < (offers.length - 1) && ', '}
                </React.Fragment>
              )),
            },
          ]}
          noDividers={true}
        />
        {index < (productsData.length - 1) && <Panel.Divider />}
      </>
    ))}
  </div>
);

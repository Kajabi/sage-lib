import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../Grid';
import { Panel } from '../Panel';

export const FormSection = ({
  children,
  subtitle,
  title,
  ...rest
}) => (
  <Grid className="sage-form-section" {...rest}>
    <Grid.Row>
      <Grid.Col size={4} small={12} large={4}>
        <div className="sage-form-section__info">
          <h3 className="sage-form-section__title">{title}</h3>
          {subtitle && (
            <div className="sage-form-section__subtitle">{subtitle}</div>
          )}
        </div>
      </Grid.Col>
      <Grid.Col size={8} small={12} large={8}>
        <Panel>
          <div className="sage-form-section__content">
            {children}
          </div>
        </Panel>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

FormSection.defaultProps = {
  children: null,
  subtitle: null,
};

FormSection.propTypes = {
  children: PropTypes.node,
  subtitle: PropTypes.node,
  title: PropTypes.string.isRequired,
};

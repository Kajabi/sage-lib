import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
// import { Choice } from '../Choice';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Modal } from '../Modal';
import { Panel } from '../Panel';
import { SageClassnames, SageTokens } from '../configs';

const Benefit = ({ icon, benefitAmount, benefitTitle }) => (
  <div className="sage-upsell__icon">
    <Icon icon={icon} size="lg" />
    <span className="sage-upsell__allowance-text">
      <strong>{benefitAmount}</strong>&nbsp;{benefitTitle}
    </span>
  </div>
);

Benefit.propTypes = {
  icon: PropTypes.string.isRequired,
  benefitAmount: PropTypes.string.isRequired,
  benefitTitle: PropTypes.string.isRequired,
};

export const Upsell = ({
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-upsell',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <Modal active="true">
        <Modal.Body>
          <Label
            color="published"
            interactiveType
            value="Upgrade today!"
          />
          <h5 className={SageClassnames.TYPE.HEADING_4}>
            Kajabi Growth Plan
          </h5>
          <p>Uprage your account to do your best work</p>
          <hr />
        </Modal.Body>
        <Modal.Body>
          <Panel.Row gridTemplate={SageTokens.GRID_TEMPLATES.M}>
            <div className="sage-upsell__icons">
              <Benefit icon={SageTokens.ICONS.PRODUCT} benefitAmount="15" benefitTitle="Products" />
              <Benefit icon={SageTokens.ICONS.MEGAPHONE} benefitAmount="15" benefitTitle="Pipelines" />
              <Benefit icon={SageTokens.ICONS.MONITOR} benefitAmount="Unlimited" benefitTitle="Pages" />
              <Benefit icon={SageTokens.ICONS.MAIL} benefitAmount="Unlimited" benefitTitle="Emails" />
              <Benefit icon={SageTokens.ICONS.USER_CIRCLE} benefitAmount="25K" benefitTitle="Contacts" />
              <Benefit icon={SageTokens.ICONS.USERS} benefitAmount="10K" benefitTitle="Members" />
            </div>
            <div className="sage-upsell__choices">
              {/* <Choice text="Growth - $159/mo" subtext="Billed monthly" /> */}
              {/* <Choice text="Pro - $319/mo" subtext="Billed monthly" /> */}
              <Button fullWidth="true">This is a button</Button>
            </div>
          </Panel.Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Upsell.defaultProps = {
  className: '',
};

Upsell.propTypes = {
  className: PropTypes.string,
};

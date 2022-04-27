import React, { useState } from 'react';
import {
  Alert,
  Panel,
} from '../../..';
import { paymentAlerts } from '../data-helper';

export const AlertsFactory = () => {
  // TODO: Dev to provide service or other provider
  // for determining alerts to display based on user context
  const [alerts] = useState(paymentAlerts);

  return (
    <Panel.Block>
      {alerts && alerts.map((alert) => (
        <Alert {...alert} />
      ))}
    </Panel.Block>
  );
};

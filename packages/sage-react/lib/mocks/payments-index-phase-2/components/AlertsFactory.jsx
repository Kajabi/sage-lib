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
    <Panel.Stack>
      {alerts && alerts.map((alert) => (
        <Alert style={{ width: '100%' }} {...alert} />
      ))}
    </Panel.Stack>
  );
};

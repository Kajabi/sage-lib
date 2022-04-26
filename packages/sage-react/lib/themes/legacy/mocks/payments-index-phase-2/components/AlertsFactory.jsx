import React, { useState } from 'react';
import {
  Alert,
  Link,
  Panel,
} from '../../..';

export const AlertsFactory = () => {
  // TODO: Dev to provide service or other provider
  // for determining alerts to display based on user context
  const [alerts, setAlerts] = useState([
    {
      description: '2 recent refunds',
      color: Alert.COLORS.WARNING,
      small: true,
      actions: (<Link href="#TODO-dev-view-url">View</Link>)
    }, 
    {
      description: '2 recent refunds',
      color: Alert.COLORS.WARNING,
      small: true,
      actions: (<Link href="#TODO-dev-view-url">View</Link>)
    }
  ]);

  return (
    <Panel.Block>
      {alerts && alerts.map(alert => (
        <Alert {...alert} />
      ))}
    </Panel.Block>
  );
};

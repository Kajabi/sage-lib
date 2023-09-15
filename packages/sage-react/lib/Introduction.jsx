import React from 'react';
import PackageInfo from '../../../docs/package.json';

export const Introduction = () => (
  <div>
    <h1>Welcome to the React Storybook for Sage!</h1>
    <p>Sage is our source of truth, providing everything
      you need to build the best experiences for all Kajabi entrepreneurs.
    </p>
    <br />
    <h2>Recommended Components to Start With</h2>
    <ul>
      <li><strong><a href="/?path=/docs/sage-button--primary">Button</a></strong> - A versatile component, offering various styles.</li>
      <li><strong><a href="/?path=/docs/sage-card--default">Card</a></strong> - Ideal for displaying content in a neat, organized manner.</li>
      <li><strong><a href="/?path=/docs/sage-modal--default">Modal</a></strong> - Capture users attention with our highly customizable modal dialogs.</li>
    </ul>
    <br />
    <p>Dive into these components to get a feel for our system.
      And remember, we are always here to help should you have any questions or feedback!
    </p>
    <br />
    <p>Happy coding! 🚀</p>
    <br />
    <h2>Version Information</h2>
    <h3>{`v${PackageInfo.version}`}</h3>
    <p><a href={`https://github.com/Kajabi/sage-lib/releases/tag/v${PackageInfo.version}`}>Change log</a> for {`v${PackageInfo.version}`}.</p>
  </div>
);

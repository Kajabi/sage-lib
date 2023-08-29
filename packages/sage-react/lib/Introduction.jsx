import React from 'react';
import PackageInfo from '../../../docs/package.json';

export const Introduction = () => (
  <div>
    <h1>Welcome to React Storybook Design System! 🎉</h1>
    <p>Hello and welcome! We're delighted to have you explore our design system. Our components are crafted with consistency, reusability, and clarity. With Sage, your development process will be smoother and more efficient.
    </p>
    <br />
    <h2>Recommended Components to Start With</h2>
    <ul>
      <li><strong>Button</strong> - A versatile component, offering various sizes and styles.</li>
      <li><strong>Input</strong> - Ensures user inputs are captured seamlessly, with built-invalidation features.</li>
      <li><strong>Card</strong> - Ideal for displaying content in a neat, organized manner.</li>
      <li><strong>Modal</strong> - Capture user's attention with our highly customizable modal dialogs.</li>
      <li><strong>Tooltip</strong> - Provide additional information on hover or click, enhancing user understanding.</li>
    </ul>
    <br />
    <p>Dive right into these components to get a feel of our system. And remember, we're always here to help should you have any questions or feedback!</p>
    <br />
    <p>Happy coding! 🚀</p>
    <br />
    <h2>Version Information</h2>
    <h3>{`v${PackageInfo.version}`}</h3>
    <p>View the <a href={`https://github.com/Kajabi/sage-lib/releases/tag/v${PackageInfo.version}`}>change log.</a></p>
  </div>
);

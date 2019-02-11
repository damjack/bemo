import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('SPACING', module)
  .add('Margin & Padding', () => (
    <div className="wrap--large">
      <div className="flex">
        <div className="flex__item flex-12-12">
          <h1>BEMO storybook</h1>
          <p>Start your next project with the right foot: a scalable frontend architecture.</p>
        </div>
      </div>
    </div>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Button, Preview, Code } from '../components/Base';

storiesOf('COMPONENT', module)
  .add('Label', () => (
    <Main className="wrap">
      <Title className="markdown">Label</Title>
      <p className="text">Examples of building label with Bemo</p>

      <div className="code">
        <Preview>
          <p>
            <span className="label">Label</span>
            <span className="label--blue">Blue</span>
            <span className="label--red">Red</span>
          </p>
        </Preview>
        <Code>
          {`    <span class="label">Label</span>
    <span class="label--blue">Blue</span>
    <span class="label--red">Red</span>`}
        </Code>
      </div>
    </Main>
  ));

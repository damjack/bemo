import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Button, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Label', () => (
    <Main className="wrap">
      <Title className="markdown">Label</Title>
      <p className="text">Examples of building label with Bemo</p>

      <div className="code">
        <Code>
          {`    <span class="label--teal">Label</span>
    <span class="label--blue">Blue</span>
    <span class="label--red">Red</span>`}
        </Code>
        <Preview className="padding--top-2">
          <p>
            <span className="label--teal">Label</span>
            <span className="label--blue">Blue</span>
            <span className="label--red">Red</span>
          </p>
        </Preview>
      </div>

      <Title className="markdown">Label rounded</Title>
      <p className="text">Examples of building label with Bemo</p>

      <div className="code">
        <Code>
          {`    <span class="label--blue--rounded">1</span>
    <span class="label--red--rounded">10</span>`}
        </Code>
        <Preview className="padding--top-2">
          <p>
            <span className="label--blue--rounded">10</span>
            <span className="label--red--rounded">10</span>
            <span className="label--purple--rounded">10</span>
            <span className="label--green--rounded">12</span>
            <span className="label--yellow--rounded">12</span>
            <span className="label--orange--rounded">12</span>
          </p>
        </Preview>
      </div>
    </Main>
  ));

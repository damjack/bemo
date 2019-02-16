import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Button, Preview, Code } from '../components/Base';

storiesOf('COMPONENT', module)
  .add('Button', () => (
    <Main className="wrap">
      <Title className="markdown">Buttons</Title>
      <p className="text">Examples of building buttons with Bemo</p>
      <div className="code">
        <Preview>
          <Button className="button">Button</Button>
          <Button className="button--blue">Blue</Button>
          <Button className="button--red">Red</Button>
        </Preview>
        <Code>
          {`    <button class="button">Button</button>
    <button class="button--blue">Blue</button>
    <button class="button--red">Red</button>`}
        </Code>
      </div>
    </Main>
  ));

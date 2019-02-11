import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main } from '../components/Main';
import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { Code } from '../components/Code';

storiesOf('COMPONENT', module)
  .add('Button', () => (
    <Main className="wrap">
      <Title className="markdown">Buttons</Title>
      <p className="text">Examples of building buttons with Bemo</p>
      <Button className="button">Button</Button>
      <Code>asdasd</Code>
    </Main>
  ));

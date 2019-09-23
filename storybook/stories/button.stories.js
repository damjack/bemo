import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Button, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Button', () => (
    <Main className="wrap">
      <Title className="markdown">Buttons</Title>
      <p className="text">Examples of building buttons with Bemo</p>

      <div className="code">
        <Preview className="padding--bottom-2">
          <p>
            <Button className="button">Button base</Button>
            <Button className="button--blue">Blue</Button>
            <Button className="button--red">Red</Button>
            <Button className="button--purple">Purple</Button>
            <Button className="button--orange">Orange</Button>
            <Button className="button--yellow">Yellow</Button>
            <Button className="button--green">Green</Button>
            <Button className="button--teal">Teal</Button>
          </p>
        </Preview>
        <Code>
          {`    <button class="button">Button</button>
    <button class="button--blue">Blue</button>
    <button class="button--red">Red</button>`}
        </Code>
      </div>

      <Title className="markdown">Buttons Outline</Title>
      <p className="text">Examples of building buttons with Bemo</p>

      <div className="code">
        <Preview className="padding--bottom-2">
          <p>
            <Button className="button--blue--outline">Blue</Button>
            <Button className="button--red--outline">Red</Button>
            <Button className="button--purple--outline">Purple</Button>
            <Button className="button--orange--outline">Orange</Button>
            <Button className="button--yellow--outline">Yellow</Button>
            <Button className="button--green--outline">Green</Button>
            <Button className="button--teal--outline">Teal</Button>
          </p>
        </Preview>
        <Code>
          {`    <button class="button--red--outline">Button</button>
    <button class="button--blue--outline">Blue</button>
    <button class="button--purple--outline">Red</button>`}
        </Code>
      </div>

      <Title className="markdown">Buttons Rounded</Title>
      <p className="text">Examples of building buttons with Bemo</p>

      <div className="code">
        <Preview className="padding--bottom-2">
          <p>
            <Button className="button--blue--rounded">Blue</Button>
            <Button className="button--red--rounded">Red</Button>
            <Button className="button--purple--rounded">Purple</Button>
            <Button className="button--orange--rounded">Orange</Button>
            <Button className="button--yellow--rounded">Yellow</Button>
            <Button className="button--green--rounded">Green</Button>
            <Button className="button--teal--rounded">Teal</Button>
          </p>
        </Preview>
        <Code>
          {`    <button class="button--red--rounded">Button</button>
    <button class="button--blue--rounded">Blue</button>
    <button class="button--purple--rounded">Red</button>`}
        </Code>
      </div>

      <Title className="markdown">Buttons Rounded Outline</Title>
      <p className="text">Examples of building buttons with Bemo</p>

      <div className="code">
        <Preview className="padding--bottom-2">
          <p>
            <Button className="button--blue--outline--rounded">Blue</Button>
            <Button className="button--red--outline--rounded">Red</Button>
            <Button className="button--purple--outline--rounded">Purple</Button>
            <Button className="button--orange--outline--rounded">Orange</Button>
            <Button className="button--yellow--outline--rounded">Yellow</Button>
            <Button className="button--green--outline--rounded">Green</Button>
            <Button className="button--teal--outline--rounded">Teal</Button>
          </p>
        </Preview>
        <Code>
          {`    <button class="button--red--rounded--outline">Button</button>
    <button class="button--blue--rounded--outline">Blue</button>
    <button class="button--purple--rounded--outline">Red</button>`}
        </Code>
      </div>
    </Main>
  ));

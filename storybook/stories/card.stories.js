import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('COMPONENT', module)
  .add('Card', () =>
    <Main className="wrap">
      <Title className="markdown">Card</Title>
      <p className="text">Examples of building card block with Bemo CSS.</p>

      <div className="example">
        <div className="card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="card">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>
    </Main>
  )
  .add('Card Horizontal', () =>
    <Main className="wrap">
      <Title className="markdown">Card</Title>
      <p className="text">Examples of building card block with Bemo CSS.</p>

      <div className="example">
        <div className="card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="card">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>
    </Main>
  );

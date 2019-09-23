import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Flash', () =>
    <Main className="wrap">
      <Title className="markdown">Flash</Title>
      <p className="text">Examples of building flash block with Bemo CSS.</p>

      <div className="code">
        <Preview className="padding--bottom-2">
          <div className="flash--notice">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
          </div>
        </Preview>

        <Code>
          {`    <div class="flash--notice">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>

      <div className="code margin--top-2">
        <Preview className="padding--bottom-2">
          <div className="flash--alert">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
          </div>
        </Preview>

        <Code>
          {`    <div class="flash--alert">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>

      <div className="code margin--top-2">
        <Preview className="padding--bottom-2">
          <div className="flash--warning">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
          </div>
        </Preview>

        <Code>
          {`    <div class="flash--warning">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>
    </Main>
  );

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('COMPONENT', module)
  .add('Flash', () =>
    <Main className="wrap">
      <Title className="markdown">Flash</Title>
      <p className="text">Examples of building flash block with Bemo CSS.</p>

      <div className="example">
        <div className="flash--notice">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="flash--notice">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>
    </Main>
  );

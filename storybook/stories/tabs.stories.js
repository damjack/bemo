import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Tabs', () =>
    <Main className="wrap">
      <Title className="markdown">Tabs</Title>
      <p className="text">Examples of building tabs block with Bemo CSS.</p>

      <div className="example">
        <div className="tab">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="tab">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>
    </Main>
  );

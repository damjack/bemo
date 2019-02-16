import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('COMPONENT', module)
  .add('Flag', () =>
    <Main className="wrap">
      <Title className="markdown">Flag</Title>
      <p className="text">Examples of building flag block with Bemo CSS.</p>
      <div className="code">
        <Code>
          {`    <div class="flag">
      <div class="flag__image">
        <img src="http://placehold.it/100x100" />
      </div>
      <div class="flag__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
      </div>
    </div>`}
        </Code>
      </div>
    </Main>
  );

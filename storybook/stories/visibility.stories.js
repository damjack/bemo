import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('UTILITIES', module)
  .add('Visibility', () => (
    <Main className="wrap">
      <Title className="markdown">Visibility</Title>
      <p className="text">Utilities for controlling the visibility of an element.</p>

      <div className="code">
        <Preview>

        </Preview>
        <Code>
          {``}
        </Code>
      </div>
    </Main>
  ));

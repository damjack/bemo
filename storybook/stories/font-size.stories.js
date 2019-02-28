import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('UTILITIES', module)
  .add('Font Size', () =>
    <Main className="wrap">
      <Title className="markdown">Font Size</Title>
      <p className="text">Utilities for controlling the font size of an element.</p>

      <div className="code">
        <Preview>

        </Preview>
        <Code>
          {``}
        </Code>
      </div>
    </Main>
  );

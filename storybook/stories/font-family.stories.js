import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('UTILITIES', module)
  .add('Font Family', () =>
    <Main className="wrap">
      <Title className="markdown">Font Family</Title>
      <p className="text">Utilities for controlling the font family of an element.</p>

      <div className="code">
        <Preview>

        </Preview>
        <Code>
          {``}
        </Code>
      </div>
    </Main>
  );

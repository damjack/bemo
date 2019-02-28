import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Form', () => (
    <Main className="wrap">
      <Title className="markdown">Form</Title>
      <p className="text">Examples of building form block with Bemo CSS.</p>

      <div className="code">
        <Preview>

        </Preview>
        <Code>
          {``}
        </Code>
      </div>
    </Main>
  ));

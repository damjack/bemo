import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('LAYOUT', module)
  .add('Position', () =>
    <Main className="wrap">
      <Title className="markdown">Position</Title>
      <p className="text">Utilities for controlling how an element is positioned in the DOM.</p>

    </Main>
  );

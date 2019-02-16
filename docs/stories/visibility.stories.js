import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('LAYOUT', module)
  .add('Visibility', () => (
    <Main className="wrap">
      <Title className="markdown">Visibility</Title>
      <p className="text">Utilities for controlling the visibility of an element.</p>

    </Main>
  ));

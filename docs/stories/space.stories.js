import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('SPACING', module)
  .add('Margin & Padding', () => (
    <Main className="wrap">
      <Title className="markdown">Spacing</Title>
      <p className="text">Utilities for controlling an element's padding and margin.</p>

    </Main>
  ));

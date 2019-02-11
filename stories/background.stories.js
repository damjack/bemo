import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main } from '../components/Main';
import { Title } from '../components/Title';

storiesOf('BACKGROUNDS', module)
  .add('Background Color', () => (
    <Main className="wrap">
      <Title className="markdown">Background Color</Title>
      <p className="text">Utilities for controlling an element's background color</p>
    </Main>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main } from '../components/Main';
import { Title } from '../components/Title';

storiesOf('ABOUT', module)
  .add('Bemo', () => (
    <Main className="wrap">
      <Title className="markdown">Bemo framework</Title>
      <p className="text">Bemo is a Sass-based project starter meant to be a starting point and structural guide rather than a full framework. It's bare enough to not interfere with your custom styles or scripts, but yet has enough functioning modules to jumpstart a project in no time.</p>
    </Main>
  ));

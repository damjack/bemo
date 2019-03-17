import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Code } from '../components/Base';

storiesOf('ABOUT', module)
  .add('Bemo', () => (
    <Main className="wrap">
      <Title className="markdown">Bemo framework</Title>
      <p className="text">Bemo is a Sass-based project starter meant to be a starting point and structural guide rather than a full framework. It's bare enough to not interfere with your custom styles or scripts, but yet has enough functioning modules to jumpstart a project in no time.</p>

      <h3 className="title--secondary">NPM</h3>
      <p className="text--secondary">To install Bemo with NPM</p>
      <Code>
        {`    # Using npm
    npm install bemo-sass --save-dev

    # Using Yarn
    yarn add bemo-sass --dev`}
      </Code>
    </Main>
  ));

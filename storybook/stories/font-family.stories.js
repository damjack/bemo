import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('UTILITIES', module)
  .add('Font Family', () =>
    <Main className="wrap">
      <Title className="markdown">Font Family</Title>
      <p className="text">Utilities for controlling the font family of an element.</p>

      <div className="code">
        <Code>
          {`  +heading-font-family
  +body-font-family`}
        </Code>

        <p className="text">
          Bemo not present utilities class to manage font-family but offer a mixin to manage heading, body and monospace font-family. If you want to costumize the family use the specific sass variables file and change or add every you want< br/>In addition of this you should use an other mixin to custom font family of a specific class
        </p>
      </div>
    </Main>
  );

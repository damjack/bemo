import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Hamburger Menu', () =>
    <Main className="wrap">
      <Title className="markdown">Hamburger Menu</Title>
      <p className="text">Examples of building hamburger block with Bemo CSS.</p>

      <div className="example">
        <div className="nav__toggler">
          <div className="nav__toggler__box" />
        </div>

        <div className="example is-shifted">
          <div className="nav__toggler">
            <div className="nav__toggler__box" />
          </div>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="nav__toggler">
      <div class="nav__toggler__box"></div>
    </div>`}
        </Code>
      </div>
    </Main>
  );

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Button, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Progress Bar', () => (
    <Main className="wrap">
      <Title className="markdown">Progress</Title>
      <p className="text">Examples of building progress with Bemo</p>

      <div className="code">
        <Preview className="padding--bottom-2">
          <div className="margin--bottom-1">
            <div className="progress-bar"><div className="progress-bar__line--purple" style={{width: "10%"}}>10%</div></div>
          </div>
          <div className="margin--bottom-1">
            <div className="progress-bar"><div className="progress-bar__line--green" style={{width: "30%"}}>30%</div></div>
          </div>
          <div className="margin--bottom-1">
            <div className="progress-bar"><div className="progress-bar__line--orange" style={{width: "50%"}}>50%</div></div>
          </div>
          <div className="margin--bottom-1">
            <div className="progress-bar"><div className="progress-bar__line--red" style={{width: "80%"}}>80%</div></div>
          </div>
        </Preview>
        <Code>
          {`    <div class="progress-bar">
      <div class="progress-bar__line--green" style="width: 30%">30%</div>
    </div>
    <div class="progress-bar">
      <div class="progress-bar__line--red" style="width: 80%">80%</div>
    </div>`}
        </Code>
      </div>
    </Main>
  ));

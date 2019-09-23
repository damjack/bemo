import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Flag', () =>
    <Main className="wrap">
      <Title className="markdown">Flag</Title>
      <p className="text">Examples of building flag block with Bemo CSS.</p>

      <div className="example">
        <div className="flag">
          <div className="flag__image">
            <img src="http://placehold.it/100x100" />
          </div>
          <div className="flag__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
          </div>
        </div>
        <hr className="margin--all-2" />
        <div className="flag--blue">
          <div className="flag__image">
            <img src="http://placehold.it/100x100" />
          </div>
          <div className="flag__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
          </div>
        </div>
        <hr className="margin--all-2" />
        <div className="flag--teal">
          <div className="flag__image">
            <img src="http://placehold.it/100x100" />
          </div>
          <div className="flag__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
          </div>
        </div>
        <hr className="margin--all-2" />
      </div>

      <div className="code">
        <Code>
          {`    <div class="flag">
      <div class="flag__image">
        <img src="http://placehold.it/100x100" />
      </div>
      <div class="flag__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
      </div>
    </div>`}
        </Code>
      </div>
      <Title className="markdown">Flag Reverse</Title>
      <p className="text">Examples of building flag reverse block with Bemo CSS.</p>

      <div className="example padding--bottom-2">
        <div className="flag--rev">
          <div className="flag__image">
            <img src="http://placehold.it/100x100" />
          </div>
          <div className="flag__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
          </div>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="flag--rev">
      <div class="flag__image">
        <img src="http://placehold.it/100x100" />
      </div>
      <div class="flag__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
      </div>
    </div>`}
        </Code>
      </div>
    </Main>
  );

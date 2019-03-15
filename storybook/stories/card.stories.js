import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Card', () =>
    <Main className="wrap">
      <Title className="markdown">Card</Title>
      <p className="text">Examples of building card block with Bemo CSS.</p>

      <div className="code">
        <Preview>
          <div className="card">
            <div className="card__image">
              <img src="http://placehold.it/500x250" className="img-fluid"/>
            </div>
            <div className="card__header">
              <div className="card__header__title">Lorem ipsum dolor sit amet</div>
              <div className="card__header__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
            </div>
            <div className="card__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
            </div>
          </div>
        </Preview>

        <Code>
          {`    <div class="card">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>
    </Main>
  )
  .add('Card Horizontal', () =>
    <Main className="wrap">
      <Title className="markdown">Card</Title>
      <p className="text">Examples of building card block with Bemo CSS.</p>

      <div className="example">
        <div className="card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="card">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>`}
        </Code>
      </div>
    </Main>
  );

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Card', () =>
    <Main className="wrap">
      <Title className="markdown">Card</Title>
      <p className="text">Examples of building card block with Bemo CSS.</p>

      <div className="code">
        <Code>
          {`    <div class="card">
      <div class="card__image">
        <img src="http://placehold.it/500x250" class="img-fluid"/>
      </div>
      <div class="card__header">
        <div class="card__header__title">Lorem ipsum dolor sit amet</div>
        <div class="card__header__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
      </div>
      <div class="card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
      </div>
      <div class="card__footer">
        <a class="button--red" href="#">Action</a>
      </div>
    </div>`}
        </Code>
        <Preview className="padding--top-2">
          <div className="grid padding--both-3">
            <div className="grid__item lap-4-12 desk-3-12">
              <div className="card">
                <div className="card__image">
                  <img src="http://placehold.it/500x250" className="img-fluid"/>
                </div>
                <div className="card__header">
                  <div className="card__header__title">Lorem ipsum dolor sit amet</div>
                  <div className="card__header__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                </div>
                <div className="card__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
                </div>
                <div className="card__footer">
                  <a className="button--red" href="#">Action</a>
                </div>
              </div>
            </div>

            <div className="grid__item lap-4-12 desk-3-12">
              <div className="card--red">
                <div className="card__image">
                  <img src="http://placehold.it/500x250" className="img-fluid"/>
                </div>
                <div className="card__header">
                  <div className="card__header__title">Lorem ipsum dolor sit amet</div>
                  <div className="card__header__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                </div>
                <div className="card__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
                </div>
                <div className="card__footer">
                  <a className="button--yellow" href="#">Action</a>
                </div>
              </div>
            </div>
          </div>
        </Preview>
      </div>
    </Main>
  );

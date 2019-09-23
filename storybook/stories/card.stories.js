import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Card', () =>
    <Main className="wrap">
      <Title className="markdown">Card</Title>
      <p className="text">Examples of building card block with Bemo CSS.</p>

      <div className="code">
        <Preview className="padding--bottom-2">
          <div className="flex">
            <div className="flex__item flex-lap-4-12">
              <div className="card">
                <div className="card__image">
                  <img src="http://placehold.it/500x350" className="img-fluid"/>
                </div>
                <div className="card__header">
                  <div className="card__header__title">Lorem ipsum dolor sit amet</div>
                  <div className="card__header__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                </div>
                <div className="card__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
                </div>
                <div className="card__footer">
                  <a className="button--blue--outline" href="#">Action</a>
                  <a className="button--red" href="#">Action</a>
                </div>
              </div>
            </div>

            <div className="flex__item flex-lap-4-12">
              <div className="card--teal">
                <div className="card__image">
                  <img src="http://placehold.it/500x350" className="img-fluid"/>
                </div>
                <div className="card__header">
                  <div className="card__header__title">Lorem ipsum dolor sit amet</div>
                  <div className="card__header__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                </div>
                <div className="card__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
                </div>
                <div className="card__footer">
                  <a className="button--white--outline" href="#">Action</a>
                </div>
              </div>
            </div>
          </div>
        </Preview>
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
      </div>
    </Main>
  );

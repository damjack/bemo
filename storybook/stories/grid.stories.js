import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('LAYOUT', module)
  .add('Grid', () =>
    <Main className="wrap">
      <Title className="markdown">Grid</Title>
      <p className="text">Examples of building grid layouts with Bemo CSS.</p>

      <div className="example">
        <div className='grid'>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='grid__item width-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className="clearfix space-m--both-2"></div>
          <div className='grid__item width-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='grid__item width-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='grid__item width-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='grid__item width-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='grid__item width-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='grid__item width-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className="clearfix space-m--both-2"></div>
          <div className='grid__item width-6-12'>
            <div className='blurb'>
              Col 6/12
            </div>
          </div>
          <div className='grid__item width-6-12'>
            <div className='blurb'>
              Col 6/12
            </div>
          </div>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="grid">
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>
      <div class="grid__item width-2-12">
        Col 1/12
      </div>

      <div className="clearfix space-m--both-2"></div>

      <div class="grid__item width-2-12">
        Col 2/12
      </div>
      <div class="grid__item width-2-12">
        Col 2/12
      </div>
      <div class="grid__item width-2-12">
        Col 2/12
      </div>
      <div class="grid__item width-2-12">
        Col 2/12
      </div>
      <div class="grid__item width-2-12">
        Col 2/12
      </div>
      <div class="grid__item width-2-12">
        Col 2/12
      </div>

      <div className="clearfix space-m--both-2"></div>

      <div class="grid__item width-6-12">
        Col 6/12
      </div>
      <div class="grid__item width-6-12">
        Col 6/12
      </div>
    </div>`}
        </Code>
      </div>
    </Main>
  );

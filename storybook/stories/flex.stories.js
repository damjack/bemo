import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code } from '../components/Base';

storiesOf('LAYOUT', module)
  .add('Flex', () =>
    <Main className="wrap">
      <Title className="markdown">Flex</Title>
      <p className="text">Examples of building flex layouts with Bemo CSS.</p>

      <div className="example padding--bottom-2">
        <div className='flex'>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
          <div className='flex__item flex-1-12'>
            <div className='blurb'>
              Col 1/12
            </div>
          </div>
        </div>
        <div className="clearfix margin--both-2"></div>
        <div className='flex'>
          <div className='flex__item flex-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='flex__item flex-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='flex__item flex-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='flex__item flex-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='flex__item flex-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
          <div className='flex__item flex-2-12'>
            <div className='blurb'>
              Col 2/12
            </div>
          </div>
        </div>
        <div className="clearfix margin--both-2"></div>
        <div className='flex'>
          <div className='flex__item flex-6-12'>
            <div className='blurb'>
              Col 6/12
            </div>
          </div>
          <div className='flex__item flex-6-12'>
            <div className='blurb'>
              Col 6/12
            </div>
          </div>
        </div>
      </div>

      <div className="code">
        <Code>
          {`    <div class="flex">
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>
      <div class="flex__item flex-2-12">
        Col 1/12
      </div>

      <div className="clearfix margin--both-2"></div>

      <div class="flex__item flex-2-12">
        Col 2/12
      </div>
      <div class="flex__item flex-2-12">
        Col 2/12
      </div>
      <div class="flex__item flex-2-12">
        Col 2/12
      </div>
      <div class="flex__item flex-2-12">
        Col 2/12
      </div>
      <div class="flex__item flex-2-12">
        Col 2/12
      </div>
      <div class="flex__item flex-2-12">
        Col 2/12
      </div>

      <div className="clearfix margin--both-2"></div>

      <div class="flex__item flex-6-12">
        Col 6/12
      </div>
      <div class="flex__item flex-6-12">
        Col 6/12
      </div>
    </div>`}
        </Code>
      </div>
    </Main>
  );

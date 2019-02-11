import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('COMPONENT', module)
  .add('Grid', () =>
    <div className="wrap--large">
      <div className="flex">
        <div className="flex__item flex-12-12">
          <h1>BEMO storybook</h1>
          <p>Start your next project with the right foot: a scalable frontend architecture.</p>
        </div>
      </div>
      <div className='wrap'>
        <div className='blurb'>
          Wrap
        </div>
      </div>
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
        <div className="clearfix space--both-2"></div>
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
        <div className="clearfix space--both-2"></div>
        <div className='grid__item width-6-12'>
          <div className='blurb'>
            Col 2/12
          </div>
        </div>
        <div className='grid__item width-6-12'>
          <div className='blurb'>
            Col 2/12
          </div>
        </div>
      </div>
    </div>
  );

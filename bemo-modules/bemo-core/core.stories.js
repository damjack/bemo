import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Core', module)
.add('wrap', () => (
  <div className='wrap'>
    <div className='blurb'>
      Wrap
    </div>
  </div>
))
.add('grid', () => (
  <div className='space--both-4'>
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
))
.add('grid--middle', () => (
  <div className="grid--middle">
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
      </div>
    </div>
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
        <p>2</p>
      </div>
    </div>
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>
  </div>
))
.add('grid--bottom', () => (
  <div className="grid--bottom">
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
      </div>
    </div>
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
        <p>2</p>
      </div>
    </div>
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
    <div className="grid__item width-3-12">
      <div className="blurb">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>
  </div>
))
.add('grid push-pull', () => (
  <div className="grid">
    <div className="grid__item width-3-12 push-3-12">
      <div className="blurb">
        First Col 3/12
      </div>
    </div>
    <div className="grid__item width-3-12 pull-3-12">
      <div className="blurb">
        Last Col 3/12
      </div>
    </div>
    <div className="clearfix space--both-2"></div>
    <div className="grid__item width-4-12 push-8-12">
      <div className="blurb">
        First Col 5/12
      </div>
    </div>
    <div className="grid__item width-8-12 pull-4-12">
      <div className="blurb">
        Last Col 7/12
      </div>
    </div>
  </div>
))

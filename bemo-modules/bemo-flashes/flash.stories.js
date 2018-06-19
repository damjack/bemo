import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Flash', module)
.add('flash', () => (
  <div className='p-4'>
    <div className='flash'>
      flash
    </div>
  </div>
))
.add('flash--notice', () => (
  <div className='p-4'>
    <div className='flash flash--notice'>
      flash--notice
    </div>
  </div>
))
.add('flash--alert', () => (
  <div className='p-4'>
    <div className='flash flash--alert'>
      flash--alert
    </div>
  </div>
))
.add('flash--full', () => (
  <div className='p-4'>
    <div className="flash flash--full">
      Full width flash message.
    </div>
  </div>
))

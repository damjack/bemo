import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Flex', module)
.add('flex', () => (
  <div className='space--both-2'>
    <div className='flex'>
      flex
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

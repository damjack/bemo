import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import '../bemo-modules/bemo/application.sass'
import { version } from '../package.json'

setOptions({
  name: `BEMO v${version}`,
  url: 'http://cantierecantiere.github.io/bemo/',
  showDownPanel: false,
})

addDecorator(story => (
  <div className='space--both-2'>
    {story()}
  </div>
))

const contexts = [
  require.context('../bemo-modules/', true, /stories.*\.js$/),
]

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module)

import React from 'react'
import { storiesOf, configure, addDecorator, addParameters } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withConsole } from '@storybook/addon-console';
import { themes } from '@storybook/components';

import '../sass/application.sass'
import { version } from '../package.json'

addDecorator(
  withOptions({
    name: `BEMO v${version}`,
    url: 'http://cantierecreativo.github.io/bemo/',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sidebarAnimations: true,
    theme: {
      mainBackground: '#F7F7F7 linear-gradient(to bottom right, #EEEEEE, #FFFFFF)',
      mainBorder: '1px solid rgba(0,0,0,0.1)',
      mainBorderColor: 'rgba(0,0,0,0.1)',
      mainBorderRadius: 4,
      mainFill: 'rgba(255,255,255,0.89)',
      barFill: 'rgba(255,255,255,1)',
      barSelectedColor: 'rgba(0,0,0,0.1)',
      inputFill: 'rgba(0,0,0,0.05)',
      mainTextFace: '"Source Sans Pro", Helvetica, Roboto, Arial, sans-serif',
      mainTextColor: '#333333',
      dimmedTextColor: 'rgba(0,0,0,0.4)',
      highlightColor: '#9fdaff',
      successColor: '#09833a',
      failColor: '#d53535',
      warnColor: 'orange',
      mainTextSize: 13,
      monoTextFace: '"Bitstream Vera Sans Mono", Consolas, Courier, monospace',
      layoutMargin: 10,
      overlayBackground: 'linear-gradient(to bottom right, rgba(233, 233, 233, 0.6), rgba(255, 255, 255, 0.8))'
    }
  })
);
// receive console outputs
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const contexts = [
  require.context('../stories/', true, /stories.*\.js$/),
]

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module)

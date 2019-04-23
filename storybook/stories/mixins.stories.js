import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Button, Preview, Code } from '../components/Base';

storiesOf('MIXINS', module)
  .add('Helpers', () => (
    <Main className="wrap">
      <Title className="markdown">@at-breakpoint</Title>
      <p className="text">Manage multiple breakpoint style with mixin</p>

      <div className="code">
        <Code>
          {`    $breakpoint-widths: map-merge(("palm": 0px, "tab": 480px, "lap": 720px, "desk": 1024px, "monitor": 1280px, "wall": 1440px, "full": 1920px), $breakpoint-widths)

    // @at-breakpoint(NAME OF WIDTH SPECIFIED IN MAP OF BREAKPOINTS)
    // @at-custom-breakpoint(CUSTOM MIN WITH SPECIFIED IN PX, OPTIONAL CUSTOM MAX WIDTH SPECIFIED IN PX)

    @at-breakpoint(lap) // 1024px > viewport >= 720px
      .style-class
        text0align: center
    @at-breakpoint(desk) // viewport >= 1024px
      .style-class
        text-align: left

    @at-custom-breakpoint(1160px) // viewport >= 1160px
      .style-class
        text-align: center
          `}
        </Code>
      </div>

      <Title className="markdown">@font-family</Title>
      <p className="text">Manage the base font family and custom one with mixin</p>

      <div className="code">
        <Code>
          {`    $heading-font-family:         $sans-serif
    $heading-font-weight:         600

    $body-font-family:            $sans-serif
    $body-font-weight:            300

    $monospaced-font-family:      $monospace
    $monospaced-font-weight:      normal

    // +font-family(CUSTOM FONT FAMILY OR HELVETIVA NEUE, OPTIONAL FONT WIGHT)

    +heading-font-family // +font-family($heading-font-family, $heading-font-weight)
    +body-font-family // +font-family($body-font-family, $body-font-weight)
    +monospaced-font-family // +font-family($monospaced-font-family, $monospaced-font-weight)
          `}
        </Code>
      </div>

      <Title className="markdown">@font-size</Title>
      <p className="text">Manage the font size and line height with mixin</p>

      <div className="code">
        <Code>
          {`    $all-font-sizes: map-merge(("alpha": 30px, "beta": 27px, "gamma": 22px, "delta": 18px), $heading-font-sizes)
    $line-heights: map-merge(("alpha": 38px, "beta": 30px, "gamma": 26px, "delta": 22px, "smallprint": 19px, "milli": 14px), $line-heights)

    // +font-size(NAME OF FONT SIZES FROM MAP OR CUSTOM SIZE IN PX, OPTIONAL NAME OF LINE HEIGHTS FROM MAP OR CUSTOM SIZE IN PX)

    +font-size(alpha) // font-family: 30px; line-height: 38px
    +font-size(beta, aplha) // font-family: 27px; line-height: 38px
    +font-size(30px) // font-family: 30px;
    +font-size(20px, 32px) // font-family: 20px; line-height: 32px
          `}
        </Code>
      </div>

      <Title className="markdown">@space-rule</Title>
      <p className="text">Manage padding or margin with mixin</p>

      <div className="code">
        <Code>
          {`    <button class="button">Button</button>
    <button class="button--blue">Blue</button>
    <button class="button--red">Red</button>`}
        </Code>
      </div>

      <Title className="markdown">@position</Title>
      <p className="text">Manage position abolute with mixin</p>

      <div className="code">
        <Code>
          {`    // +position(absolute|fixed, CUSTOM POSITION FROM TOP TO LEFT OR NULL)

    +position(absolute, 50% null null 0) // position: absolute; top: 50%; left: 0;
    +position(fixed, 0 0 0 0) // position: fixed; top: 0; right: 0; bottom: 0; left: 0;
          `}
        </Code>
      </div>

      <Title className="markdown">@transition</Title>
      <p className="text">Manage the transition effect with mixin</p>

      <div className="code">
        <Code>
          {`    $transition-functions: map-merge(("material": cubic-bezier(.55,0,.1,1), "inertial": cubic-bezier(0.190, 1.000, 0.220, 1.000), "bounce": cubic-bezier(0.175, 0.885, 0.32, 1.275), "ease-in-out": cubic-bezier(0.645, 0.045, 0.355, 1), "ease-in": cubic-bezier(0.55, 0.055, 0.675, 0.19), "ease-out": cubic-bezier(0.215, 0.61, 0.355, 1)), $transition-functions)
    $transition-base: all 1s
    $transition-advanced: transform 0.6s

    // +base-transition(TRANSITION FROM MAP, 'base' || 'advanced')

    +base-transition(alpha) // font-family: 30px; line-height: 38px
    +base-transition(beta, aplha) // font-family: 27px; line-height: 38px
          `}
        </Code>
      </div>
    </Main>
  ));

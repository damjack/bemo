import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

const colorRows = {
  white: {
    class: ".background--white",
    property: "+bg-variant('white')",
    sample: <Block className="background--white padding--all-1">White</Block>
  },
  gray: {
    class: ".background--gray",
    property: "+bg-variant('gray')",
    sample: <Block className="background--gray text--white padding--all-1">Gray</Block>
  },
  black: {
    class: ".background--black",
    property: "+bg-variant('black')",
    sample: <Block className="background--black text--white padding--all-1">Black</Block>
  },
  blue: {
    class: ".background--blue",
    property: "+bg-variant('blue')",
    sample: <Block className="background--blue text--white padding--all-1">Blue</Block>
  },
  purple: {
    class: ".background--purple",
    property: "+bg-variant('purple')",
    sample: <Block className="background--purple text--white padding--all-1">Purple</Block>
  },
  red: {
    class: ".background--red",
    property: "+bg-variant('red')",
    sample: <Block className="background--red text--white padding--all-1">Red</Block>
  },
  orange: {
    class: ".background--orange",
    property: "+bg-variant('orange')",
    sample: <Block className="background--orange text--white padding--all-1">Orange</Block>
  },
  yellow: {
    class: ".background--yellow",
    property: "+bg-variant('yellow')",
    sample: <Block className="background--yellow padding--all-1">Yellow</Block>
  },
  green: {
    class: ".background--green",
    property: "+bg-variant('green')",
    sample: <Block className="background--green text--white padding--all-1">Green</Block>
  },
  teal: {
    class: ".background--teal",
    property: "+bg-variant('teal')",
    sample: <Block className="background--teal text--white padding--all-1">Teal</Block>
  }
};

const colorGradientRows = {
  gray: {
    class: ".background--gray--gradient",
    property: "+bg-variant-gradient(#6c757d, darken(#6c757d, 20))",
    sample: <Block className="background--gray--gradient text--white padding--all-1">Gray</Block>
  },
  blue: {
    class: ".background--blue--gradient",
    property: "+bg-variant-gradient(#007bff, darken(#007bff, 20))",
    sample: <Block className="background--blue--gradient text--white padding--all-1">Blue</Block>
  },
  purple: {
    class: ".background--purple--gradient",
    property: "+bg-variant-gradient(#524ad0, darken(#524ad0, 20))",
    sample: <Block className="background--purple--gradient text--white padding--all-1">Purple</Block>
  },
  red: {
    class: ".background--red--gradient",
    property: "+bg-variant-gradient(#dc3545, darken(#dc3545, 20))",
    sample: <Block className="background--red--gradient text--white padding--all-1">Red</Block>
  },
  orange: {
    class: ".background--orange--gradient",
    property: "+bg-variant-gradient(#fd7e14, darken(#fd7e14, 20))",
    sample: <Block className="background--orange--gradient text--white padding--all-1">Orange</Block>
  },
  yellow: {
    class: ".background--yellow--gradient",
    property: "+bg-variant-gradient(#ffc107, darken(#ffc107, 20))",
    sample: <Block className="background--yellow--gradient padding--all-1">Yellow</Block>
  },
  green: {
    class: ".background--green--gradient",
    property: "+bg-variant-gradient(#28a745, darken(#28a745, 20))",
    sample: <Block className="background--green--gradient text--white padding--all-1">Green</Block>
  },
  teal: {
    class: ".background--teal--gradient",
    property: "+bg-variant-gradient(#20c997, darken(#20c997, 20))",
    sample: <Block className="background--teal--gradient text--white padding--all-1">Teal</Block>
  }
};

storiesOf('UTILITIES', module)
  .add('Background Color', () => (
    <Main className="wrap">
      <Title className="markdown">Background Color</Title>
      <p className="text">Utilities for controlling an element's background color</p>

      <Table className="table">{colorRows}</Table>

      <div className="code">
        <Code>
          {`    <section class="background">deafult</section>
    <section class="background--blue">blue</section>
    <section class="background--red">reg</section>`}
        </Code>
      </div>

      <Title className="markdown">Background Color Gradient</Title>
      <p className="text">Utilities for controlling an element's background color</p>

      <Table className="table">{colorGradientRows}</Table>

      <div className="code">
        <Code>
          {`    <section class="background--purple--gradient">deafult</section>
    <section class="background--blue--gradient">blue</section>
    <section class="background--red--gradient">reg</section>`}
        </Code>
      </div>
    </Main>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

const colorRows = {
  white: {
    class: ".background",
    property: "background-color: #fff",
    sample: <Block className="background--white space-p--all-1">White</Block>
  },
  gray: {
    class: ".background--gray",
    property: "background-color: #6c757d",
    sample: <Block className="background--gray space-p--all-1">Gray</Block>
  },
  black: {
    class: ".background--black",
    property: "background-color: #000",
    sample: <Block className="background--black space-p--all-1">Black</Block>
  },
  blue: {
    class: ".background--blue",
    property: "background-color: #007bff",
    sample: <Block className="background--blue space-p--all-1">Blue</Block>
  },
  purple: {
    class: ".background--purple",
    property: "background-color: #6f42c1",
    sample: <Block className="background--purple space-p--all-1">Purple</Block>
  },
  red: {
    class: ".background--red",
    property: "background-color: #dc3545",
    sample: <Block className="background--red space-p--all-1">Red</Block>
  },
  orange: {
    class: ".background--orange",
    property: "background-color: #fd7e14",
    sample: <Block className="background--orange space-p--all-1">Orange</Block>
  },
  yellow: {
    class: ".background--yellow",
    property: "background-color: #ffc107",
    sample: <Block className="background--yellow space-p--all-1">Yellow</Block>
  },
  green: {
    class: ".background--green",
    property: "background-color: #28a745",
    sample: <Block className="background--green space-p--all-1">Green</Block>
  },
  teal: {
    class: ".background--teal",
    property: "background-color: #20c997",
    sample: <Block className="background--teal space-p--all-1">Teal</Block>
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
    </Main>
  ));

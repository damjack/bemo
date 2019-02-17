import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

const colorRows = {
  white: {
    class: ".white",
    property: "color: #fff",
    sample: <Block className="text--white">White</Block>
  },
  gray: {
    class: ".gray",
    property: "color: #6c757d",
    sample: <Block className="text--gray">Gray</Block>
  },
  black: {
    class: ".black",
    property: "color: #000",
    sample: <Block className="text--black">Black</Block>
  },
  blue: {
    class: ".blue",
    property: "color: #007bff",
    sample: <Block className="text--blue">Blue</Block>
  },
  purple: {
    class: ".purple",
    property: "color: #6f42c1",
    sample: <Block className="text--purple">Purple</Block>
  },
  red: {
    class: ".red",
    property: "color: #dc3545",
    sample: <Block className="text--red">Red</Block>
  },
  orange: {
    class: ".orange",
    property: "color: #fd7e14",
    sample: <Block className="text--orange">Orange</Block>
  },
  yellow: {
    class: ".yellow",
    property: "color: #ffc107",
    sample: <Block className="text--yellow">Yellow</Block>
  },
  green: {
    class: ".green",
    property: "color: #28a745",
    sample: <Block className="text--green">Green</Block>
  },
  teal: {
    class: ".teal",
    property: "color: #20c997",
    sample: <Block className="text--teal">Teal</Block>
  },
};

storiesOf('TYPOGRAPHY', module)
  .add('Color', () => (
    <Main className="wrap">
      <Title className="markdown">Text Color</Title>
      <p className="text">Utilities for controlling the text color of an element</p>

      <Table className="table">{colorRows}</Table>
    </Main>
  ));

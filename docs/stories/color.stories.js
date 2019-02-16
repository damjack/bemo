import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

const colorRows = {
  white: {
    class: ".white",
    property: "color: #fff",
    sample: <Block className="white">white</Block>
  },
  gray: {
    class: ".gray",
    property: "color: #6c757d",
    sample: <Block className="gray">gray</Block>
  },
  black: {
    class: ".black",
    property: "color: #000",
    sample: <Block className="black">black</Block>
  },
  blue: {
    class: ".blue",
    property: "color: #007bff",
    sample: <Block className="blue">blue</Block>
  },
  purple: {
    class: ".purple",
    property: "color: #6f42c1",
    sample: <Block className="purple">purple</Block>
  },
  red: {
    class: ".red",
    property: "color: #dc3545",
    sample: ""
  },
  orange: {
    class: ".orange",
    property: "color: #fd7e14",
    sample: ""
  },
  yellow: {
    class: ".yellow",
    property: "color: #ffc107",
    sample: ""
  },
  green: {
    class: ".green",
    property: "color: #28a745",
    sample: ""
  },
  teal: {
    class: ".teal",
    property: "color: #20c997",
    sample: ""
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

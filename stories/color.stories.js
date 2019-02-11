import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main } from '../components/Main';
import { Title } from '../components/Title';
import { Table } from '../components/Table';
import { Block } from '../components/Block';

const colorRows = {
  white: {
    class: ".white",
    property: "white-color: #fff",
    sample: <Block className="white">white</Block>
  },
  gray: {
    class: ".gray",
    property: "gray-color: #6c757d",
    sample: <Block className="gray">gray</Block>
  },
  black: {
    class: ".black",
    property: "black-color: #000",
    sample: <Block className="black">black</Block>
  },
  blue: {
    class: ".blue",
    property: "blue-color: #007bff",
    sample: <Block className="blue">blue</Block>
  },
  indigo: {
    class: ".indigo",
    property: "indigo-color: #6610f2",
    sample: <Block className="indigo">indigo</Block>
  },
  purple: {
    class: ".purple",
    property: "purple-color: #6f42c1",
    sample: <Block className="purple">purple</Block>
  },
  pink: {
    class: ".pink",
    property: "pink-color: #e83e8c",
    sample: ""
  },
  red: {
    class: ".red",
    property: "red-color: #dc3545",
    sample: ""
  },
  orange: {
    class: ".orange",
    property: "orange-color: #fd7e14",
    sample: ""
  },
  yellow: {
    class: ".yellow",
    property: "yellow-color: #ffc107",
    sample: ""
  },
  green: {
    class: ".green",
    property: "green-color: #28a745",
    sample: ""
  },
  teal: {
    class: ".teal",
    property: "teal-color: #20c997",
    sample: ""
  },
  cyan: {
    class: ".cyan",
    property: "cyan-color: #17a2b8",
    sample: ""
  }
};

storiesOf('TYPOGRAPHY', module)
  .add('Color', () => (
    <Main className="wrap">
      <Title className="markdown">Text Color</Title>
      <p className="text">Utilities for controlling the text color of an element</p>

      <Table className="table">{colorRows}</Table>
    </Main>
  ));

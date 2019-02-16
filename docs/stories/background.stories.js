import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

const colorRows = {
  white: {
    class: ".background",
    property: "background-color: #fff",
    sample: <Block className="white">white</Block>
  },
  gray: {
    class: ".background--gray",
    property: "background-color: #6c757d",
    sample: <Block className="gray">gray</Block>
  },
  black: {
    class: ".background--black",
    property: "background-color: #000",
    sample: <Block className="black">black</Block>
  },
  blue: {
    class: ".background--blue",
    property: "background-color: #007bff",
    sample: <Block className="blue">blue</Block>
  },
  purple: {
    class: ".background--purple",
    property: "background-color: #6f42c1",
    sample: <Block className="purple">purple</Block>
  },
  red: {
    class: ".background--red",
    property: "background-color: #dc3545",
    sample: ""
  },
  orange: {
    class: ".background--orange",
    property: "background-color: #fd7e14",
    sample: ""
  },
  yellow: {
    class: ".background--yellow",
    property: "background-color: #ffc107",
    sample: ""
  },
  green: {
    class: ".background--green",
    property: "background-color: #28a745",
    sample: ""
  },
  teal: {
    class: ".background--teal",
    property: "background-color: #20c997",
    sample: ""
  }
};

storiesOf('BACKGROUNDS', module)
  .add('Background Color', () => (
    <Main className="wrap">
      <Title className="markdown">Background Color</Title>
      <p className="text">Utilities for controlling an element's background color</p>
      <div className="code">
        <Code>
          {`    <section class="background">deafult</section>
    <section class="background--blue">blue</section>
    <section class="background--red">reg</section>`}
        </Code>
      </div>

      <Table className="table">{colorRows}</Table>
    </Main>
  ));

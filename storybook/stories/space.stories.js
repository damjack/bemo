import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

const spaceRows = {
  all: {
    class: ".margin|padding--all-size",
    property: "margin|padding global",
  },
  both: {
    class: ".margin|padding--both-size",
    property: "margin|padding top and bottom",
  },
  top: {
    class: ".margin|padding--direction-size",
    property: "margin|padding for all direction",
  },
  bottom: {
    class: ".margin|padding--both-on-breakpoint",
    property: "margin|padding top and bottom in only breakpoint",
  },
  left: {
    class: ".margin|padding--direction-size-on-breakpoint",
    property: "margin|padding for all direction in only breakpoint",
  }
};

storiesOf('UTILITIES', module)
  .add('Margin & Padding', () => (
    <Main className="wrap">
      <Title className="markdown">Spacing</Title>
      <p className="text">Utilities for controlling an element's padding and margin.</p>

      <div className="code">
        <Preview>
          <div className="margin--both-2" style={{border: "1px solid #000"}}>
            <p className="padding--left-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="padding--both-2" style={{border: "1px solid #000"}}>
            <p className="padding--left-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Preview>
        <Code>
          {`    <div class="margin--both-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="padding--both-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>`}
        </Code>
      </div>

      <div className="margin--top-3">
        <p className="text">Control an element's padding and margin using the <code>{`.margin--{direction?}-{size}`}</code>, <code>{`.padding--{direction?}-{size}`}</code> utilities.</p>
        <p className="text">The size is a Fibonacci sequence and start with 1. The real space is defined into separated variable</p>
      </div>

      <Table className="table">{spaceRows}</Table>
    </Main>
  ));

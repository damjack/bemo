import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Title, Block, Preview, Code, Table } from '../components/Base';

storiesOf('BLOCKS', module)
  .add('Form', () => (
    <Main className="wrap">
      <Title className="markdown">Form</Title>
      <p className="text">Examples of building form block with Bemo CSS.</p>

      <div className="code">
        <Preview>
          <form className="form">
            <fieldset>
              <div className="form__field">
                <label className="form__label">Email</label>
                <input placeholder="foo@bar.com" type="email" className="form__input" />
              </div>
              <div className="form__field">
                <label className="form__label">Name</label>
                <input placeholder="First Name" type="text" className="form__input" />
              </div>
              <div className="form__field">
                <label className="form__label">Lastname</label>
                <input placeholder="Last Name" type="text" className="form__input" />
              </div>

              <div className="form__field">
                <label className="input--checkbox">
                  <input type="checkbox" />
                  <span className="input__label">Check me</span>
                </label>
              </div>

              <div className="form__field">
                <label className="input--radio">
                  <input type="radio" name="radio" checked/>
                  <span className="input__label">Check me</span>
                </label>
                <label className="input--radio">
                  <input type="radio" name="radio"/>
                  <span className="input__label">Check me</span>
                </label>
              </div>
            </fieldset>
          </form>
        </Preview>
        <Code>
          {`  <form class="form">
    <fieldset>

      <div class="form__field">
        <label class="form__label">Email</label>
        <input placeholder="foo@bar.com" type="email" className="form__input" />
      </div>

      <div class="form__field">
        <label class="input--checkbox">
          <input type="checkbox" />
          <span class="input__label">Check me</span>
        </label>
      </div>

      <div class="form__field">
        <label class="input--radio">
          <input type="radio" name="radio" checked/>
          <span class="input__label">Check me</span>
        </label>
        <label class="input--radio">
          <input type="radio" name="radio"/>
          <span class="input__label">Check me</span>
        </label>
      </div>

    </fieldset>
  </form>
            `}
        </Code>
      </div>
    </Main>
  ));
